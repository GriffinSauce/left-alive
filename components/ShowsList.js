import { FiClock, FiMap, FiExternalLink } from 'react-icons/fi';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import ModalImage from 'react-modal-image';
import AirtableContent from './AirtableContent';
import ShowStructuredData from './ShowStructuredData';
import Anchor from './Anchor';
import Truncate from './Truncate';

const renderAddress = (address, city) =>
  [address, city].filter(Boolean).join(', ');

const mapsEncode = (string) => string?.replace(/\s/gm, '+');

const isImageAttachment = (attachment) => attachment.type.startsWith('image');

const Show = ({ show }) => {
  if (!show.title || !show.date) return null; // Not a show then is it?!

  const date = parseISO(show.date);
  const thumbnails = show.images?.filter(isImageAttachment)?.[0]?.thumbnails;

  return (
    <>
      <li className="grid w-full gap-3">
        <Anchor id={show.id} />
        <ShowStructuredData show={show} />
        <h1 className="flex flex-col sm:block">
          <span className="text-secondary-600">
            {format(date, `MMMM do yyyy`)}
          </span>
          <span className="hidden mx-2 sm:inline">/</span>
          <span>{show.title}</span>
        </h1>

        <div className="flex flex-col-reverse grid-flow-col grid-cols-2 sm:grid">
          <section className="p-4 text-base bg-gray-100">
            {thumbnails ? (
              <ModalImage
                className="w-48 mb-3 rounded"
                small={thumbnails.large.url}
                large={thumbnails.full.url}
                alt="poster"
              />
            ) : null}

            <Truncate maxHeight={350}>
              <AirtableContent
                className="grid gap-3 break-words"
                content={show.publicDescription}
              />
            </Truncate>
          </section>
          <section className="block py-2 bg-gray-100 border-b text-primary-600 sm:border-l sm:border-b-0">
            <a
              className="block px-4 py-2"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://maps.google.com/maps?f=q&q=${mapsEncode(
                renderAddress(show.venue.address, show.venue.city),
              )}`}
            >
              <div className="mb-3 font-sans font-bold">{show.venue.name}</div>

              <div className="flex items-center">
                <FiMap className="mr-2" />
                <span>
                  {renderAddress(show.venue.address, show.venue.city)}
                </span>
              </div>
            </a>

            <div className="flex items-center px-4 py-2">
              <FiClock className="mr-2" />
              <span>{show.doors}</span>
            </div>

            <div className="flex items-center px-4 py-2">
              <RiMoneyEuroCircleLine className="mr-2" />
              <span>{show.price}</span>
            </div>

            {show.eventLink ? (
              <a
                className="block px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
                href={show.eventLink}
              >
                <div className="flex items-center">
                  <FiExternalLink className="flex-shrink-0 mr-2" />
                  <span className="w-56 truncate">
                    {show.eventLink.replace(/^http(s)?:\/\/(www\.)?/, '')}
                  </span>
                </div>
              </a>
            ) : null}
          </section>
        </div>
      </li>
    </>
  );
};

const ShowsList = ({ shows }) => {
  return (
    <ul className="grid gap-10 break-words bg-white sm:gap-20">
      {shows.map((show) => (
        <Show key={show.id} show={show} />
      ))}
    </ul>
  );
};

export default ShowsList;
