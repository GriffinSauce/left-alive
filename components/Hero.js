import Link from 'next/link';
import Image from 'next/image';

const Hero = ({ compact = false, noLogo = false }) => (
  <>
    {!noLogo && (
      <header role="banner" className="container flex justify-center">
        <Link href="/">
          <a
            className={`block ${
              compact ? `w-1/2 py-4` : `w-full px-6 py-16 sm:py-28`
            }`}
          >
            <Image
              src="/img/logo.png"
              alt="Left Alive logo"
              quality={100}
              width={1497}
              height={149}
            />
          </a>
        </Link>
      </header>
    )}
    <div className="relative z-0 w-full hero-image">
      <Image
        src="/img/hero.jpg"
        alt="The band"
        quality={85}
        layout="fill"
        objectFit="cover"
      />
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
    `}</style>
  </>
);

export default Hero;
