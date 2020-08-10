import Airtable from 'airtable';
import reduce from 'awaity/reduce';

// TODO: Error handling, everywhere
// TODO: Document params, everywhere

let base;

// TODO: Singletons are annoying with multiple sources, refactor to more reusable class?
export const initialize = ({ baseId }) => {
  const isAirtableEnabled = !!process.env.AIRTABLE_API_KEY;
  if (!isAirtableEnabled)
    throw new Error(`AIRTABLE_API_KEY is not set, luft init failed`);

  base = Airtable.base(baseId);
};

export { recordToObject, getTableName } from './utils';

export const getById = async (tableId, { recordId, fields }) => {
  const records = await base(tableId)
    .select({
      filterByFormula: `RECORD_ID()="${recordId}"`, // Can't select fields with a find operation
      ...(fields ? { fields } : {}),
    })
    .firstPage();
  return records[0];
};

export const getByField = async (tableId, { key, field, fields }) => {
  const records = await base(tableId)
    .select({
      filterByFormula: `${field}="${key}"`,
      ...(fields ? { fields } : {}),
    })
    .firstPage();
  return records[0];
};

export const get = async (tableId, { sort, filter, populate }) => {
  const records = await base(tableId)
    .select({
      sort,
      ...(filter ? { filterByFormula: filter } : {}),
    })
    .all();
  if (!populate) return records;
  return Promise.all(records.map((record) => populateRecord(record, populate)));
};

const populateField = async (record, { path, from, multi, fields }) => {
  const ref = record.get(path);
  if (!ref) return record;
  let result = ref;
  try {
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
