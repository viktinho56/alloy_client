import { Box, Heading, } from "@chakra-ui/react";
import PropertyInfoCard from "./components/PropertyInfoCard";

const PropertyInfo = () => {
    return (
        <Box p={5}>
            <Heading fontSize={"25px"}>Your Property Information</Heading>
            <Box m={5} p={5} bg={"white"}>
                <PropertyInfoCard />
            </Box>
        </Box>
    );
};

export default PropertyInfo;
