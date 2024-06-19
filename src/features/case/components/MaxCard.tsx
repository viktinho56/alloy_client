import {
  Grid,
  GridItem,
  useBreakpointValue,
  VStack,
  Box,
  Text,
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
        px={20}
        py={10}
      >
        <GridItem colSpan={{ base: 0, md: 1, lg: 1 }}>
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
              We are an Award winning Consulting Company
            </Text>
            <Text
              my={5}
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "12px", md: "17px" })}
            >
              We provide practical Project Management & Business Analysis
              training and support
            </Text>
            <Text
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "12px", md: "17px" })}
            >
              We support business transformation and help people become better
              in what they do
            </Text>
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
        <GridItem colSpan={{ base: 0, md: 1, lg: 1 }}>
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
