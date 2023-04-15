import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

const Hero = ({ compact = false, noLogo = false }) => (
  <>
    {!noLogo && (
      <div className="bg-white">
        <header role="banner" className="container flex justify-center">
          <Link href="/">
            <a className={`block ${compact ? `w-1/2 py-4` : `w-full py-8`}`}>
              <Logo className="fill-jet-800" />
            </a>
          </Link>
        </header>
      </div>
    )}
    <div className="relative z-0 w-full bg-grey-900 hero-image border-t-8 border-b-8 border-primary-500">
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
