export default {
  Shows: {
    populateFields: [
      { path: 'Venue', from: 'Venues', multi: false },
      { path: 'With', from: 'Bands', multi: true, fields: ['Name'] },
    ],
  },
};
