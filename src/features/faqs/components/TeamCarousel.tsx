import {
  Box,
  //   Text,
  //   Center,
  //   //SimpleGrid,
  //   useBreakpointValue,
  Heading,
} from "@chakra-ui/react";

// import { redColor, yellowColor } from "../../constants";

//import { motion } from "framer-motion";

import Slider from "react-slick";
import TeamCard from "./TeamCard";
// import { useEffect } from "react";
// import Glide from "@glidejs/glide";

const TeamCarousel = ({ Teams }: any) => {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
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
      bgGradient={`linear(to-r,${"#000"}, ${"#000"})`}
      px={{ base: 5, md: 5 }}
      py={10}
    >
      <Heading mb={5} color={"white"} textAlign={"center"}>
        Meet Our Professional Team
      </Heading>

      <div data-aos="fade-right" data-aos-duration="2000">
        <Slider {...settings}>
          {Teams &&
            Teams.length > 0 &&
            Teams.map((data: any, index: number) => (
              <Box mx={10} p={3} key={index}>
                <TeamCard data={data} />
              </Box>
            ))}
        </Slider>
      </div>
    </Box>
  );
};

export default TeamCarousel;
