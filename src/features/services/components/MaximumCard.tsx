import {
  Grid,
  GridItem,
  useBreakpointValue,
  // VStack,
  Box,
  Text,
} from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { yellowColor, ServerUrl } from "../../../constants";
import parse from "html-react-parser";
const MaximumCard = ({ data }: any) => {
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
              textAlign={"center"}
              my={5}
              //fontFamily={"Poppins"}
              color={yellowColor}
              fontWeight={600}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "14px", md: "24px" })}
            >
              {data.title}
            </Text>

            <Text textAlign={"justify"} fontSize={16} mt={2}>
              {data.content &&
                data.content.length > 0 &&
                parse(data.content ? data.content : "")}
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
            backgroundImage={ServerUrl + data.imageCover}
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
            borderRadius={12}
            overflow={"hidden"}
            h={{ base: "300px", md: "400px" }}
          >
            {/* <VStack
              w={"full"}
              h={"100%"}
              justify={"center"}
              px={useBreakpointValue({ base: 4, md: 8 })}
              opacity={0.5}
              bgGradient={`linear(to-r,${yellowColor}, ${redColor})`}
            >
              hhh
            </VStack> */}
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default MaximumCard;
