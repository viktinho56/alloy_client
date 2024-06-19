import {
  Box,
  Flex,
  Button,
  Heading,
  Center,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  ServerUrl,
  accentColor,
  primaryColor,
  primaryColorDark,
  primaryColorLight,
  yellowColor,
} from "../../../constants";

//import IndexEventCard from "./IndexEventCard";
//import WebinarCard from "./WebinarCard";
import { NavLink } from "react-router-dom";
import useEvents from "../hooks/useEvents";
import { ppt } from "../../../assets";
const IndexEvents = () => {
  let { data } = useEvents();
  return (
    <Box px={{ base: 5, md: 40 }} py={{ base: 5, md: 10 }}>
      <Flex mb={10} justifyContent={"space-between"} alignItems={"center"}>
        <Heading fontSize={25} color={primaryColorDark}>
          OUR EVENTS
        </Heading>
        <Button
          as={NavLink}
          to={"/events"}
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
        </Button>
      </Flex>
      {data.length == 0 && (
        <Center>
          <Heading py={10}>There are no webinars at the moment</Heading>
        </Center>
      )}
      <SimpleGrid gap={3} columns={{ base: 1, md: 2 }}>
        {data &&
          data.length > 0 &&
          data.map((d, i) => (
            <Box
              //maxW={"270px"}
              key={i}
              mt={12}
              w={"full"}
              bg={"white"}
              p={3}
              //   boxShadow={"2xl"}
              rounded={"md"}
            >
              {d.mediaType == ".pptx" && (
                <Box>
                  <Box
                    py={2}
                    as={Flex}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <img width={250} src={ppt} />
                  </Box>
                  <Text>{d.eventTitle}</Text>
                  <Button
                    my={2}
                    bg={yellowColor}
                    as={"a"}
                    href={ServerUrl + d.mediaUrl}
                  >
                    Download
                  </Button>
                </Box>
              )}
              {d.mediaType == ".mp4" && (
                <video preload="true" controls width="100%">
                  <source src={ServerUrl + d.mediaUrl} type="video/mp4" />
                </video>
              )}
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default IndexEvents;
