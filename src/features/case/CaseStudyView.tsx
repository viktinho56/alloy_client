import {
  Box,
  Heading,
  Image,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
//import MaxCard from "./components/MaxCard";
// import ExpertiseCard from "../../components/common/ExpertiseCard";
// import IndexEvents from "../events/IndexEvents";
//import Hero from "./components/Hero";
import { NavLink, useParams } from "react-router-dom";
//import useServices from "../../hooks/useServices";
import { useEffect, useState } from "react";
import useCourses from "./hooks/useCourses";
import { ServerUrl, redColor } from "../../constants";
import parse from "html-react-parser";
const CaseStudyView = () => {
  let { slug } = useParams();

  let { data } = useCourses();
  console.log(data);
  let [found, setFound] = useState<any>(null);
  useEffect(() => {
    setFound(data.find((d) => d.slug == slug));
    console.log(found);
  }, [data]);
  // let { data: mission } = useMission();
  // let { data: vision } = useVision();
  return (
    <Box>
      {/* <Hero /> */}
      {found && (
        <Box py={{ base: 2, md: 10 }} px={{ base: 2, md: 40 }}>
          <SimpleGrid gap={10} columns={{ base: 1, md: 2 }}>
            <Box>
              <Heading>{found.title}</Heading>
              <Text textAlign={"justify"} noOfLines={5} fontSize={18} mt={2}>
                {found.content &&
                  found.content.length > 0 &&
                  parse(found.content ? found.content : "")}
              </Text>
            </Box>
            <Image src={ServerUrl + found.imageCover} />
          </SimpleGrid>
          <Button color={"white"} bg={redColor} as={NavLink} to="/case-study">
            Back to Case Study
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CaseStudyView;
