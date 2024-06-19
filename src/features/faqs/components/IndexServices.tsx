import { Box, Button, Heading, Text } from "@chakra-ui/react";

import {
  accentColor,
  primaryColor,
  primaryColorDark,
  primaryColorLight,
  whiteColor,
} from "../../../constants";
import { Services } from "../../../data/fakedata";
import { NavLink } from "react-router-dom";

const IndexServices = () => {
  return (
    <Box px={{ base: 5, md: 40 }} py={{ base: 5, md: 10 }}>
      <Heading
        mb={3}
        fontSize={25}
        //color={primaryColorDark}
        bgClip="text"
        bgGradient={`linear(to-r, ${primaryColor}, ${whiteColor})`}
      >
        OUR SERVICES
      </Heading>
      <Box ml={5}>
        <ol>
          {Services.map(
            (service, index) =>
              index <= 4 && (
                <li>
                  <Text lineHeight={2.5}>{service.name}</Text>
                </li>
              )
          )}
        </ol>
      </Box>
      <Button
        as={NavLink}
        to={"/our-services"}
        px={7}
        mt={5}
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
        Read More
      </Button>
    </Box>
  );
};

export default IndexServices;
