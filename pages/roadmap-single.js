import Link from "next/link";
import Layout from "../src/layout/Layout";
import Image from "next/image";

const RoadmapSingle = () => {
  return (
    <Layout pageName={"Roadmap Single"}>
      <div className="neoh_fn_roadmap neoh_fn_single">
        {/* Single Background */}
        <div className="single_bg" />
        {/* !Single Background */}
        {/* Single Content */}
        <div className="single_content">
          <div className="container" id="roadmap-single-content">
            <div className="neoh_fn_share">
              <h5 className="label">Share:</h5>
              <ul>
                <li>
                  <a href="#">
                    <i className="fn-icon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-behance" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="neoh_fn_breadcrumbs">
              <p>
                <Link href="/index">Home</Link>
                <span className="separator">/</span>
                <Link href="/roadmap">RoadMap</Link>
                <span className="separator">/</span>
                <span className="current">Lorem ipsum dolor sit amet.</span>
              </p>
            </div>
            <div className="single_img">
              <Image src="img/blog/single.jpg" alt="" />
            </div>
            {/* Mini Items  */}
            <div className="neoh_fn_minis">
              <div className="m_item">
                <a href="#">June 01, 2022</a>
              </div>
              <div className="m_item">
                <span>
                  By <a href="#">Admin</a>
                </span>
              </div>
            </div>
            {/* !Mini Items  */}
            {/* Single Title */}
            <div className="single_title">
              <h2 className="fn_title">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h2>
              <div className="categories">
                <a href="#">Tokens</a>, <a href="#">NFTs</a>,{" "}
                <a href="#">Crypto</a>
              </div>
            </div>
            {/* !Single Title */}
            {/* Single Description */}
            <div className="single_desc">
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
              </p>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
              </p>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
              </p>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
              </p>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
              </p>
            </div>
            {/* !Single Description */}
            {/* Mosaic Gallery */}
            <div className="neoh_fn_mosaic">
              <ul>
                <li>
                  <div className="item" data-bg-img="img/drops/1.jpg">
                    <Image src="img/thumbs/1-1.jpg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/drops/2.jpg">
                    <Image src="img/thumbs/1-1.jpg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/drops/3.jpg">
                    <Image src="img/thumbs/1-1.jpg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/drops/4.jpg">
                    <Image src="img/thumbs/1-1.jpg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/drops/5.jpg">
                    <Image src="img/thumbs/1-1.jpg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/drops/6.jpg">
                    <Image src="img/thumbs/1-1.jpg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/drops/7.jpg">
                    <Image src="img/thumbs/1-1.jpg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/drops/8.jpg">
                    <Image src="img/thumbs/1-1.jpg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="item" data-bg-img="img/drops/9.jpg">
                    <Image src="img/thumbs/1-1.jpg" alt="" />
                  </div>
                </li>
              </ul>
            </div>
            {/* !Mosaic Gallery */}
            {/* Single Description */}
            <div className="single_desc">
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.

              </p>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.

              </p>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.

              </p>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.

              </p>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.

              </p>
            </div>
            {/* !Single Description */}
          </div>
          {/* Video Section */}
          <section id="video">
            {/* Dividers */}
            <Image
              src="/svg/divider.svg"
              alt=""
              className="fn__svg fn__divider top_divider"
              width={100}
              height={100}
            />
            <Image
              src="/svg/divider.svg"
              alt=""
              className="fn__svg fn__divider bottom_divider"
              width={100}
              height={100}
            />
            {/* !Dividers */}
            {/* Video Shortcode */}
            <div className="neoh_fn_video">
              <div className="bg_overlay">
                <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
                <div className="bg_color" />
              </div>
              <div className="v_content">
                <a
                  className="popup-youtube"
                  href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                >
                  <Image src="svg/play.svg" alt="" className="fn__svg" />
                </a>
              </div>
            </div>
            {/* !Video Shortcode */}
          </section>
          {/* !Video Section */}
          {/* Single Description */}
          <div className="single_desc" id="roadmap-desc">
            <div className="container">
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.

              </p>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.

              </p>
            </div>
          </div>
          {/* !Single Description */}
        </div>
        {/* !Single Content */}
      </div>
    </Layout>
  );
};
export default RoadmapSingle;
