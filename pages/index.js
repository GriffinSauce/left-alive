import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import Nav from '../components/Nav';
import Platforms from '../components/Platforms';
import MerchBanner from '../components/MerchBanner';
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
    <div>
      <Nav />
      <Hero />
      <div className="sm:container relative sm:-mt-40">
        <Grid className="p-6 bg-black">
          <section>
            <div className="grid gap-3 text-lg">
              <h2 className="text-6xl sm:text-9xl">
                <div className="stroke-text-primary">
                  WE ARE
                  <div className="stroke-text-primary-foreground" aria-hidden>
                    WE ARE
                  </div>
                </div>
                <div>LEFT ALIVE</div>
              </h2>

              <AirtableContent content={content.bio} className="grid gap-3" />

              <h2 className="mt-6">Upcoming shows</h2>
              <ShowsWidget shows={futureShows} />
              <Link href="/shows">
                <a className="no-underline flex items-center justify-between p-3 transition-colors duration-75 font-display text-white hover:text-white bg-gray-800 hover:text-pink-600">
                  <span>See all shows</span>
                  <FiChevronRight />
                </a>
              </Link>
            </div>
          </section>

          <Grid as="section" className="sm:gap-6">
            <div>
              <Anchor id="music" />
              <Youtube
                title="Promise video"
                videoId="ypjM2_CkeXs"
                aspectRatio="21/9"
              />
            </div>
            <Platforms />
          </Grid>

          <MerchBanner />

          <Grid as="section">
            <div>
              <Anchor id="socials" />
              <div className="grid gap-1 sm:grid-cols-2 sm:gap-1">
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
              </div>
              <div className="mt-1">
                <InstaFeed />
              </div>
            </div>
          </Grid>

          <section
            className="relative flex flex-col items-center py-12 text-center"
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
      </div>
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
