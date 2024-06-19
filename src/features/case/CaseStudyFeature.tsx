import {
  Box,
  Text,
  Center,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import CourseCard from "./components/CourseCard";
//import { Events } from "../../constants";
//import usePaginatedUsers from "./hooks/usePaginatedUsers";
import useCourses from "./hooks/useCourses";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const CaseStudyFeature = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  let { data: Events } = useCourses();
  console.log(Events);
  return (
    <Box>
      <Box px={{ base: 5, md: 20 }} py={10}>
        <Center>
          <Text
            my={5}
            color={"black"}
            fontFamily={"Poppins"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "14px", md: "28px" })}
          >
            Our Case Study
          </Text>
        </Center>
        {/* <CourseCard data={Events[0]} /> */}
        <div data-aos="fade-left" data-aos-duration="2000">
          <SimpleGrid gap={10} py={10} columns={{ base: 1, md: 3 }}>
            {Events &&
              Events.length > 0 &&
              Events.map((data, index) => (
                <CourseCard data={data} key={index} />
              ))}
          </SimpleGrid>
        </div>
      </Box>
    </Box>
  );
};

export default CaseStudyFeature;
