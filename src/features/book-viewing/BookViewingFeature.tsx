import { Box, Container } from "@chakra-ui/react";
//
//import Hero from "../book-viewing/components/Hero";
import BookViewingForm from "./components/BookViewingForm";

const BookViewingFeature = () => {
  return (
    <Box bg={"white"}>
      {/* <Hero /> */}
      <Container minH={"50vh"} pt={20} px={20}>
        <BookViewingForm />
      </Container>
    </Box>
  );
};

export default BookViewingFeature;
