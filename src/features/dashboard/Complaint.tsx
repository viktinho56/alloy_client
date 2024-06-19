import { Box, Heading } from "@chakra-ui/react";
import ComplaintForm from "./components/ComplaintForm";

const Complaint = () => {
  return (
    <Box p={5}>
      <Heading fontSize={"25px"}>Log Complaint</Heading>
      <Box m={5} p={5} bg={"white"}>
        <ComplaintForm />
      </Box>
    </Box>
  );
};

export default Complaint;
