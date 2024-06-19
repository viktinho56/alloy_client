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
//import useTerms from "../hooks/useTerms";
import usePrivacy from "../hooks/usePrivacy";
import DefaultLayout from "../layouts/DefaultLayout";

const PrivacyPage = () => {
  let { data } = usePrivacy();
  console.log(data);
  return (
    <DefaultLayout>
      <Box p={10}>
        <Heading
          mt={"100px"}
          mb={2}
          textAlign={"center"}
          color={"black"}
          fontWeight={700}
          //fontFamily={"Poppins"}
          lineHeight={1.2}
        >
          Privacy Policy
        </Heading>
        {data && data.length > 0 && (
          <Box>
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

export default PrivacyPage;
