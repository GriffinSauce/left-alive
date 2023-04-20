const MerchBanner = () => {
  return (
    <>
      <a
        href="https://www.epicmerchstore.com/collection/artists/left-alive/"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 text-center bg-left-bottom bg-no-repeat merch"
        id="merch"
      >
        <h2 className="my-6 text-3xl text-white">MERCH</h2>
        <p className="inline-block text-xl text-white">
          Get some at Epic Merch Store!
          <span className="block h-1 mt-2 bg-secondary-500" />
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="hidden text-right sm:block">
            <img
              className="inline mt-3 mb-6"
              alt="beanies merch"
              src="/img/merch-beanies.png"
              srcSet="/img/merch-beanies.png, /img/merch-beanies@2x.png 2x"
            />
          </div>
          <div className="text-center sm:text-left">
            <img
              className="inline mt-3 mb-6"
              alt="shirts"
              src="/img/merch-shirts.png"
              srcSet="/img/merch-shirts.png, /img/merch-shirts@2x.png 2x"
            />
          </div>
        </div>
        <button
          type="button"
          className="inline-block px-24 py-5 text-xl text-white button bg-blue-500 font-display"
        >
          See more
        </button>
      </a>
      <style jsx>{`
        .merch {
          background-image: url('/img/merch-bg.svg');
        }
      `}</style>
    </>
  );
};

export default MerchBanner;
