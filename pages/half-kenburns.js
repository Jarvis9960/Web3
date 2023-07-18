import AboutComponent from "../src/components/AboutComponent";
import BlogComponent from "../src/components/BlogComponent";
import Drops from "../src/components/Drops";
import HalfKenburnsHero from "../src/components/HalfKenburnsHero";
import ServicesComponent from "../src/components/ServicesComponent";
import Timeline from "../src/components/Timeline";
import WhyChooseUsComponent from "../src/components/WhyChooseUsComponent";
import Layout from "../src/layout/Layout";

const HalfKenburns = () => {
  return (
    <Layout pageName={"Bajrangi Token"}>
      <HalfKenburnsHero />
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
export default HalfKenburns;
