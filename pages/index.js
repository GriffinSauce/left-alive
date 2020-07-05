import { FaSpotify, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Nav from '../components/Nav';
import Releases from '../components/Releases';
import MerchBanner from '../components/MerchBanner';
import FacebookFeed from '../components/FacebookFeed';
import InstaFeed from '../components/InstaFeed';
import NewsletterForm from '../components/NewsletterForm';
import Youtube from '../components/Youtube';
import Button from '../components/Button';
import AirtableContent from '../components/AirtableContent';
import { getContentByKey } from '../utils/airtable';

// Keep this a complete class to tailwind purge doesn't kill it
const COLUMN_V_GAP = 'gap-12';

// Offset anchor up a bit for more human nav
const Anchor = ({ id }) => <div id={id} className="absolute -mt-10" />;

export default function Home({ content }) {
  return (
    <div className="bg-gray-300">
      <Nav />

      <div className="bg-white">
        <header role="banner" className="container flex justify-center">
          <a href="/" className="block w-full py-12">
            <img
              alt="Left Alive - pop punk from the heart"
              id="headerimg"
              src="/img/logo.svg"
            />
          </a>
        </header>
      </div>

      <img
        className="object-cover w-full hero-image bg-grey-900"
        src="/img/hero.jpg"
        alt="The band on stage"
      />

      <div className={`container grid ${COLUMN_V_GAP} -mt-10 sm:-mt-40`}>
        <section className="">
          <h2 className="py-2 text-3xl text-center text-white bg-primary-500 sm:text-5xl">
            WE ARE LEFT ALIVE!
          </h2>

          <div className="grid gap-3 p-6 text-lg bg-white">
            <AirtableContent content={content.bio} />
            <img src="/img/bandpic.jpg" alt="The band" />
          </div>

          <div>[widget area 1]</div>
        </section>

        <section className={`grid ${COLUMN_V_GAP} sm:grid-cols-2 sm:gap-6`}>
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
        </section>

        <MerchBanner />

        <section className={`grid ${COLUMN_V_GAP} sm:grid-cols-2 sm:gap-6`}>
          <div>
            <Anchor id="socials" />
            <a
              href="https://facebook.com/leftaliveband"
              target="_blank"
              rel="noopener noreferrer"
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
        </section>

        <section
          className="flex flex-col items-center py-12 text-center text-white bg-cover bg-primary-500 newsletter"
          id="newsletter"
        >
          <div className="grid max-w-xs gap-4">
            <h3 className="text-4xl sm:text-5xl">NO SOCIALS?</h3>
            <p className="text-lg">
              No problem! Sign up for the newsletter to get updates straight
              from us!
            </p>
            <NewsletterForm />
          </div>
        </section>

        <div className="grid gap-3 text-center">
          <h3 className="text-2xl">Contact</h3>
          <p>
            <a href="mailto:mail@leftalive.nl">mail@leftalive.nl</a>
          </p>
          <p>
            or send us a message on{' '}
            <a href="https://facebook.com/leftaliveband">Facebook</a> or{' '}
            <a href="https://instagram.com/leftaliveband">Instagram</a>
          </p>
        </div>
      </div>
      <div>
        <footer
          className="py-12 text-xs italic text-center text-gray-600"
          role="contentinfo"
        >
          <p className="copyright">
            &copy; 2020 Copyright Left Alive.
            <br />
            Built by{' '}
            <a href="https://github.com/GriffinSauce/" title="GriffinSauce">
              GriffinSauce
            </a>
            .
          </p>
        </footer>
      </div>
      <style jsx>{`
        .hero-image {
          height: 250px;
        }
        @media only screen and (min-width: 768px) {
          .hero-image {
            height: 525px;
          }
        }
        @media only screen and (min-width: 1200px) {
          .hero-image {
            height: 750px;
          }
        }

        .newsletter {
          background-image: url('/img/contact_bg.jpg');
          background-position: 50% 25%;
        }
      `}</style>
    </div>
  );
}

// TODO change to getStaticProps
export async function getServerSideProps(context) {
  const bio = await getContentByKey('home-bio');
  return {
    props: {
      content: {
        bio,
      },
    },
  };
}
