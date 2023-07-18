import Image from "next/image";
import AboutComponent from "../src/components/AboutComponent";
import BlogComponent from "../src/components/BlogComponent";
import Drops from "../src/components/Drops";
import ServicesComponent from "../src/components/ServicesComponent";
import Timeline from "../src/components/Timeline";
import WhyChooseUsComponent from "../src/components/WhyChooseUsComponent";
import Layout from "../src/layout/Layout";
import KendurnsHero from "../src/components/KendurnsHero";

const Index = () => {
  return (
    <Layout pageName={"Bajrangi Token"}>
      <KendurnsHero />
      {/* !Hero Header */}
      {/* About Section */}
      <AboutComponent />
      {/* !About Section */}
      {/* Services Section */}
      <ServicesComponent />
      {/* !Services Section */}
      {/* <Drops /> */}
      <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
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
