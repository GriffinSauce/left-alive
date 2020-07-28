import Airtable from 'airtable';
import camelCase from 'lodash.camelcase';
import { showsSchema } from './schemas';

const base = Airtable.base('appfUKrkbUfTkWvyh');

export const getContentByKey = async (key) => {
  const tableId = `Website-content`;
  const records = await base(tableId)
    .select({
      filterByFormula: `key="${key}"`,
    })
    .firstPage();
  return records[0]?.get('content') || '';
};

const camelCaseKeys = (obj) =>
  Object.keys(obj).reduce(
    (modified, key) => ({
      ...modified,
      [camelCase(key)]: obj[key],
    }),
    {},
  );

const recordToObject = (record) => ({
  created: record._rawJson.createdTime,
  ...camelCaseKeys(record._rawJson.fields),
});

// TODO: should this do recordToObject?
const getRecordById = async ({ tableId, recordId }) =>
  base(tableId)
    .find(recordId)
    .then((record) => recordToObject(record));

// TODO: support multivalue fields
// TODO: document `populates` param
const populate = async (record, populates) => {
  const results = await Promise.all(
    populates.map(async ({ path, from }) => ({
      path,
      from,
      result: await getRecordById({
        tableId: from,
        recordId: record[path],
      }),
    })),
  );
  return results.reduce((newRecord, { path, from, result }) => {
    newRecord[path] = result;
    return newRecord;
  }, record);
};

// TODO: make populates more generic
// TODO: better factoring for this whole thing
const getAllRecordsForTable = async (tableId) => {
  let allRecords = [];
  await base(tableId)
    .select({
      sort: [{ field: 'Date', direction: 'desc' }],
    })
    .eachPage((records, fetchNextPage) => {
      allRecords = [
        ...allRecords,
        ...records.map((record) => populate(record, showsSchema.linkedFields)),
      ];

      fetchNextPage(); // Will call done when there are no more
    });
  return Promise.all(allRecords);
};

export const getEvents = () => getAllRecordsForTable('Shows');
