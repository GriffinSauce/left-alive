const MerchBanner = () => {
  return (
    <a
      href="https://www.epicmerchstore.com/collection/artists/left-alive/"
      target="_blank"
      rel="noopener noreferrer"
      className="merch"
      id="merch"
    >
      <div className="row">
        <div className="col-12">
          <h2>MERCH</h2>
          <p>Get some at Epic Merch Store!</p>
        </div>
      </div>
      <div className="row">
        <div className="column-left col-sm-6">
          <img
            className="beanies"
            alt="beanies merch"
            src="/img/merch-beanies.png"
            srcSet="/img/merch-beanies.png, /img/merch-beanies@2x.png 2x"
          />
        </div>
        <div className="column-right col-sm-6">
          <img
            className="shirts"
            alt="shirts"
            src="/img/merch-shirts.png"
            srcSet="/img/merch-shirts.png, /img/merch-shirts@2x.png 2x"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="button button-merch">See more</div>
        </div>
      </div>
    </a>
  );
};

export default MerchBanner;
