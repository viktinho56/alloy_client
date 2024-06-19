import {
  Box,
  Heading,
  Center,
  SimpleGrid,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
//import GalleryCarousel from "../features/gallery/components/GalleryCarousel";
import CustomLayout from "../layouts/CustomLayout";
//import { IndexEvents } from "../features/events";
import { ServerUrl, yellowColor } from "../constants";
import useEvents from "../features/events/hooks/useEvents";
import { ppt } from "../assets";
const WebinarPage = () => {
  let { data } = useEvents();
  return (
    <CustomLayout>
      <Box minH={"100vh"} bg={"#F5F5F5"} p={20}>
        <Center>
          <Heading fontSize={24} mt={5}>
            Our webinars at the moment
          </Heading>
        </Center>
        {data.length == 0 && (
          <Center>
            <Heading py={10}>There are no webinars at the moment</Heading>
          </Center>
        )}
        <SimpleGrid gap={3} columns={{ base: 1, md: 2 }}>
          {data &&
            data.length > 0 &&
            data.map((d, i) => (
              <Box
                //maxW={"270px"}
                key={i}
                mt={12}
                w={"full"}
                bg={"white"}
                p={3}
                //   boxShadow={"2xl"}
                rounded={"md"}
              >
                {d.mediaType == ".pptx" && (
                  <Box>
                    <Box
                      py={2}
                      as={Flex}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <img width={250} src={ppt} />
                    </Box>
                    <Text>{d.eventTitle}</Text>
                    <Button
                      my={2}
                      bg={yellowColor}
                      as={"a"}
                      href={ServerUrl + d.mediaUrl}
                    >
                      Download
                    </Button>
                  </Box>
                )}
                {d.mediaType == ".mp4" && (
                  <video preload="true" controls width="100%">
                    <source src={ServerUrl + d.mediaUrl} type="video/mp4" />
                  </video>
                )}
              </Box>
            ))}
        </SimpleGrid>

        {/* <IndexEvents /> */}
      </Box>
    </CustomLayout>
  );
};

export default WebinarPage;
