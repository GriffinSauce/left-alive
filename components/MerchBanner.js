const MerchBanner = () => {
  return (
    <>
      <a
        href="https://www.epicmerchstore.com/collection/artists/left-alive/"
        target="_blank"
        rel="noopener noreferrer"
        className="merch block p-6 text-center bg-white bg-left-bottom bg-no-repeat"
        id="merch"
      >
        <h2 className="text-black my-6 text-3xl">MERCH</h2>
        <p className="text-xl inline-block text-black">
          Get some at Epic Merch Store!
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          <div className="hidden sm:block text-right">
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
        <div className="button button-merch inline-block px-24 text-xl font-display py-6 text-white">
          See more
        </div>
      </a>
      <style jsx>{`
        .merch {
          background-image: url('/img/merch-bg.svg');
        }
        .merch p:after {
          display: block;
          content: '';
          margin-top: 10px;
          background-color: #ff8da1;
          height: 3px;
        }
        .button-merch {
          background-color: #ff8da1;
        }
      `}</style>
    </>
  );
};

export default MerchBanner;
