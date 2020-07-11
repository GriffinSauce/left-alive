/* eslint-disable no-console */
import { getEvents } from '../../../utils/airtable';

export default async (req, res) => {
  try {
    const events = await getEvents();
    return res.status(201).json({ events });
  } catch (error) {
    const errorMessage = error.message || error.toString();
    console.info(`Error fetching events ${errorMessage}`);
    return res.status(500).json({ error: errorMessage });
  }
};
