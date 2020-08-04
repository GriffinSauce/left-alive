import { parseISO, format } from 'date-fns';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const EventsWidget = ({ events }) => {
  return (
    <>
      <ul>
        {events.map((event) => {
          const date = parseISO(event.date);

          return (
            <li key={event.id}>
              <Link href={`/events#${event.id}`}>
                <a className="group">
                  <h3 className="flex items-center justify-between p-3 text-white transition-colors duration-75 bg-primary-500 group-hover:bg-secondary-600">
                    <span>{event.title}</span>
                    <FiChevronRight />
                  </h3>
                  <div className="flex justify-between p-3 bg-gray-200 text-primary-500">
                    <div>
                      <div>{`${format(date, `MMMM do`)} - ${event.doors}`}</div>
                      <div>{event.venue.city}</div>
                    </div>
                    <div>{event.price}</div>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default EventsWidget;
