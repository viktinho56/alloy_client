import { Box, Text } from "@chakra-ui/react";

const PropertyInfoCard = () => {
  return (
    <Box display={{ base: "block", md: "flex" }} gap={{ base: 6, md: 10 }}>
      <Box textAlign="center" mb={{ base: 6, md: 0 }}>
        {/* <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' mx="auto" /> */}
        <Text mt={2} fontWeight="bold">
          Coco
        </Text>
        <Text mt={1} color="gray" fontSize="sm">
          Rental Start Date 01/06/2023 - Rental End Date 31/05/2024
        </Text>
        <Text mt={1} color="gray" fontSize="sm">
          Property Manager : Jane Trish
        </Text>
        <Text mt={1} color="gray" fontSize="sm">
          Contact No: +44784709578
        </Text>
      </Box>

      <Box textAlign="center">
        {/* <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' mx="auto" /> */}
        <Text mt={2} fontWeight="bold">
          Antara
        </Text>
        <Text mt={1} color="gray" fontSize="sm">
          Rental Start Date 01/06/2023 - Rental End Date 31/05/2024
        </Text>
        <Text mt={1} color="gray" fontSize="sm">
          Property Manager : John Doe
        </Text>
        <Text mt={1} color="gray" fontSize="sm">
          Contact No: +44764769578
        </Text>
      </Box>
    </Box>
  );
};

export default PropertyInfoCard;
