import Image from "next/image";
import AboutComponent from "../src/components/AboutComponent";
import BlogComponent from "../src/components/BlogComponent";
import Drops from "../src/components/Drops";
import ServicesComponent from "../src/components/ServicesComponent";
import Timeline from "../src/components/Timeline";
import WhyChooseUsComponent from "../src/components/WhyChooseUsComponent";
import Layout from "../src/layout/Layout";

const Index = () => {
  return (
    <Layout pageName={"Home Static"}>
      {/* Hero Header */}
      <div className="neoh_fn_hero">
        {/* Overlay (of hero header) */}
        <div className="bg_overlay">
          {/* Overlay Color */}
          <div className="bg_color" />
          {/* !Overlay Color */}
          {/* Overlay Image */}
          <div className="bg_image" data-bg-img="img/hero/bg-img.jpg" />
          {/* !Overlay Image */}
        </div>
        {/* Overlay (of hero header) */}
        <div className="hero_content">
          <div className="container">
            <div className="content">
              <h2 className="fn_title" title="Bajrangi Token">
              Bajrangi Token
              </h2>
              <p className="fn_desc fn_animated_text">
              Welcome to Bajrangi - A Sanctuary of Empathy and Triumph
              </p>
            </div>
          </div>
          <a
            href="#about"
            className="neoh_fn_down magic-hover magic-hover__square"
          >
            <span className="text">Scroll Down</span>
            <span className="icon">
              <Image src="/svg/Hanumaanji.svg" width={100} height={100} alt="" className="fn__svg" />
            </span>
          </a>
        </div>
      </div>
      {/* !Hero Header */}
      {/* About Section */}
      <AboutComponent />
      {/* !About Section */}
      {/* Services Section */}
      <ServicesComponent />
      {/* !Services Section */}
      {/* <Drops /> */}
      <div style={{paddingTop:"100px",paddingBottom:"100px"}}>
        <Timeline />
      </div>
      {/* Investor Section */}
      {/* <WhyChooseUsComponent /> */}
      {/* !Investor Section */}
      {/* Blog Section */}
      {/* <BlogComponent /> */}
    </Layout>
  );
};
export default Index;
