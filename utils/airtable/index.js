import Airtable from 'airtable';
import reduce from 'awaity/reduce';
import { recordToObject } from './utils';

export { recordToObject, getTableName } from './utils';

// TODO: Input checks, everywhere
// TODO: Error handling, everywhere
// TODO: Document params, everywhere

let base;

export const initialize = ({ baseId, apiKey }) => {
  if (!baseId) throw new Error(`"baseId" is required `);
  if (!apiKey) throw new Error(`"apiKey" is required `);

  Airtable.configure({ apiKey });
  base = Airtable.base(baseId);
};

export const getBase = () => base; // Go nuts, you got this!

const populateField = async (record, { path, from, multi, fields }) => {
  const ref = record.get(path);
  if (!ref) return record;
  let result = ref;

  try {
    /* eslint-disable no-use-before-define */
    result = multi
      ? await Promise.all(
          ref.map((recordId) =>
            getById(from, {
              recordId,
              fields,
            }),
          ),
        )
      : await getById(from, {
          recordId: ref,
          fields,
        });
    /* eslint-enable no-use-before-define */
  } catch (err) {
    console.error(
      `Failed to populate ${path} of ${record.id}\n  ${err.message}`,
    );
  }

  // Don't recreate an object here because we're dealing with a record
  record.fields[path] = result; // eslint-disable-line no-param-reassign
  return record;
};

const populateRecord = (record, populateSpecs) =>
  reduce(populateSpecs, populateField, record); // Reduce with promises

export const getById = async (
  tableId,
  { recordId, fields, populate, toObject },
) => {
  const [record] = await base(tableId)
    .select({
      filterByFormula: `RECORD_ID()="${recordId}"`, // Can't select fields with a find operation
      ...(fields ? { fields } : {}),
    })
    .firstPage();

  let populated = record;
  if (populate) populated = await populateRecord(record, populate);

  return toObject ? recordToObject(populated) : populated;
};

export const getByField = async (
  tableId,
  { key, field, fields, populate, toObject },
) => {
  const [record] = await base(tableId)
    .select({
      filterByFormula: `${field}="${key}"`,
      ...(fields ? { fields } : {}),
    })
    .firstPage();

  let populated = record;
  if (populate) populated = await populateRecord(record, populate);

  return toObject ? recordToObject(populated) : populated;
};

export const get = async (
  tableId,
  { sort, fields, filter, populate, toObject = false },
) => {
  const records = await base(tableId)
    .select({
      sort,
      ...(fields ? { fields } : {}),
      ...(filter ? { filterByFormula: filter } : {}),
    })
    .all();

  let populated = records;
  if (populate) {
    populated = await Promise.all(
      records.map((record) => populateRecord(record, populate)),
    );
  }

  return toObject ? populated.map(recordToObject) : populated;
};
