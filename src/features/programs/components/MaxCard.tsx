import {
  Grid,
  GridItem,
  useBreakpointValue,
  VStack,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { yellowColor, redColor } from "../../../constants";

const MaxCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-left" data-aos-duration="2000">
      <Grid
        bg={"white"}
        gap={10}
        templateColumns="repeat(2, 1fr)"
        px={{ base: 5, md: 20 }}
        py={10}
      >
        <GridItem colSpan={{ base: 2, md: 1, lg: 1 }}>
          <Box>
            <Text
              my={5}
              //fontFamily={"Poppins"}
              color={yellowColor}
              fontWeight={600}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "14px", md: "24px" })}
            >
              ABOUT US
            </Text>
            <Text
              my={5}
              //fontFamily={"Poppins"}
              fontWeight={600}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "15px", md: "20px" })}
            >
              WHO WE ARE.
            </Text>
            <Text
              my={5}
              fontWeight={400}
              lineHeight={1.5}
              fontSize={useBreakpointValue({ base: "12px", md: "17px" })}
            >
              <b> Dr. Michael People Empowerment Foundation.</b> is a
              non-governmental organization incorporated in Nigeria. It was
              founded with the mission of empowering people; providing
              appropriate information, knowledge, and capacity, as well as
              facilitating appropriate action, towards living a healthy, happy,
              and quality life. Also, to bring hope and relief to people facing
              challenges by providing and facilitating solutions through
              collaboration, as well as supporting interventions and initiatives
              for relief, recovery and resilience.
            </Text>
            <Box mx={{ base: 2, md: 5 }}>
              <Heading
                fontWeight={600}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "15px", md: "20px" })}
              >
                WHAT WE DO
              </Heading>
              <ul>
                <li>
                  Delivers right information, facilitate right actions and
                  interventions towards healthy, happy and quality life.
                </li>
                <li>
                  Facilitates response and solutions to challenging situations,
                  for relief, recovery and resilience
                </li>
              </ul>
            </Box>
            <br />
            <Box mx={{ base: 2, md: 5 }}>
              <Heading
                fontWeight={600}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "15px", md: "20px" })}
              >
                OUR VALUES
              </Heading>
              <ul>
                <li>Innovation</li>
                <li>Quality</li>
                <li>Partnership</li>
                <li>Accountability</li>
              </ul>
            </Box>
          </Box>
          {/* <Button
            mt={10}
            opacity={0.9}
            bg={yellowColor}
            rounded={"full"}
            color={"black"}
            _hover={{ bg: "whiteAlpha.500" }}
          >
            Read more
          </Button> */}
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1, lg: 1 }}>
          <Box
            backgroundImage={`url("https://images.pexels.com/photos/3865844/pexels-photo-3865844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`}
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
            borderRadius={12}
            overflow={"hidden"}
            h={{ base: "300px", md: "400px" }}
          >
            <VStack
              w={"full"}
              h={"100%"}
              justify={"center"}
              px={useBreakpointValue({ base: 4, md: 8 })}
              opacity={0.5}
              bgGradient={`linear(to-r,${yellowColor}, ${redColor})`}
            >
              hhh
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default MaxCard;
