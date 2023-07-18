import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import VideoPopup from "../components/popup/VideoPopup";
import {
  animationText,
  dataBgImg,
  imgToSVG,
  neoh_fn_moving_blog,
  progressTotop,
  stickyNav,
} from "../utilits";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
import Message from "./Message";

const Layout = ({ children, pageName }) => {
  useEffect(() => {
    animationText();
    neoh_fn_moving_blog();
    dataBgImg();
    imgToSVG();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", progressTotop);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Bajrangi Token</title>
        <link rel="icon" href="img/favicon.ico" />
        <meta
          name="description"
          content="TheBajrangi.com is a sacred sanctuary where you can pour your heart out, just as Sita shared her love, Sughriva confessed his fears, and Vibhishana expressed his needs. Like Lord Hanuman, who knows all and guides with wisdom, you can share anything anonymously. Open your heart, receive suggestions, and find understanding, just as Hanuman showed his devotion to Lord Ram. Here, there are no judgments; everyone is embraced, and every story is cherished. Unveil your joys, achievements, knowledge, power, playfulness, and more. Not only will you find solace, but you can also earn tokens for every engagement on your blogs"
        />
      </Head>
      <VideoPopup />
      <div className="neoh_fn_main" data-footer-sticky="">
        <Header />
        <div className="neoh_fn_content">{children}</div>
        <Message />
        <Footer />
        <ScrollTop />
      </div>
      <div className="neoh_fn_moving_box"></div>
    </Fragment>
  );
};
export default Layout;
