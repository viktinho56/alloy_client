//import IndexCarousel from "../components/carousel/IndexCarousel";

//import AOS from "aos";
import "aos/dist/aos.css";
import ContactFeature from "../features/contact-us/ContactFeature";
import MainLayout from "../layouts/MainLayout";
//import { useEffect } from "react";

//import IndexEvents from "../features/events/IndexEvents";
const ContactPage = () => {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <MainLayout>
      <ContactFeature />
    </MainLayout>
  );
};

export default ContactPage;
