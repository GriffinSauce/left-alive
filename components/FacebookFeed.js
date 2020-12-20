/* eslint-disable react/no-danger */
import { FiThumbsUp, FiMessageSquare } from 'react-icons/fi';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const FacebookFeed = () => {
  const items = 2;
  const { data, error } = useSWR(
    `https://www.juicer.io/api/feeds/left-alive?per=${items}&page=1&filter=Facebook`,
    fetcher,
  );

  if (error) return '';
  if (!data) return 'Loading...';

  return (
    <ul>
      {data.posts.items.map((item) => (
        <li
          key={item.id}
          className="w-full p-3 break-words bg-white border-b border-grey-100"
        >
          <a
            href="poster_url"
            rel="noopener noreferrer"
            target="_blank"
            className="block mb-2"
          >
            <h3 className="flex items-center font-sans text-base font-semibold">
              <img
                src={item.poster_image}
                alt=""
                loading="lazy"
                className="w-8 h-8 mr-2 rounded-full"
              />
              <span>{item.poster_name}</span>
            </h3>
          </a>
          <div className="grid gap-2">
            <div
              className="text-sm break-all"
              dangerouslySetInnerHTML={{
                __html: item.message,
              }}
            />
            <a href={item.full_url} rel="noopener noreferrer" target="_blank">
              <img src={item.image} alt="" loading="lazy" />
            </a>
            <a
              href={item.full_url}
              rel="noopener noreferrer"
              className="flex items-center justify-end text-xs"
              target="_blank"
            >
              <div className="flex items-center mr-2">
                <FiMessageSquare className="mr-1" />
                <span>{item.comment_count}</span>
              </div>
              <div className="flex items-center mr-2">
                <FiThumbsUp className="mr-1" />
                <span>{item.like_count}</span>
              </div>
              <span>View on Facebook</span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FacebookFeed;

// from https://github.com/mango-chutney/react-juicer/blob/master/src/components/Juicer.tsx
//
// interface JuicerItemProps {
//   additional_photos?: any;
//   comment_count?: number;
//   comments?: number;
//   deleted_at?: any;
//   deleted_by?: any;
//   description?: any;
//   edit?: any;
//   external_created_at: string;
//   external_id: string;
//   external?: any;
//   feed: string;
//   full_url: string;
//   height: number;
//   id: number;
//   image: undefined | string;
//   like_count: number;
//   likes: number;
//   location: string;
//   message: string;
//   position?: string;
//   poster_display_name?: string;
//   poster_id?: number;
//   poster_image?: string;
//   poster_name: string;
//   poster_url: string;
//   source: {
//     id: number,
//     options: any,
//     queue?: any,
//     source: string,
//     term_type: string,
//     term: string,
//   };
//   tagged_users?: any;
//   unformatted_message: string;
//   width: number;
// }
