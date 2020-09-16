import { initialize, getByField, get } from 'luft';

initialize({
  baseId: 'appfUKrkbUfTkWvyh',
  apiKey: process.env.AIRTABLE_API_KEY,
});

export const getContentByKey = async (key) => {
  const record = await getByField('Website-content', {
    key,
    field: 'key',
    toObject: true,
  });
  return record?.content || '';
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
      toObject: true,
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Fetching shows failed`);
  }
  return records;
};

export const getUpcomingShows = async () => {
  const records = await get('Shows', {
    sort: [{ field: 'Date', direction: 'desc' }],
    fields: [
      'Title',
      'Date',
      'Doors',
      'Venue',
      'Price',
      'Public-description',
      'Event-link',
      'Images',
      'Created',
    ],
    filter: 'IS_AFTER({Date}, NOW())',
    toObject: true,
  });
  return records;
};

export const getLinks = async () => {
  let records;
  try {
    records = await get('Links', {
      toObject: true,
      view: 'Default',
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Fetching links failed`);
  }
  return records;
};
