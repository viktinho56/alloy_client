//import IndexCarousel from "../components/carousel/IndexCarousel";
//import IndexLayout from "../layouts/IndexLayout";

//import AOS from "aos";
import "aos/dist/aos.css";

import AboutFeature from "../features/about-us/AboutFeature";
import MainLayout from "../layouts/MainLayout";
//import { useEffect } from "react";

//import IndexEvents from "../features/events/IndexEvents";
const AboutPage = () => {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <MainLayout>
      <AboutFeature />
    </MainLayout>
  );
};

export default AboutPage;
