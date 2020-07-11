/* eslint-disable no-console */
import { getEvents } from '../../../utils/airtable';

export default async (req, res) => {
  try {
    const shows = await getEvents();
    return res.status(201).json({ shows });
  } catch (error) {
    const errorMessage = error.message || error.toString();
    console.info(`Error fetching events ${errorMessage}`);
    return res.status(500).json({ error: errorMessage });
  }
};
