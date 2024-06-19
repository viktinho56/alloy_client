"use client";

import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Hero({ data }: any) {
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
      height={"400px"}
      backgroundImage={`url("https://images.pexels.com/photos/6248966/pexels-photo-6248966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.700, blackAlpha.700)"}
      >
        <div data-aos="fade-up">
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              ABOUT US
            </Text>
            {/* <Text
              color={yellowColor}
              fontWeight={400}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "xl", md: "16px" })}
            >
              We support business transformation and help people <br />
              become better in what they do
            </Text> */}
          </Stack>
        </div>
      </VStack>
    </Flex>
  );
}
