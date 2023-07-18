import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="neoh_fn_footer">
        {/* Footer Top */}
        <div className="footer_top">
          <div className="container">
            <div className="ft_in">
              <div className="desc">
                <div className="img">
                  <Image
                    src="/img/about/bajrangi-logo.jpg"
                    width={80}
                    height={80}
                    alt=""
                    style={{
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <h3 className="fn_title">Join us as a community</h3>
                <p className="fn_desc">
                  Share Your Story, Find Strength, Embrace Humanity
                </p>
              </div>
              <div className="subscribe_form">
                <div className="subscribe_in">
                  <input type="text" placeholder="Email..." required />
                  <a
                    href="mailto:info@thebajrangi.com"
                    className="neoh_fn_button only_text"
                  >
                    <span className="text">Apply</span>
                  </a>
                </div>

                <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                  data-message="You have subscribed to our updates. Thank you"
                  data-invalid-email="Please enter valid email!"
                />
                <div className="empty_notice">
                  <span>Please enter your Email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Top */}
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
              <div className="fb_left">
                <p>
                  Copyright {new Date().getFullYear()} - Designed &amp;
                  Developed by{" "}
                  <a href="thebajrangi.com" target="_blank" rel="noreferrer">
                    Bajrangi Token
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
