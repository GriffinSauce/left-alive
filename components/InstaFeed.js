/* eslint-disable react/no-danger */
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const InstaFeed = () => {
  const items = 15;
  const { data, error } = useSWR(
    `https://www.juicer.io/api/feeds/left-alive?per=${items}&page=1&filter=Instagram`,
    fetcher,
  );

  if (error) return '';
  if (!data) return 'Loading...';

  return (
    <ul className="grid grid-cols-3 gap-1">
      {data.posts.items.map((item) => (
        <li key={item.id}>
          <a
            className="relative block pb-full"
            href={item.full_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="absolute object-cover w-full h-full"
              src={item.image}
              alt=""
              loading="lazy"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default InstaFeed;
