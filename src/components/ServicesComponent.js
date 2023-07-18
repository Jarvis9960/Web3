import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const ServicesComponent = () => {
  return (
    <section id="services">
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
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Why Choose Us?</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content" style={{color:"black"}}>
                  <h3 className="fn_title">Rewards of Blessings:</h3>
                  <p className="fn_desc fn_animated_text">
                    As a tribute to Lord Bajrangi's benevolence, we honor the
                    most heart-touching stories with blessings in the form of
                    tokens. Let your experiences illuminate the paths of others
                    and stand as a testament to the power of resilience.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content" style={{color:"black"}}>
                  <h3 className="fn_title">Step into the Realm of Bajrangi:</h3>
                  <p className="fn_desc fn_animated_text">
                    Join us in the divine realm of Bajrangi, where your story
                    finds refuge and inspires the spirit of humanity. Share your
                    narrative, celebrate your triumphs, and discover the
                    strength of a compassionate embrace.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content" style={{color:"black"}}>
                  <h3 className="fn_title">
                    Anecdotes from Lord Hanuman's Life:
                  </h3>
                  <p className="fn_desc fn_animated_text">
                    Hanuman's Fearless Leap: Embrace the courage within you,
                    much like Hanuman's bold leap across the ocean to Lanka.
                    Your journey of triumph begins with unwavering faith.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content" style={{color:"black"}}>
                  <h3 className="fn_title">Hanuman's Compassionate Service</h3>
                  <p className="fn_desc fn_animated_text">
                    ust as Hanuman aided Vibhishana, find solace in the
                    compassion of our community. Together, we walk the path of
                    empathy and understanding.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ServicesComponent;
