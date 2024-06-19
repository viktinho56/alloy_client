import {
  Box,
  Button,
  //SimpleGrid,
  Text,
  useBreakpointValue,
  Center,
  //   Center,
  //   Image,
} from "@chakra-ui/react";
//import IndexCarousel from "../components/carousel/IndexCarousel";
import IndexLayout from "../layouts/IndexLayout";
import { yellowColor } from "../constants";
//import AOS from "aos";
import "aos/dist/aos.css";
//import { useEffect } from "react";
import { consulting } from "../assets";
//import IndexEvents from "../features/events/IndexEvents";
const ConsultingPage = () => {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <IndexLayout>
      <Box bg={"white"}>
        <Box
          w={"100%"}
          bg={"black"}
          overflow={"hidden"}
          height={{ base: "300px", md: "auto" }}
        >
          <video style={{ width: "100%" }} autoPlay muted loop>
            <source src={consulting} type="video/mp4"></source>
          </video>
        </Box>
        <Box py={10} mx={{ base: 2, md: 40 }}>
          <Center>
            <Text
              my={5}
              fontFamily={"Poppins"}
              color={"black"}
              fontWeight={600}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "14px", md: "24px" })}
            >
              CONSULTING
            </Text>
          </Center>
          <Center>
            <Text
              my={1}
              color={"black"}
              fontWeight={500}
              lineHeight={2}
              fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
            >
              Every business faces unique and complex challenges. Successful
              businesses navigate and grow through these changes. Challenges are
              specific and solutions do not translate perfectly from one
              business to another, which is why we provide fully customised
              approach to professional services. A differentiated approach
              relevant to your challenges and meet your unique needs.
              <br />
              <br />
              <p>
                We are truly different. We have grown our practice around
                brightest people with varied backgrounds in global businesses.
              </p>
              <p>
                We have successfully completed multiple projects across a wide
                range of sectors.
              </p>
              <br />
              <p>
                We are content led people, who bring real life experience and
                look for the right approach for you, not us. We work with you,
                using tried and tested methods developed from years of hands-on
                experience to deliver efficient and consistent results. Our
                credentials demonstrate the breadth of our expertise across a
                full range of services including financial and working capital,
                technology, operations and leadership, people and culture.
              </p>
            </Text>
          </Center>
          <Center>
            <Button
              rounded={"full"}
              size={"md"}
              fontSize={"16px"}
              bg={yellowColor}
            >
              Contact Us today
            </Button>
          </Center>
        </Box>
        {/* <IndexEvents /> */}
      </Box>
    </IndexLayout>
  );
};

export default ConsultingPage;
