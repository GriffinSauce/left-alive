const Nav = () => {
  return (
    <div className="navigation-wrapper">
      <div className="container">
        <nav className="col-xs-12 col-sm-10 col-sm-push-1">
          <ul className="navigation">
            <li>
              <a href="#music">Music</a>
            </li>
            <li>
              <a href="#socials">Social</a>
            </li>
            <li>
              <a href="/events">Shows</a>
            </li>
            <li>
              <a
                href="https://www.epicmerchstore.com/collection/left-alive/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Merch
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
