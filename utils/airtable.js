import Airtable from 'airtable';
import camelCase from 'lodash.camelcase';

const base = Airtable.base('appfUKrkbUfTkWvyh');

export const getContentByKey = async (key) => {
  const tableId = `Website-content`;
  const records = await base(tableId)
    .select({
      filterByFormula: `key="${key}"`,
    })
    .firstPage();
  return records[0].get('content') || ''; // Defensive, YOLO
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

const getAllRecordsForTable = async (tableId) => {
  let allRecords = [];
  await base(tableId)
    .select({})
    .eachPage(function page(records, fetchNextPage) {
      console.log(Object.keys(records[0]._rawJson.fields));
      allRecords = [...allRecords, ...records.map(recordToObject)];
      fetchNextPage(); // Will call done when there are no more
    });
  return allRecords;
};

export const getEvents = () => getAllRecordsForTable('Shows');
