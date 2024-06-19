import { Box, Heading } from "@chakra-ui/react";
import MaintenanceForm from "./components/MaintenanceForm";

const Maintenance = () => {
  return (
    <Box p={5}>
      <Heading fontSize={"25px"}>Request Maintenance</Heading>
      <Box m={5} p={5} bg={"white"}>
        <MaintenanceForm />
      </Box>
    </Box>
  );
};

export default Maintenance;
