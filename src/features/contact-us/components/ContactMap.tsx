// import React from "react";

// import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Image } from "@chakra-ui/react";
import { map } from "../../../assets";

const ContactMap = () => {
  return (
    <Box py={10} px={10}>
      <Box height={500} bg={"#fff"} overflowX={"scroll"}>
        <Image h={480} w={"100%"} objectFit={"cover"} src={map} />
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.0867056275465!2d-1.5154477879760426!3d52.405104771914665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774ba555b880a1%3A0xcfc2ba1139e4006f!2sHQ%20-%20Coventry%2C%20HQ%20The%20Quadrant!5e0!3m2!1sen!2sng!4v1695994208233!5m2!1sen!2sng"
          width="600"
          height="450"
          //   style="border:0;"
          // allowfullscreen=""
          loading="lazy"
          //referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </Box>
    </Box>
  );
};

export default ContactMap;
