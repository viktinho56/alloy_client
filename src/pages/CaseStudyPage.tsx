//import IndexCarousel from "../components/carousel/IndexCarousel";
import IndexLayout from "../layouts/IndexLayout";

//import AOS from "aos";
import "aos/dist/aos.css";
//import CoursesFeature from "../features/courses/CoursesFeature";
import CaseStudyFeature from "../features/case/CaseStudyFeature";

const CaseStudyPage = () => {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <IndexLayout>
      <CaseStudyFeature />
    </IndexLayout>
  );
};

export default CaseStudyPage;
