import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

const Hero = ({ compact = false, noLogo = false }) => (
  <>
    {!noLogo && (
      <header role="banner" className="container flex justify-center">
        <Link href="/">
          <a
            className={`block ${
              compact ? `w-1/2 py-4` : `w-full px-6 py-12 sm:py-24`
            }`}
          >
            <Logo />
          </a>
        </Link>
      </header>
    )}
    <div className="relative z-0 w-full h-[250px] md:h-[525px] lg:h-[750px] hero-image">
      <div className="absolute inset-x-0 -top-2 h-4 bg-black squiggle z-10" />
      <div className="absolute inset-x-0 -bottom-2 h-4 bg-black squiggle z-10" />
      <Image
        src="/img/hero.jpg"
        alt="The band"
        quality={85}
        layout="fill"
        objectFit="cover"
      />
    </div>
  </>
);

export default Hero;
