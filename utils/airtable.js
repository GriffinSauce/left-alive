import Airtable from 'airtable';

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
