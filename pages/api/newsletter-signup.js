/* eslint-disable no-console */
import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const { name, email, hp: honeypot } = req.body;

  if (honeypot) return res.status(400).json({ error: 'Email is required' }); // Opaqua error for bots
  if (!email) return res.status(400).json({ error: 'Email is required' });
  if (!name) return res.status(400).json({ error: 'Name is required' });

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = API_KEY.split('-')[1];

    const data = {
      email_address: email,
      merge_fields: {
        FNAME: name,
      },
      status: 'subscribed',
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );

    if (response.status >= 400) {
      console.log(`Error signing up for newsletter`, await response.json());
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Shoot me an email at [mail@leftalive.nl] and we'll add you to the list.`,
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
