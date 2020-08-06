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
    keyField: 'key',
  });
  return record?.get('content') || '';
};

export const getShows = async () => {
  const records = await getAllRecordsForTable('Shows', {
    sort: [{ field: 'Date', direction: 'desc' }],
  });
  const populated = await Promise.all(records.map(populate));
  return populated.map(recordToObject);
};

export const getUpcomingShows = async () => {
  const records = await getAllRecordsForTable('Shows', {
    sort: [{ field: 'Date', direction: 'desc' }],
    filter: 'IS_AFTER({Date}, NOW())',
  });
  const populated = await Promise.all(records.map(populate));
  return populated.map(recordToObject);
};
