/* eslint-disable react/no-danger */
import { FiMap } from 'react-icons/fi';

const EventsList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <li
          key={event.id}
          className="grid w-full gap-3 py-12 break-words bg-white border-b border-grey-100"
        >
          <h1 className="flex items-center">{event.title}</h1>
          <section>
            <div>{event.date}</div>
            <div>{event.price}</div>
          </section>

          <a
            className="grid gap-2 p-3 bg-gray-100 border"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.google.com/maps/place/${event.venue.address},${event.venue.city}`}
          >
            <h2 className="font-sans text-base font-bold ">
              {event.venue.name}
            </h2>

            <span className="flex items-center">
              <FiMap className="mr-2" />
              <span>
                {event.venue.address}, {event.venue.city}
              </span>
            </span>
          </a>

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
