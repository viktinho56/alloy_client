import { Box } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
//import Navbar from "../components/navbar/Navbar";
//import Footer from "../components/footer/Footer";
import { primaryColor } from "../constants";
//import NavbarLight from "../components/navbar/NavbarLight";

const UserAuthLayout = ({ children }: { children: ReactNode }) => {
  let [navbar, setNavbar] = useState("transparent");
  console.log(navbar);
  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function () {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setNavbar("light");
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setNavbar("transparent");
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);
  return (
    <Box minH={"100vh"} bg={primaryColor}>
      {/* {navbar == "transparent" ? <NavbarLight /> : <NavbarLight />} */}
      <br />
      <br />
      <br />
      <br />
      <Box>{children}</Box>
      <br />
      <br />
      {/* <Footer /> */}
    </Box>
  );
};

export default UserAuthLayout;
