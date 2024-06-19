import { Box } from "@chakra-ui/react";
//import MaxCard from "./components/MaxCard";
// import ExpertiseCard from "../../components/common/ExpertiseCard";
// import IndexEvents from "../events/IndexEvents";
import Hero from "./components/Hero";
import AboutServices from "../about-us/components/AboutServices";
import { DonationCard } from "../donation";
import { IndexEvents } from "../events";
import { NewsLetterCard } from "../newsletter";
import { IndexTestimonials } from "../testimonials/components";
//import { yellowColor } from "../../constants";
// import DataCard from "./components/DataCard";
// import useMission from "./hooks/useMission";
// import useVision from "./hooks/useVision";
//import useTeams from "./hooks/useTeams";
//import TeamCarousel from "./components/TeamCarousel";
// import MaxVisionCard from "./components/MaxVisionCard";
// import MaxMissionCard from "./components/MaxMissionCard";
//import { yellowColor } from "../../constants";
//import { lightColor } from "../../constants";

const ProgramFeature = () => {
  // let { data: mission } = useMission();
  // let { data: vision } = useVision();
  //let { data: teams } = useTeams();

  return (
    <Box bg={"white"}>
      <Hero />
      <br />
      <AboutServices />
      <DonationCard />
      <IndexTestimonials />
      <NewsLetterCard />
      <IndexEvents />
      {/* <Box bg={"white"} mx={{ base: 1, md: 150 }}>
        <SimpleGrid my={0} px={10} gap={10} columns={{ base: 1, md: 2 }}>
          <MaxVisionCard />
          <MaxMissionCard />
        </SimpleGrid>
        <SimpleGrid my={0} px={10} gap={10} columns={{ base: 1, md: 2 }}>
          <div data-aos="fade-right" data-aos-duration="2000">
            <Box borderBottomStartRadius={50} borderTopEndRadius={50} p={10}>
              <Center>
                <Text
                  textAlign={"center"}
                  bgGradient="linear(to-r, red, yellow)"
                  bgClip="text"
                  fontWeight={700}
                  // fontFamily={"Poppins"}
                  lineHeight={1.2}
                  fontSize={{ base: "14px", md: "20px" }}
                >
                  VALUES
                </Text>
              </Center>
              <ul>
                <li>
                  <Text
                    color={"black"}
                    //fontWeight={700}
                    //fontFamily={"Poppins"}
                    lineHeight={1.2}
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Innovation
                  </Text>
                </li>
                <li>
                  <Text
                    color={"black"}
                    //fontWeight={700}
                    // fontFamily={"Poppins"}
                    lineHeight={1.2}
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Quality
                  </Text>
                </li>
                <li>
                  <Text
                    color={"black"}
                    //fontWeight={700}
                    // fontFamily={"Poppins"}
                    lineHeight={1.2}
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Partnership
                  </Text>
                </li>
                <li>
                  <Text
                    color={"black"}
                    //fontWeight={700}
                    // fontFamily={"Poppins"}
                    lineHeight={1.2}
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Accountability
                  </Text>
                </li>
              </ul>
            </Box>
          </div>
          <div data-aos="fade-right" data-aos-duration="2000">
            <Box borderBottomStartRadius={50} borderTopEndRadius={50} p={10}>
              <Center>
                <Text
                  textAlign={"center"}
                  bgGradient="linear(to-r, red, yellow)"
                  bgClip="text"
                  fontWeight={700}
                  // fontFamily={"Poppins"}
                  lineHeight={1.2}
                  fontSize={{ base: "14px", md: "20px" }}
                >
                  WHAT WE DO
                </Text>
              </Center>
              <ol>
                <li>
                  <Text
                    color={"black"}
                    //fontWeight={700}
                    //fontFamily={"Poppins"}
                    lineHeight={1.2}
                    fontSize={{ base: "14px", md: "16px" }}
                    my={5}
                  >
                    Delivers right information, facilitate right actions and
                    interventions towards healthy, happy and quality life.
                  </Text>
                </li>
                <li>
                  <Text
                    color={"black"}
                    //fontWeight={700}
                    // fontFamily={"Poppins"}
                    lineHeight={1.2}
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Facilitates response and solutions to challenging
                    situations, for relief, recovery and resilience.
                  </Text>
                </li>
              </ol>
            </Box>
          </div>
        </SimpleGrid>
      </Box> */}
    </Box>
  );
};

export default ProgramFeature;
