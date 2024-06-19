import { Box } from "@chakra-ui/react";
// import Navbar from "../components/index-navbar/Navbar";
// import Footer from "../components/index-footer/Footer";

const IndexLayout = ({ children }: any) => {
  console.log(children);
  return (
    <Box bg={"#EDF2F6"}>
      {/* <Navbar />
      <Box minH={"100vh"}>{children}</Box>
      <Footer /> */}
    </Box>
  );
};

export default IndexLayout;
