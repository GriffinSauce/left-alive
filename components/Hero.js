const Hero = ({ compact = false }) => (
  <>
    <div className="bg-white">
      <header role="banner" className="container flex justify-center">
        <a
          href="/"
          className={`block ${compact ? `w-1/2 py-4` : `w-full py-8`}`}
        >
          <img
            alt="Left Alive - pop punk from the heart"
            id="headerimg"
            src="/img/logo.svg"
          />
        </a>
      </header>
    </div>
    <div
      className="w-full bg-center bg-cover hero-image bg-grey-900"
      style={{
        backgroundImage: 'url(/img/hero.jpg)',
      }}
    />
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
