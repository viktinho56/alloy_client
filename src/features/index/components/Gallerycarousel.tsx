import {
  Box,
  //   Text,
  //   Center,
  //   //SimpleGrid,
  //   useBreakpointValue,
} from "@chakra-ui/react";

// import { redColor, yellowColor } from "../../constants";

//import { motion } from "framer-motion";

import Slider from "react-slick";
import TeamCard from "./TeamCard";

// import { useEffect } from "react";
// import Glide from "@glidejs/glide";
let Teams = [
  {
    name: "Test",
    Url: "https://images.pexels.com/photos/6190140/pexels-photo-6190140.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    name: "Test",
    Url: "https://images.pexels.com/photos/9706059/pexels-photo-9706059.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    name: "Test",
    Url: "https://images.pexels.com/photos/9706101/pexels-photo-9706101.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    name: "Test",
    Url: "https://images.pexels.com/photos/2293506/pexels-photo-2293506.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    name: "Test",
    Url: "https://images.pexels.com/photos/3764310/pexels-photo-3764310.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];
const GalleryCarousel = () => {
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
    <Box py={5}>
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

export default GalleryCarousel;
