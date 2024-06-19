import { Box, Flex, Heading } from "@chakra-ui/react";
import {
  //accentColor,
  primaryColor,
  // primaryColorDark,
  //primaryColorLight,
} from "../../../constants";
import TestimonyCard from "./TestimonyCard";

import Glider from "react-glider";
import "glider-js/glider.min.css";
//import { NavLink } from "react-router-dom";
import useTestimonials from "../hooks/useTestimonials";
const IndexTestimonials = () => {
  let { data } = useTestimonials();
  return (
    <Box px={{ base: 5, md: 40 }} py={{ base: 5, md: 10 }}>
      <Flex mb={10} justifyContent={"space-between"} alignItems={"center"}>
        <Heading fontSize={25} color={primaryColor}>
          TESTIMONIALS
        </Heading>
        {/* <Button
          as={NavLink}
          to={"/testimonials"}
          px={7}
          size={"md"}
          bg={accentColor}
          rounded={"full"}
          fontWeight={500}
          fontSize={16}
          color={primaryColorDark}
          _hover={{
            bgGradient: `linear(to-r, ${primaryColorLight}, ${primaryColor})`,
          }}
        >
          View all
        </Button> */}
      </Flex>
      <Glider draggable hasArrows hasDots slidesToShow={3} slidesToScroll={1}>
        {data &&
          data.length > 0 &&
          data.map((d, i) => <TestimonyCard data={d} key={i} />)}
      </Glider>
    </Box>
  );
};

export default IndexTestimonials;
