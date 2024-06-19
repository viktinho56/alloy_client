import { Box } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { lightColor } from "../constants";
import NavbarLight from "../components/navbar/NavbarLight";

const MainLayout = ({ children }: { children: ReactNode }) => {
  let [navbar, setNavbar] = useState("transparent");
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
    <Box bg={lightColor}>
      {navbar == "transparent" ? <Navbar /> : <NavbarLight />}
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
