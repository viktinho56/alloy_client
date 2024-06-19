import {
  Box,
  // Text,
  // SimpleGrid,
  // Flex,
  // VStack,
  // useBreakpointValue,
} from "@chakra-ui/react";
//import parse from "html-react-parser";
//import MaxCard from "./components/MaxCard";
// import ExpertiseCard from "../../components/common/ExpertiseCard";
// import IndexEvents from "../events/IndexEvents";
import Hero from "./components/Hero";
//import { yellowColor } from "../../constants";
// import DataCard from "./components/DataCard";
// import useMission from "./hooks/useMission";
// import useVision from "./hooks/useVision";
//import useTeams from "./hooks/useTeams";
//import TeamCarousel from "./components/TeamCarousel";
// import MaxVisionCard from "./components/MaxVisionCard";
// import MaxMissionCard from "./components/MaxMissionCard";

import { IndexAbout } from ".";
//import AboutServices from "./components/AboutServices";
// import { primaryColor, accentColor } from "../../constants";
// import { DonationCard } from "../donation";
// import { NewsLetterCard } from "../newsletter";
//import { heroBg } from "../../assets";
// import { IndexTestimonials } from "../testimonials/components";
// import { IndexEvents } from "../events";
import useValues from "./hooks/useValues";
import useObjectives from "./hooks/useObjectives";
//import { yellowColor } from "../../constants";
//import { lightColor } from "../../constants";

const AboutFeature = () => {
  // let { data: mission } = useMission();
  // let { data: vision } = useVision();
  let { data: Values } = useValues();
  let { data: Objectives } = useObjectives();
  console.log(Values, Objectives);
  return (
    <Box bg={"white"}>
      <Hero />
      <div data-aos="fade-right" data-aos-duration="2000">
        <Box>
          <IndexAbout />
        </Box>
      </div>
      {/* <Box bg={"white"} my={{ base: 10, md: 1 }} mx={{ base: 5, md: 40 }}>
        <SimpleGrid my={0} gap={10} columns={{ base: 1, md: 2 }}>
          <Flex
            w={"full"}
            h={{ base: 200, md: 300 }}
            backgroundImage={
              "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            backgroundSize={"cover"}
            borderRadius={12}
            overflow={"hidden"}
            backgroundPosition={"center center"}
          >
            <VStack
              w={"full"}
              justify={"center"}
              px={useBreakpointValue({ base: 4, md: 8 })}
              bgGradient={`linear(to-r, blackAlpha.600, blackAlpha.600)`}
            ></VStack>
          </Flex>
          <MaxVisionCard />
        </SimpleGrid>
        <SimpleGrid my={10} gap={10} columns={{ base: 1, md: 2 }}>
          <MaxMissionCard />
          <Flex
            w={"full"}
            h={{ base: 200, md: 300 }}
            backgroundImage={
              "https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            backgroundSize={"cover"}
            borderRadius={12}
            overflow={"hidden"}
            backgroundPosition={"center center"}
          >
            <VStack
              w={"full"}
              justify={"center"}
              px={useBreakpointValue({ base: 4, md: 8 })}
              bgGradient={`linear(to-r, blackAlpha.600, blackAlpha.600)`}
            ></VStack>
          </Flex>
        </SimpleGrid>
        <br />
        <SimpleGrid
          mt={{ base: 1, md: 10 }}
          gap={10}
          columns={{ base: 1, md: 1 }}
        >
          <div data-aos="fade-right" data-aos-duration="2000">
            <Box borderBottomStartRadius={50} borderTopEndRadius={50}>
              <Text
                bgGradient={`linear(to-r, ${primaryColor}, ${accentColor})`}
                bgClip="text"
                fontWeight={700}
                // fontFamily={"Poppins"}
                lineHeight={1.2}
                fontSize={{ base: "14px", md: "20px" }}
              >
                VALUES
              </Text>
              <Box ml={5} lineHeight={2.0}>
                <Text lineHeight={2} textAlign={"justify"}>
                  {Values &&
                    Values.length > 0 &&
                    parse(Values[0].content ? Values[0].content : "")}
                </Text>
              </Box>
            </Box>
          </div>
          <div data-aos="fade-right" data-aos-duration="2000">
            <Box borderBottomStartRadius={50} borderTopEndRadius={50}>
              <Text
                //textAlign={"center"}
                bgGradient={`linear(to-r, ${primaryColor}, ${accentColor})`}
                bgClip="text"
                fontWeight={700}
                // fontFamily={"Poppins"}
                lineHeight={1.2}
                fontSize={{ base: "14px", md: "20px" }}
              >
                OBJECTIVES
              </Text>
              <Text lineHeight={2} textAlign={"justify"}>
                {Objectives &&
                  Objectives.length > 0 &&
                  parse(Objectives[0].content ? Objectives[0].content : "")}
              </Text>
            </Box>
          </div>
        </SimpleGrid>
      </Box>
      <DonationCard />
      <IndexTestimonials />
      <NewsLetterCard />
      <IndexEvents /> */}
    </Box>
  );
};

export default AboutFeature;
