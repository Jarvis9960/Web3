import Image from "next/image";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const About = () => {
  return (
    <Layout pageName={"About"}>
      <PageBanner pageName={"About"} />
      <div className="neoh_fn_aboutpage">
        {/* Information Section */}
        <section id="information">
          <div className="container">
            {/* About Item #1 */}
            <div className="neoh_fn_about_item">
              <div className="img_item">
                <Image src="img/about/1.jpg" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Lorem ipsum dolor sit amet.</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum officia dolore veritatis? Ex, reprehenderit.
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eveniet porro nulla consequuntur, officia quae?
                  </p>
                </div>
                <div className="buttons">
                  <a
                    href="https://opensea.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <Image src="svg/opensea.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Lorem</span>
                  </a>
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <Image src="svg/discord.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Lorem</span>
                  </a>
                </div>
              </div>
            </div>
            {/* !About Item #1 */}
            {/* Guarantee List */}
            <div className="neoh_fn_gualist">
              <ul>
                <li>
                  <div className="item">
                    <span className="line" />
                    <Image
                      src="svg/search-engine.svg"
                      alt=""
                      className="fn__svg"
                    />
                    <h3 className="fn_title">Lorem</h3>
                    <p className="fn_desc fn_animated_text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quam laudantium mollitia.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <Image src="svg/management.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Lorem</h3>
                    <p className="fn_desc fn_animated_text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem iusto repellendus.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <Image src="svg/padlock.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">lorem</h3>
                    <p className="fn_desc fn_animated_text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio obcaecati laudantium.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Guarantee List */}
            {/* About Item #2 */}
            <div className="neoh_fn_about_item reverse">
              <div className="img_item">
                <Image src="img/about/2.jpg" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">lorem</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique consequatur a quos!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias accusantium natus eveniet.
                  </p>
                </div>
                <div className="buttons">
                  <a href="#" className="neoh_fn_button only_text">
                    <span className="text">lorem</span>
                  </a>
                </div>
              </div>
            </div>
            {/* !About Item #2 */}
          </div>
        </section>
        {/* !Information Section */}
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
        {/* Team Section */}
        <section id="team">
          <div className="container">
            {/* Main Title */}
            <div className="neoh_fn_title">
              <h3 className="fn_title">lorem</h3>
              <div className="line">
                <span />
              </div>
            </div>
            {/* !Main Title */}
            <div className="mw_650 fn_description">
              <p className="fn_desc fn_animated_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis eos est!
              </p>
            </div>
            {/* Team List Shortcode */}
            <div className="neoh_fn_team">
              <ul className="team_list">
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <Image src="img/author/1.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">lorem</h3>
                        <p className="fn_desc">lorem</p>
                      </div>
                    </div>
                    <div className="person_social">
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
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <Image src="img/author/2.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">lorem</h3>
                        <p className="fn_desc">lorem</p>
                      </div>
                    </div>
                    <div className="person_social">
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
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <Image src="img/author/3.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">lorem</h3>
                        <p className="fn_desc">lorem</p>
                      </div>
                    </div>
                    <div className="person_social">
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
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <Image src="img/author/4.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">lorem</h3>
                        <p className="fn_desc">lorem</p>
                      </div>
                    </div>
                    <div className="person_social">
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
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <Image src="img/author/5.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">lorem</h3>
                        <p className="fn_desc">lorem</p>
                      </div>
                    </div>
                    <div className="person_social">
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
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <Image src="img/author/6.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">lorem</h3>
                        <p className="fn_desc">lorem</p>
                      </div>
                    </div>
                    <div className="person_social">
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
                  </div>
                </li>
              </ul>
            </div>
            {/* !Team List Shortcode */}
          </div>
        </section>
        {/* !Team Section */}
      </div>
    </Layout>
  );
};
export default About;
