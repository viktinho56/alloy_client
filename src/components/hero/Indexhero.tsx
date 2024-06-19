"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { redColor, yellowColor } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function IndexHero({ data }: any) {
  useEffect(() => {
    AOS.init({
      once: false,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    // alert("yes");
  }, [data]);
  return (
    <Flex
      w={"full"}
      height={"600px"}
      backgroundImage={`url(${data})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.300, blackAlpha.500)"}
      >
        <div data-aos="fade-up">
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              WELCOME TO NGOLAAD CONSULTING
            </Text>
            <Text
              color={yellowColor}
              fontWeight={400}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "xl", md: "16px" })}
            >
              We support business transformation and help people <br />
              become better in what they do
            </Text>
            <Stack direction={"row"}>
              <Button
                opacity={0.9}
                bg={redColor}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Read more
              </Button>
              {/* <Button
              bg={yellowColor}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button> */}
            </Stack>
          </Stack>
        </div>
      </VStack>
    </Flex>
  );
}
