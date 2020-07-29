import {
  getRecordByKeyField,
  getAllRecordsForTable,
  populate,
  recordToObject,
} from '../utils/airtable';

export const getContentByKey = async (key) => {
  const tableId = `Website-content`;
  const record = await getRecordByKeyField({
    tableId,
    key,
    field: 'key',
  });
  return record?.get('content') || '';
};

export const getEvents = async () => {
  const records = await getAllRecordsForTable('Shows', {
    sort: [{ field: 'Date', direction: 'desc' }],
  });
  const populated = await Promise.all(records.map(populate));
  return populated.map(recordToObject);
};
