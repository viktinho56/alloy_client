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
import EventsCard from "./EventsCard";
//import EventCard from "./TeamCard";
// import { useEffect } from "react";
// import Glide from "@glidejs/glide";

const EventCarousel = ({ Events }: any) => {
  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      bgGradient={`linear(to-r,${"#FFF"}, ${"#FFF"})`}
      px={{ base: 5, md: 10 }}
      py={20}
    >
      <Heading mb={5} color={"black"} textAlign={"center"}>
        Stay Updated
      </Heading>

      <div data-aos="fade-right" data-aos-duration="2000">
        <Slider {...settings}>
          {Events &&
            Events.length > 0 &&
            Events.map((data: any, index: number) => (
              <Box mx={0} p={3} key={index}>
                <EventsCard data={data} />
              </Box>
            ))}
        </Slider>
      </div>
    </Box>
  );
};

export default EventCarousel;
