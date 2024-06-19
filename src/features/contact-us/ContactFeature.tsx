import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import ContactForm from "./components/ContactForm";

import {
  AppName,
  ContactLinks,
  whiteColor,
  yellowColor,
} from "../../constants";
import { PhoneIcon, EmailIcon, LinkIcon } from "@chakra-ui/icons";
import Hero from "./components/Hero";

//import ContactMap from "./components/ContactMap";

const ContactFeature = () => {
  return (
    <Box bg={whiteColor}>
      <Hero />
      <Grid templateColumns="repeat(4, 1fr)" minH={"90vh"}>
        <GridItem height={"100%"} colSpan={{ base: 4, md: 2, lg: 2 }}>
          <Box py={10} mx={{ base: 2, md: 40 }}>
            <Text
              my={5}
              //fontFamily={"Poppins"}
              color={"black"}
              fontWeight={600}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "14px", md: "32px" })}
            >
              CONTACT US
            </Text>
            <Center>
              <Text
                my={1}
                color={"blackAlpha.700"}
                fontWeight={500}
                lineHeight={2}
                fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
              >
                To know more about what we do at {AppName}, or if you have any
                enquiries, please don't hesitate to reach out through the
                contact form
              </Text>
            </Center>
            <Box>
              <Heading mt={10} textDecoration={"underline"} fontSize={16}>
                OUR CONTACT INFO
              </Heading>
              <Flex
                color={"blackAlpha.700"}
                fontWeight={500}
                lineHeight={2}
                fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
                my={3}
                alignItems={"center"}
              >
                <LinkIcon mt={2} alignSelf={"baseLine"} mr={3} />
                <Text>{ContactLinks[0].name}</Text>
              </Flex>

              <Flex
                color={"blackAlpha.700"}
                fontWeight={500}
                lineHeight={2}
                fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
                my={3}
                alignItems={"center"}
              >
                <PhoneIcon mr={3} />
                <Text>{ContactLinks[2].name} </Text>
              </Flex>
              <Flex
                color={"blackAlpha.700"}
                fontWeight={500}
                lineHeight={2}
                fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
                my={3}
                alignItems={"center"}
              >
                <EmailIcon mr={3} />
                <Text>{ContactLinks[1].name}</Text>
              </Flex>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          p={{ base: 2, md: 10, lg: 10 }}
          //py={{ base: 10, md: 10, lg: 10 }}
          colSpan={{ base: 4, md: 2, lg: 2 }}
        >
          <Flex p={5} borderRadius={12} h={"100%"} bg={"white"}>
            <Box w={"full"}>
              <Text
                //my={5}
                //fontFamily={"Poppins"}
                color={"black"}
                fontWeight={600}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "14px", md: "28px" })}
              >
                Get in Touch
              </Text>
              <Text
                my={1}
                //fontFamily={"Poppins"}
                color={yellowColor}
                fontWeight={400}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "14px", md: "17px" })}
              >
                You can reach us anytime
              </Text>
              <ContactForm />
            </Box>
          </Flex>
        </GridItem>
      </Grid>
      {/* <Box mb={10} borderRadius={12} bg={"white"} mx={{ base: 2, md: 40 }}>
        <ContactMap />
      </Box> */}
      {/* <IndexEvents /> */}
    </Box>
  );
};

export default ContactFeature;
