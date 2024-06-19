import { Box, Heading, Text } from "@chakra-ui/react";

import {
  primaryColor,
  // primaryColorDark,
  // primaryColorLight,
  whiteColor,
} from "../../../constants";
//import { Services } from "../../../data/fakedata";

//import { NavLink } from "react-router-dom";
import parse from "html-react-parser";
import useService from "../hooks/useService";
const AboutServices = () => {
  let { data: Services } = useService();
  console.log(Services);
  return (
    <Box px={{ base: 1, md: 40 }} py={{ base: 1, md: 10 }}>
      <Heading
        mb={3}
        fontSize={25}
        //color={primaryColorDark}
        bgClip="text"
        bgGradient={`linear(to-r, ${primaryColor}, ${whiteColor})`}
      >
        OUR SERVICES
      </Heading>
      <Box>
        <Text lineHeight={2.5} textAlign={"justify"} fontSize={14} mt={2}>
          {Services &&
            Services.length > 0 &&
            parse(Services[0].content ? Services[0].content : "")}
        </Text>
      </Box>
      {/* <Box ml={5}>
        <ol>
          {Services.map((service, index) => (
            <li key={index}>
              <Text lineHeight={2.5}>{service.name}</Text>
            </li>
          ))}
        </ol>
      </Box> */}
      {/* <Button
        as={NavLink}
        to={"/our-services"}
        px={7}
        size={"md"}
        bg={primaryColor}
        rounded={"full"}
        fontWeight={500}
        fontSize={16}
        color={primaryColorDark}
        _hover={{
          bgGradient: `linear(to-r, ${primaryColorLight}, ${primaryColor})`,
        }}
      >
        Read More
      </Button> */}
    </Box>
  );
};

export default AboutServices;
