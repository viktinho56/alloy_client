import {
  Box,
  Text,
  Center,
  Image,
  Flex,
  //SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

//import { redColor, yellowColor } from "../../constants";
//import TestimonialCard from "./components/TestimonialCard";
//import { motion } from "framer-motion";
//import useTestimonials from "./hooks/useTestimonials";
import Slider from "react-slick";
import useClients from "./hooks/useClients";
import { motion } from "framer-motion";
import { ServerUrl } from "../../constants";
// import { useEffect } from "react";
// import Glide from "@glidejs/glide";

const IndexClients = () => {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  let { data: CustomerTestimonials } = useClients();

  return (
    <Box bg={"#fff"} minH={100} px={20} py={10}>
      <Center>
        <Text
          my={5}
          color={"black"}
          //fontFamily={"Poppins"}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "14px", md: "28px" })}
        >
          Some Organisations Our Clients Are Working With
        </Text>
      </Center>
      <div data-aos="fade-right" data-aos-duration="2000">
        <Slider {...settings}>
          {CustomerTestimonials &&
            CustomerTestimonials.length > 0 &&
            CustomerTestimonials.map((data, index) => (
              <motion.button key={index} whileHover={{ scale: 1.1 }}>
                <Flex mx={5} justifyContent={"center"} alignItems={"center"}>
                  <Image w={"150px"} src={ServerUrl + data.clientLogo} />
                  {/* <TestimonialCard data={data} /> */}
                </Flex>
              </motion.button>
            ))}
        </Slider>
      </div>
    </Box>
    // <Box
    //   bgGradient={`linear(to-r,${"#074EAA"}, ${redColor})`}
    //   px={{ base: 5, md: 20 }}
    //   py={20}
    // >
    //   <Center>
    //     <Text
    //       my={5}
    //       color={"white"}
    //       fontFamily={"Poppins"}
    //       fontWeight={600}
    //       lineHeight={1.2}
    //       fontSize={useBreakpointValue({ base: "14px", md: "24px" })}
    //     >
    //       Testimonials
    //     </Text>
    //   </Center>
    //   <Center mb={10}>
    //     <Text
    //       my={0}
    //       color={yellowColor}
    //       fontWeight={400}
    //       lineHeight={1.2}
    //       fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
    //     >
    //       What our people say
    //     </Text>
    //   </Center>
    //   {/* <div className="glide">
    //     <div className="glide__track" data-glide-el="track">
    //       <ul className="glide__slides">
    //         {CustomerTestimonials &&
    //           CustomerTestimonials.length > 0 &&
    //           CustomerTestimonials.map((data) => (
    //             <li className="glide__slide">
    //               <TestimonialCard data={data} />

    //             </li>
    //           ))}
    //       </ul>
    //     </div>
    //   </div> */}
    //   <div data-aos="fade-right" data-aos-duration="2000">
    //     <Slider {...settings}>
    //       {CustomerTestimonials &&
    //         CustomerTestimonials.length > 0 &&
    //         CustomerTestimonials.map((data, index) => (
    //           <motion.button key={index} whileHover={{ scale: 1.1 }}>
    //             <Box mx={5}>
    //               <TestimonialCard data={data} />
    //             </Box>
    //           </motion.button>
    //         ))}
    //     </Slider>
    //   </div>
    // </Box>
  );
};

export default IndexClients;
