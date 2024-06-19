//import IndexCarousel from "../components/carousel/IndexCarousel";
import IndexLayout from "../layouts/IndexLayout";

//import AOS from "aos";
import "aos/dist/aos.css";
//import CoursesFeature from "../features/courses/CoursesFeature";
//import ServiceFeature from "../features/services/ServiceFeature";
import CaseStudyView from "../features/case/CaseStudyView";

const CaseStudyViewPage = () => {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <IndexLayout>
      <CaseStudyView />
    </IndexLayout>
  );
};

export default CaseStudyViewPage;
