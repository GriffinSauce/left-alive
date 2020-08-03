import { useState, useEffect } from 'react';
import { FiMap, FiChevronDown } from 'react-icons/fi';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import { parseISO, format, isSameYear } from 'date-fns';
import AirtableContent, { isEmptyContent } from './AirtableContent';
import useDimensions from '../hooks/useDimensions';

const Event = ({ event }) => {
  const maxHeight = 350;
  const [descriptionRef, { height }] = useDimensions();
  const [isCollapsed, setIsCollapsed] = useState(height > maxHeight);
  useEffect(() => {
    setIsCollapsed(height > maxHeight);
  }, [height]);

  const date = parseISO(event.date);
  const isThisYear = isSameYear(date, new Date());

  return (
    <>
      <li className="grid w-full gap-3 break-words bg-white">
        <h1 className="flex flex-col sm:block">
          <span className="text-secondary-600">
            {format(date, `MMMM do${isThisYear ? '' : ' yyyy'}`)}
          </span>
          <span className="hidden mx-2 sm:inline">/</span>
          <span>{event.title}</span>
        </h1>

        <div className="flex flex-col-reverse grid-flow-col grid-cols-2 sm:grid">
          {!isEmptyContent(event.publicDescription) ? (
            <section className="p-4 text-base bg-gray-100">
              <div className={isCollapsed ? 'description-truncate' : ''}>
                <AirtableContent
                  ref={descriptionRef}
                  className="grid gap-3 break-words"
                  content={event.publicDescription}
                />
              </div>
              {isCollapsed ? (
                <button
                  type="button"
                  className="flex flex-col items-center justify-center w-full p-3 pb-0 border-t border-gray-300"
                  onClick={() => setIsCollapsed(false)}
                >
                  <span>read more</span>
                  <FiChevronDown />
                </button>
              ) : null}
            </section>
          ) : null}
          <a
            className="block p-4 bg-gray-100 border-b sm:border-l sm:border-b-0"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.google.com/maps/place/${event.venue.address},${event.venue.city}`}
          >
            <div className="mb-3 font-sans font-bold">{event.venue.name}</div>

            <div className="flex items-center mb-3">
              <FiMap className="mr-2" />
              <span>
                {event.venue.address}, {event.venue.city}
              </span>
            </div>

            <div className="flex items-center mb-3">
              <RiMoneyEuroCircleLine className="mr-2" />
              <span>{event.price}</span>
            </div>
          </a>
        </div>
      </li>
      <style jsx>{`
        .description-truncate {
          position: relative;
          overflow-y: hidden;
          max-height: ${maxHeight}px;
        }

        .description-truncate:after {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 50px;
          background: linear-gradient(
            0deg,
            rgba(247, 250, 252, 1) 0%,
            rgba(247, 250, 252, 0) 100%
          );
          bottom: 0;
          left: 0;
        }
      `}</style>
    </>
  );
};

const EventsList = ({ events }) => {
  return (
    <ul className="grid gap-10 sm:gap-20">
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventsList;
