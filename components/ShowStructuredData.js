// https://search.google.com/test/rich-results
const ShowStructuredData = ({ show }) => {
  const data = [
    {
      '@context': 'http://schema.org',
      '@type': 'Event',
      name: show.title,
      //   description: '',
      url: show.eventLink,
      startDate: `${show.date}T${show.doors}:00+00:00`, // TODO: make safe for "TBA" dates and times
      location: {
        '@type': 'Place',
        name: show.venue.name,
        // description: '',
        url: show.venue.url,
        address: {
          '@type': 'PostalAddress',
          streetAddress: show.venue.address,
          addressLocality: show.venue.city,
          //   addressRegion: '',
          //   postalCode: '',
          addressCountry: show.venue.country,
        },
        // telephone: '',
        sameAs: show.venue.url,
      },
      ...(show.price !== 'Free'
        ? {
            offers: {
              '@type': 'Offer',
              price: show.price.substring(1),
              priceCurrency: show.price.substring(0, 1),
              url: show.eventLink,
              category: 'primary',
              availability: 'inStock',
              validFrom: show.created,
            },
          }
        : {}),
      performer: 'Organization',
    },
  ];

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
};

export default ShowStructuredData;
