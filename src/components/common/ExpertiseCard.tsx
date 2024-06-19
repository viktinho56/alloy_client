import {
  Box,
  Text,
  Center,
  useBreakpointValue,
  SimpleGrid,
  Image,
  Button,
} from "@chakra-ui/react";

import { ServerUrl, yellowColor } from "../../constants";
import { motion } from "framer-motion";
import useServices from "../../hooks/useServices";
import parse from "html-react-parser";
//import { NavLink } from "react-router-dom";
const ExpertiseCard = () => {
  let { data: Services } = useServices();
  return (
    <Box
      bgGradient={`linear(to-r,${yellowColor}, ${"#074EAA"})`}
      px={{ base: 5, md: 20 }}
      py={10}
    >
      <Center>
        <Text
          my={5}
          color={"white"}
          fontFamily={"Poppins"}
          fontWeight={600}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "14px", md: "24px" })}
        >
          OUR EXPERTISE
        </Text>
      </Center>
      <Center>
        <Text
          my={0}
          color={yellowColor}
          fontWeight={400}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
        >
          As a fast growing company, our expertise cuts across the following
        </Text>
      </Center>
      <div data-aos="fade-right" data-aos-duration="2000">
        <SimpleGrid gap={10} py={10} columns={{ base: 1, md: 3 }}>
          {Services &&
            Services.length > 0 &&
            Services.map((s, i) => (
              <motion.button key={i} whileHover={{ scale: 1.1 }}>
                <Box
                  // as={NavLink}
                  // to={"/services/" + s.slug}
                  boxShadow={"2xl"}
                  // border={"solid white 2px"}
                  borderBottomStartRadius={50}
                  borderTopEndRadius={50}
                  overflow={"hidden"}
                  // bg={"white"}
                  //bg={"#04001D"}
                  // bg={"#0349AC"}
                  minH={20}
                >
                  <Image
                    src={ServerUrl + s.imageCover}
                    h={"200px"}
                    w={"100%"}
                    objectFit={"cover"}
                  />
                  <Center mt={5} px={10}>
                    <Text
                      //my={5}
                      color={"white"}
                      fontWeight={700}
                      fontFamily={"Poppins"}
                      lineHeight={1.2}
                      fontSize={{
                        base: "14px",
                        md: "20px",
                      }}
                    >
                      {s.title}
                    </Text>
                  </Center>
                  <Center mb={5} py={5} px={10}>
                    <Box h={100}>
                      <Text
                        color={"white"}
                        textAlign={"center"}
                        noOfLines={5}
                        fontSize={16}
                        mt={2}
                      >
                        {s.content &&
                          s.content.length > 0 &&
                          parse(s.content ? s.content : "")}
                      </Text>
                    </Box>
                  </Center>
                  <Button
                    as={"a"}
                    href={"/services/" + s.slug}
                    bg={yellowColor}
                    width={"full"}
                    size={"sm"}
                  >
                    READ MORE
                  </Button>
                </Box>
              </motion.button>
            ))}
        </SimpleGrid>
      </div>
    </Box>
  );
};

export default ExpertiseCard;
