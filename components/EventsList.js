/* eslint-disable react/no-danger */
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const EventsList = () => {
  const { data, error } = useSWR(`/api/events`, fetcher);

  if (error) return '';
  if (!data) return 'Loading...';

  return (
    <ul>
      {data.events.map((event) => (
        <li
          key={event.id}
          className="w-full p-3 break-words bg-white border-b border-grey-100"
        >
          <h3 className="flex items-center font-sans text-base font-semibold">
            {event.title}
          </h3>
          <div className="grid gap-2">
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{
                __html: event.publicDescription,
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EventsList;
