import fetch from 'isomorphic-unfetch';

function fetcher(url, options = {}) {
  const { headers, body, ...otherOptions } = options;
  return fetch(url, {
    ...otherOptions,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
    .then((response) => (response.status === 204 ? null : response.json()))
    .then((data) => {
      if (data && data.error) throw new Error(data.error);
      return data;
    });
}

export default fetcher;
