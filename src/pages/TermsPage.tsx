//import IndexCarousel from "../components/carousel/IndexCarousel";
//import IndexLayout from "../layouts/IndexLayout";

//import AOS from "aos";
import "aos/dist/aos.css";
//import CoursesFeature from "../features/courses/CoursesFeature";
// import ServiceFeature from "../features/services/ServiceFeature";

import parse from "html-react-parser";
import {
  Box,
  Text,
  //   useBreakpointValue,
  //Center,
  Heading,
} from "@chakra-ui/react";
import useTerms from "../features/about-us/hooks/useTerms";
//import MainLayout from "../layouts/MainLayout";
import DefaultLayout from "../layouts/DefaultLayout";

const TermsPage = () => {
  let { data } = useTerms();
  return (
    <DefaultLayout>
      <Box pt={10}>
        <Heading
          mt={"100px"}
          textAlign={"center"}
          color={"black"}
          fontWeight={700}
          //fontFamily={"Poppins"}
          lineHeight={1.2}
        >
          Terms and Conditions
        </Heading>
        {data && data.length > 0 && (
          <Box p={2}>
            <Text px={5} fontSize={14} mt={2}>
              {data[0].content &&
                data[0].content.length > 0 &&
                parse(data[0].content ?? "")}
            </Text>
          </Box>
        )}
      </Box>
    </DefaultLayout>
  );
};

export default TermsPage;
