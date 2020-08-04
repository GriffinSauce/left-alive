// https://search.google.com/test/rich-results
const EventStructuredData = ({ event }) => {
  const data = [
    {
      '@context': 'http://schema.org',
      '@type': 'Event',
      name: event.title,
      //   description: '',
      url: event.eventLink,
      startDate: `${event.date}T${event.doors}:00+00:00`, // TODO: make safe for "TBA" dates and times
      location: {
        '@type': 'Place',
        name: event.venue.name,
        // description: '',
        url: event.venue.url,
        address: {
          '@type': 'PostalAddress',
          streetAddress: event.venue.address,
          addressLocality: event.venue.city,
          //   addressRegion: '',
          //   postalCode: '',
          addressCountry: event.venue.country,
        },
        // telephone: '',
        sameAs: event.venue.url,
      },
      ...(event.price !== 'Free'
        ? {
            offers: {
              '@type': 'Offer',
              price: event.price.substring(1),
              priceCurrency: event.price.substring(0, 1),
              url: event.eventLink,
              category: 'primary',
              availability: 'inStock',
              validFrom: event.created,
            },
          }
        : {}),
      performer: 'Organization',
    },
  ];

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
};

export default EventStructuredData;
