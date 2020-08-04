import Airtable from 'airtable';
import schemas from './schemas';
import { getTableName } from './utils';

const isAirtableEnabled = !!process.env.AIRTABLE_API_KEY;
const base = isAirtableEnabled ? Airtable.base('appfUKrkbUfTkWvyh') : null;

export { recordToObject } from './utils';

export const getRecordById = async ({ tableId, recordId, fields }) => {
  const records = await base(tableId)
    .select({
      filterByFormula: `RECORD_ID()="${recordId}"`,
      ...(fields ? { fields } : {}),
    })
    .firstPage();
  return records[0];
};

export const getRecordByKeyField = async ({
  tableId,
  key,
  keyField,
  fields,
}) => {
  const records = await base(tableId)
    .select({
      filterByFormula: `${keyField}="${key}"`,
      ...(fields ? { fields } : {}),
    })
    .firstPage();
  return records[0];
};

export const getAllRecordsForTable = async (
  tableId,
  { sort, filter: filterByFormula },
) =>
  base(tableId)
    .select({
      sort,
      ...(filterByFormula ? { filterByFormula } : {}),
    })
    .all();

export const populate = async (record) => {
  // TODO: document `populateFields` prop
  const populateFields = schemas[getTableName(record)]?.populateFields;
  if (!populateFields) return record;

  const populateField = async ({ path, from, multi, fields }) => {
    const ref = record.get(path);
    const output = {
      path,
      from,
      result: ref,
    };
    if (!ref) return output;
    try {
      if (multi) {
        output.result = await Promise.all(
          ref.map((recordId) =>
            getRecordById({
              tableId: from,
              recordId,
              fields,
            }),
          ),
        );
      } else {
        output.result = await getRecordById({
          tableId: from,
          recordId: ref,
        });
      }
    } catch (err) {
      console.error(
        `Failed to populate ${path} of ${record.id}\n  ${err.message}`,
      );
    }
    record.fields[path] = output.result; // eslint-disable-line no-param-reassign
  };

  // TODO: Error handling?
  await Promise.all(populateFields.map(populateField));
  return record;
};
