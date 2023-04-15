import { FaSpotify, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '../components/Nav';
import Releases from '../components/Releases';
import MerchBanner from '../components/MerchBanner';
import FacebookFeed from '../components/FacebookFeed';
import InstaFeed from '../components/InstaFeed';
import NewsletterForm from '../components/NewsletterForm';
import Youtube from '../components/Youtube';
import Button from '../components/Button';
import AirtableContent from '../components/AirtableContent';
import ShowsWidget from '../components/ShowsWidget';
import Hero from '../components/Hero';
import Anchor from '../components/Anchor';
import Footer from '../components/Footer';
import { getContentByKey, getUpcomingShows } from '../services/db';

const Grid = ({ as: Component = 'div', className = '', children }) => (
  <Component className={`grid gap-12 ${className}`}>{children}</Component>
);

const Home = ({ content, futureShows }) => {
  return (
    <div className="bg-[#2d1425]">
      <Nav />
      <Hero />
      <Grid className="container relative -mt-10 sm:-mt-40">
        <section className="bg-white">
          <div className="grid gap-3 p-6 text-lg">
            <h2 className="text-6xl text-blue-500 sm:text-9xl">
              <div>WE ARE</div>
              <div>LEFT ALIVE</div>
            </h2>

            <AirtableContent content={content.bio} className="grid gap-3" />

            <h2 className="mt-6">Upcoming shows</h2>
            <ShowsWidget shows={futureShows} />
            <Link href="/shows">
              <a className="no-underline flex items-center justify-between p-3 transition-colors duration-75 font-display text-white hover:text-white bg-primary-500 hover:bg-blue-500">
                <span>All shows</span>
                <FiChevronRight />
              </a>
            </Link>
          </div>
        </section>

        <Grid as="section" className="sm:grid-cols-2 sm:gap-6">
          <div>
            <Anchor id="music" />
            <a
              href="https://open.spotify.com/artist/128KZvfmYDa6R9uuma8u1A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="spotify">
                <FaSpotify className="mr-4 text-4xl" />
                Listen on Spotify
              </Button>
            </a>
            <div className="p-3 bg-white releases">
              <Releases />
            </div>
          </div>
          <div className="grid gap-3">
            <Youtube title="Promise video" videoId="ypjM2_CkeXs" />
            <Youtube title="Leave it video" videoId="jFz6peaugVo" />
            <Youtube title="Empty Sidewalks video" videoId="1NOkjNYO58g" />
          </div>
        </Grid>

        <MerchBanner />

        <Grid as="section" className="sm:grid-cols-2 sm:gap-6">
          <div>
            <Anchor id="socials" />
            <a
              href="https://facebook.com/leftaliveband"
              target="_blank"
              rel="noopener noreferrer"
              className="!no-underline"
            >
              <Button color="facebook">
                <FaFacebookF className="mr-4 text-4xl" />
                Like us on Facebook
              </Button>
            </a>
            <div className="p-3 bg-white">
              Like us to get the latest news on shows and other adventures!
            </div>
            <div className="border-t btn-after facebook-feed border-grey-100">
              <FacebookFeed />
            </div>
          </div>
          <div>
            <a
              href="https://www.instagram.com/leftaliveband/"
              target="_blank"
              rel="noopener noreferrer"
              className="!no-underline"
            >
              <Button color="instagram">
                <FaInstagram className="mr-4 text-4xl" />
                Follow us on instagram
              </Button>
            </a>
            <div className="mt-1">
              <InstaFeed />
            </div>
          </div>
        </Grid>

        <section
          className="relative flex flex-col items-center py-12 text-center bg-cover bg-primary-500"
          id="newsletter"
        >
          <div className="relative grid max-w-xs gap-4">
            <h3 className="text-4xl text-white sm:text-5xl">
              <AirtableContent content={content.newsletterHeader} />
            </h3>
            <AirtableContent
              className="text-lg text-white"
              content={content.newsletterBody}
            />
            <NewsletterForm />
          </div>
        </section>

        <div className="grid gap-3 text-center text-white">
          <h3 className="text-2xl">Contact</h3>
          <p>
            <a
              className="text-primary-300 no-underline"
              href="mailto:mail@leftalive.nl"
            >
              mail@leftalive.nl
            </a>
          </p>
          <p>
            or send us a message on{' '}
            <a
              className="text-primary-300 no-underline"
              href="https://facebook.com/leftaliveband"
            >
              Facebook
            </a>{' '}
            or{' '}
            <a
              className="text-primary-300 no-underline"
              href="https://instagram.com/leftaliveband"
            >
              Instagram
            </a>
          </p>
        </div>
      </Grid>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const [
    header,
    bio,
    newsletterHeader,
    newsletterBody,
    futureShows,
  ] = await Promise.all([
    getContentByKey('home-header'),
    getContentByKey('home-bio'),
    getContentByKey('home-newsletter-header'),
    getContentByKey('home-newsletter-body'),
    getUpcomingShows(),
  ]);
  return {
    props: {
      content: {
        header,
        bio,
        newsletterHeader,
        newsletterBody,
      },
      futureShows,
    },
  };
}

export default Home;
