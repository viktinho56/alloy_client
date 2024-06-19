"use client";

import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
//import Navbar from "../../../components/index-navbar/Navbar";
import { AppName } from "../../../constants";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function IndexHeroCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Welcome to",
      text: `${AppName}`,
      image:
        "https://images.pexels.com/photos/6189932/pexels-photo-6189932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Promoting Healthy",
      text: " and Happy Life ",
      image:
        "https://images.pexels.com/photos/6190140/pexels-photo-6190140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    // {
    //   title: "Design Projects 3",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image:
    //     "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    // },
  ];

  return (
    <Box
      //marginTop={"-100px"}
      position={"relative"}
      height={"90vh"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Flex
            key={index}
            w={"full"}
            h={"100vh"}
            backgroundImage={`url(${card.image})`}
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
          >
            <VStack
              h={"full"}
              w={"full"}
              justify={"center"}
              px={useBreakpointValue({ base: 4, md: 8 })}
              opacity={0.7}
              bgGradient={`linear(to-r, black, black)`}
            >
              <Stack maxW={"2xl"} align={"center"} spacing={6}>
                <Text
                  textAlign={"center"}
                  bgGradient="linear(to-r, red, yellow)"
                  bgClip="text"
                  fontWeight={700}
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                >
                  {card.title}
                </Text>
                <Text
                  textAlign={"center"}
                  bgGradient="linear(to-r, red, yellow)"
                  bgClip="text"
                  fontWeight={700}
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                >
                  {card.text}
                </Text>
                <Stack direction={"row"}>
                  <Box
                    as="button"
                    py={2}
                    px={10}
                    color="white"
                    fontWeight="bold"
                    borderRadius="full"
                    bgGradient="linear(to-r, red.500, yellow.500)"
                    //bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: "linear(to-r, yellow.500, red.500)",
                    }}
                  >
                    Click here
                  </Box>
                  {/* <Button
                    bg={yellowColor}
                    rounded={"full"}
                    color={"white"}
                    _hover={{ bg: "whiteAlpha.500" }}
                  >
                    Show me more
                  </Button> */}
                </Stack>
              </Stack>
            </VStack>
          </Flex>
          //   <Box
          //     key={index}
          //     height={"6xl"}
          //     position="relative"
          //     backgroundPosition="center"
          //     backgroundRepeat="no-repeat"
          //     backgroundSize="cover"
          //     backgroundImage={`url(${card.image})`}
          //   >
          //     {/* This is the block you need to change, to customize the caption */}
          //     <Box bgGradient={`linear(to-r, red.300, yellow.200)`}>
          //       <Navbar />
          //       <Container
          //         as={Flex}
          //         size="container.lg"
          //         height="600px"
          //         position="relative"
          //       >
          //         <Stack
          //           textAlign={"center"}
          //           spacing={6}
          //           w={"full"}
          //           maxW={"lg"}
          //           position="absolute"
          //           top="40%"
          //           transform="translate(0, -50%)"
          //         >
          //           <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          //             {card.title}
          //           </Heading>
          //           <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
          //             {card.text}
          //           </Text>
          //           <Flex justifyContent={"center"} alignItems={"center"}>
          //             <Button
          //               bg={"blue.400"}
          //               rounded={"full"}
          //               color={"white"}
          //               _hover={{ bg: "blue.500" }}
          //             >
          //               Show me more
          //             </Button>
          //             <Button
          //               bg={"whiteAlpha.300"}
          //               rounded={"full"}
          //               color={"white"}
          //               _hover={{ bg: "whiteAlpha.500" }}
          //             >
          //               Show me more
          //             </Button>
          //           </Flex>
          //         </Stack>
          //       </Container>
          //     </Box>
          //   </Box>
        ))}
      </Slider>
    </Box>
  );
}
