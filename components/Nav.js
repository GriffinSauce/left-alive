import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <div className="navigation-wrapper">
        <div className="container">
          <nav className="">
            <ul className="navigation">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/#music">
                  <a>Music</a>
                </Link>
              </li>
              <li>
                <Link href="/#socials">
                  <a>Social</a>
                </Link>
              </li>
              <li>
                <Link href="/shows">
                  <a>Shows</a>
                </Link>
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
      <style jsx>{`
        .navigation-wrapper {
          background-color: #fff;
          border-bottom: 1px solid #eee;
          z-index: 999;
        }
        .navigation-wrapper nav {
          padding: 0;
        }
        .navigation {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          text-align: center;
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
          list-style: none;
        }
        .navigation li {
          display: block;
        }
        .navigation li a {
          display: block;
          color: #999;
          font-size: 0.8rem;
          padding: 0.6rem 0.2rem;
          border-bottom: 2px solid #fff;
          -webkit-transition: border 150ms ease;
          transition: border 150ms ease;
        }
        .navigation li a:hover {
          color: #ff8da1;
          border-bottom-color: #ff8da1;
        }

        @media only screen and (min-width: 768px) {
          .navigation li a {
            font-size: 0.95rem;
            padding-top: 0.6rem;
            padding-bottom: 0.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
