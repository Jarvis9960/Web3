import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  return (
    <Fragment>
      {/* Right Navigation */}
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />
      <div className={`neoh_fn_nav ${toggle ? "go" : ""}`}>
        <div className="trigger is-active">
          <div className="trigger_in" onClick={() => setToggle(false)}>
            <span className="text">Close</span>
            <span className="hamb">
              <span className="hamb_a" />
              <span className="hamb_b" />
              <span className="hamb_c" />
            </span>
          </div>
        </div>
        <div className="nav_content">
          <div className="nav_menu">
            <ul>
              <li className="menu-item menu-item-has-children">
                <Link
                  href="/kenburns"
                  onClick={(e) => {
                    e.preventDefault();
                    setHomeToggle(!homeToggle);
                  }}
                >
                  Home
                </Link>
                {/* <ul
                  className="sub-menu"
                  style={{ display: homeToggle ? "block" : "none" }}
                >
                  <li>
                    <Link href="/">Home Static</Link>
                  </li>
                  <li>
                    <Link href="/kenburns">Full Kenburns</Link>
                  </li>
                  <li>
                    <Link href="/half-kenburns">Half Kenburns</Link>
                  </li>
                  <li>
                    <Link href="/half-slider">Half Slider</Link>
                  </li>
                </ul> */}
              </li>
              {/* <li className="menu-item">
                <Link href="/about">About</Link>
              </li> */}
              <li className="menu-item">
                <Link href="/blog">Blog</Link>
              </li>
              {/* <li className="menu-item">
                <Link href="/contact">Contact</Link>
              </li> */}
            </ul>
          </div>
          <div className="nav_buttons">
            <a
              href="https://opensea.io/"
              className="neoh_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <Image
                  src="/svg/opensea.svg"
                  width={100}
                  height={100}
                  alt=""
                  className="fn__svg"
                />
              </span>
              <span className="text">OpenSea</span>
            </a>
            <a
              href="https://discord.com/"
              className="neoh_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <Image
                  src="/svg/discord.svg"
                  width={100}
                  height={100}
                  alt=""
                  className="fn__svg"
                />
              </span>
              <span className="text">Discord</span>
            </a>
          </div>
        </div>
        {/* Nav Footer */}
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
          <div className="nf_left">
            <p>
              Copyright 2022- Designed &amp; Developed by{" "}
              <a href="thebajrangi.com" target="_blank">
                Bajrangi Token
              </a>
            </p>
          </div>
        </div>
        {/* !Nav Footer */}
      </div>
      {/* !Right Navigation */}
      {/* Header */}
      <header className="neoh_fn_header">
        <div className="container">
          <div className="header_in">
            <div className="logo">
              <Link href="/">
                <a>
                  <Image
                    src="/img/about/bajrangi-logo.jpg"
                    alt=""
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                    }}
                    layout="fixed"
                  />
                </a>
              </Link>
            </div>

            <h3 className="header_text fn_animated_text">
              Join us, where immortality of souls is celebrated through
              compassionate connections and rewarded through shared joy and
              tokens
            </h3>

            <div className="trigger">
              <div className="trigger_in" onClick={() => setToggle(!toggle)}>
                <span className="text">Menu</span>
                <span className="hamb">
                  <span className="hamb_a" />
                  <span className="hamb_b" />
                  <span className="hamb_c" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* !Header */}
    </Fragment>
  );
};
export default Header;
