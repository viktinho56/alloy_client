//import IndexCarousel from "../components/carousel/IndexCarousel";
import IndexLayout from "../layouts/IndexLayout";

//import AOS from "aos";
import "aos/dist/aos.css";
import CoursesFeature from "../features/courses/CoursesFeature";

const CoursesPage = () => {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <IndexLayout>
      <CoursesFeature />
    </IndexLayout>
  );
};

export default CoursesPage;
