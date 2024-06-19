import {
  Box,
  Text,
  Center,
  //SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

import { redColor, yellowColor } from "../../constants";
import TestimonialCard from "./components/TestimonialCard";
//import { motion } from "framer-motion";
import useTestimonials from "./hooks/useTestimonials";
import Slider from "react-slick";
// import { useEffect } from "react";
// import Glide from "@glidejs/glide";

const Testimonials = () => {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  let { data: CustomerTestimonials } = useTestimonials();
  // useEffect(() => {
  //   new Glide(".glide", {
  //     autoplay: 4000,
  //     focusAt: "center",
  //     gap: 40,
  //     perView: 3,
  //     type: "carousel",
  //   }).mount();
  // }, [CustomerTestimonials]);

  return (
    <Box
      bgGradient={`linear(to-r,${"#074EAA"}, ${redColor})`}
      px={{ base: 5, md: 20 }}
      py={20}
    >
      <Center>
        <Text
          my={5}
          color={"white"}
          fontFamily={"Poppins"}
          fontWeight={600}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "14px", md: "24px" })}
        >
          Testimonials
        </Text>
      </Center>
      <Center mb={10}>
        <Text
          my={0}
          color={yellowColor}
          fontWeight={400}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
        >
          What our people say
        </Text>
      </Center>
      {/* <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {CustomerTestimonials &&
              CustomerTestimonials.length > 0 &&
              CustomerTestimonials.map((data) => (
                <li className="glide__slide">
                  <TestimonialCard data={data} />

                </li>
              ))}
          </ul>
        </div>
      </div> */}
      <div data-aos="fade-right" data-aos-duration="2000">
        <Slider {...settings}>
          {CustomerTestimonials &&
            CustomerTestimonials.length > 0 &&
            CustomerTestimonials.map((data, index) => (
              <Box mx={10} p={3} key={index}>
                <TestimonialCard data={data} />
              </Box>
              // <motion.button key={index} whileHover={{ scale: 1.1 }}>

              // </motion.button>
            ))}
        </Slider>
      </div>
    </Box>
  );
};

export default Testimonials;
