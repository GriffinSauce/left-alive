const Hero = () => (
  <>
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
  </>
);

export default Hero;
