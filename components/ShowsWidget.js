import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const ShowsWidget = ({ shows }) => {
  return (
    <>
      <ul className="space-y-3">
        {shows.map((show) => {
          const date = parseISO(show.date);

          return (
            <li key={show.id}>
              <Link href={`/shows#${show.id}`}>
                <a className="group">
                  <h3 className="flex items-center justify-between p-3 text-white transition-colors duration-75 bg-primary-600 group-hover:bg-secondary-600">
                    <span>{show.title}</span>
                    <FiChevronRight />
                  </h3>
                  <div className="flex justify-between p-3 text-lg font-semibold bg-gray-200 text-primary-600">
                    <div>
                      <div>{`${format(date, `MMMM do`)} - ${show.doors}`}</div>
                      <div>{show.venue.city}</div>
                    </div>
                    <div>{show.price}</div>
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

export default ShowsWidget;
