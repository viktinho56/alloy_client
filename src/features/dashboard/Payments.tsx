import { Box, Heading, Text } from "@chakra-ui/react";
//import MaintenanceForm from "./components/MaintenanceForm";
import PaymentForm from "./components/PaymentForm";

const Payments = () => {
  return (
    <Box p={5}>
      <Heading fontSize={"25px"}>Payment Options</Heading>
      <Box m={5} p={5} bg={"white"}>
        <Box textAlign="right">
          <Text
            as="a"
            fontWeight={"bold"}
            _hover={{ color: 'blue' }}
            href={"/admin/transactions"}>
            Transaction History
          </Text>
        </Box>

        <PaymentForm />
      </Box>
    </Box>
  );
};

export default Payments;
