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
import { accentColor, whiteColor } from "../../../constants";
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
      height={{ base: "300px", md: "400px" }}
      backgroundImage={`url("https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}
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
              bgGradient={`linear(to-r, ${accentColor}, ${whiteColor})`}
              bgClip="text"
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              OUR SERVICES
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
