import Image from "next/image";

const WhyChooseUsComponent = () => {
  return (
    <section id="investor">
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
          <h3 className="fn_title">bajrangi Investors</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Investor List Shortcode */}
        <div className="neoh_fn_investor">
          <ul>
            <li>
              <div className="item">
                <Image src="img/investors/1.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <Image src="img/investors/2.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <Image src="img/investors/3.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <Image src="img/investors/4.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <Image src="img/investors/5.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <Image src="img/investors/6.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <Image src="img/investors/7.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <Image src="img/investors/8.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <Image src="img/investors/9.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <Image src="img/investors/10.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
          </ul>
        </div>
        {/* !Investor List Shortcode */}
      </div>
    </section>
  );
};
export default WhyChooseUsComponent;
