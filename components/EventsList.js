import { useState, useEffect } from 'react';
import { FiClock, FiMap, FiChevronDown, FiExternalLink } from 'react-icons/fi';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import { parseISO, format } from 'date-fns';
import AirtableContent from './AirtableContent';
import EventStructuredData from './EventStructuredData';
import Anchor from './Anchor';
import useDimensions from '../hooks/useDimensions';

const renderAddress = (address, city) =>
  [address, city].filter(Boolean).join(', ');

const mapsEncode = (string) => string?.replace(/\s/gm, '+');

const Event = ({ event }) => {
  if (!event.title || !event.date) return null; // Not an event then is it?!

  const maxHeight = 350;
  const [descriptionRef, { height }] = useDimensions();
  const [isCollapsed, setIsCollapsed] = useState(height > maxHeight);
  useEffect(() => setIsCollapsed(height > maxHeight), [height]);

  const date = parseISO(event.date);

  const hasImage = event.images && event.images[0];

  return (
    <>
      <li className="grid w-full gap-3 break-words bg-white">
        <Anchor id={event.id} />
        <EventStructuredData event={event} />
        <h1 className="flex flex-col sm:block">
          <span className="text-secondary-600">
            {format(date, `MMMM do yyyy`)}
          </span>
          <span className="hidden mx-2 sm:inline">/</span>
          <span>{event.title}</span>
        </h1>

        <div className="flex flex-col-reverse grid-flow-col grid-cols-2 sm:grid">
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
          <section className="block py-2 bg-gray-100 border-b sm:border-l sm:border-b-0">
            <a
              className="block px-4 py-2"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://maps.google.com/maps?f=q&q=${mapsEncode(
                renderAddress(event.venue.address, event.venue.city),
              )}`}
            >
              <div className="mb-3 font-sans font-bold">{event.venue.name}</div>

              <div className="flex items-center">
                <FiMap className="mr-2" />
                <span>
                  {renderAddress(event.venue.address, event.venue.city)}
                </span>
              </div>
            </a>

            <div className="flex items-center px-4 py-2 text-primary-500">
              <FiClock className="mr-2" />
              <span>{event.doors}</span>
            </div>

            <div className="flex items-center px-4 py-2 text-primary-500">
              <RiMoneyEuroCircleLine className="mr-2" />
              <span>{event.price}</span>
            </div>

            {event.eventLink ? (
              <a
                className="block px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
                href={event.eventLink}
              >
                <div className="flex items-center">
                  <FiExternalLink className="flex-shrink-0 mr-2" />
                  <span className="w-56 truncate">
                    {event.eventLink.replace(/^http(s)?:\/\/(www\.)?/, '')}
                  </span>
                </div>
                {hasImage ? (
                  <img
                    className="mt-2"
                    alt="poster"
                    src={event.images[0].thumbnails.large.url}
                  />
                ) : null}
              </a>
            ) : null}

            {!event.eventLink && hasImage ? (
              <div className="px-4 py-2">
                <img alt="poster" src={event.images[0].thumbnails.large.url} />
              </div>
            ) : null}
          </section>
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
