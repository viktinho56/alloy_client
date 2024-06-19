//import IndexCarousel from "../components/carousel/IndexCarousel";
//import IndexLayout from "../layouts/IndexLayout";

//import AOS from "aos";
import "aos/dist/aos.css";

import MainLayout from "../layouts/MainLayout";
import ProgramFeature from "../features/programs/ProgramFeature";
//import { useEffect } from "react";

//import IndexEvents from "../features/events/IndexEvents";
const ProgramPage = () => {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <MainLayout>
      <ProgramFeature />
    </MainLayout>
  );
};

export default ProgramPage;
