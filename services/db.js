import { initialize, getByField, get, recordToObject } from '../utils/airtable';

initialize({
  baseId: 'appfUKrkbUfTkWvyh',
  schemas: {
    Shows: {
      populateFields: [
        { path: 'Venue', from: 'Venues', multi: false },
        { path: 'With', from: 'Bands', multi: true, fields: ['Name'] },
      ],
    },
  },
});

export const getContentByKey = async (key) => {
  const record = await getByField('Website-content', {
    key,
    field: 'key',
  });
  return record?.get('content') || '';
};

export const getShows = async () => {
  let records;
  try {
    records = await get('Shows', {
      sort: [{ field: 'Date', direction: 'desc' }],
      populate: [
        {
          path: 'Venue',
          from: 'Venues',
          multi: false,
          fields: ['Address', 'City', 'Name'],
        },
        { path: 'With', from: 'Bands', multi: true, fields: ['Name'] },
      ],
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Fetching shows failed`);
  }
  return records.map(recordToObject);
};

export const getUpcomingShows = async () => {
  const records = await get('Shows', {
    sort: [{ field: 'Date', direction: 'desc' }],
    filter: 'IS_AFTER({Date}, NOW())',
  });
  return records.map(recordToObject);
};
