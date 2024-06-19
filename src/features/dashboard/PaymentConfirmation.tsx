import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
//import MaintenanceForm from "./components/MaintenanceForm";

import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { FlutterwaveConfig } from "flutterwave-react-v3/dist/types";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { generateCode } from "../../utils/random_number_generator";
import { SuccessResponse } from "./components/modal/SuccessResponse";
import { CreateTransactionApi } from "./services/maintenanceService";
const PaymentConfirmation = () => {
  const { currentUser } = useContext(AuthContext);
  const [isResponseVisible, setResponseVisible] = useState(false);
  let amount = localStorage.getItem("hassAmount");
  let transactionsType = localStorage.getItem("hassTransType");
  const config: FlutterwaveConfig = {
    public_key: "FLWPUBK_TEST-c2459b10357846e0a84a23246a87bcb7-X",
    tx_ref: generateCode(),
    amount: Number(amount),
    currency: "KES",
    payment_options: "mpesa,card,mobilemoney,ussd",
    customer: {
      email: currentUser?.email ?? "",
      phone_number: currentUser?.phoneNo ?? "",
      name: currentUser?.firstName ?? "",
    },
    customizations: {
      title: "Hass Consult",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <Box p={5}>
      <SuccessResponse isOpen={isResponseVisible} />
      <Heading fontSize={"25px"}>Confirm Payment Details</Heading>
      <Box m={5} p={5} bg={"white"}>
        <Text my={3} fontSize={18}>
          Submit if the details below are correct:
        </Text>
        <Flex my={2} justifyContent={"space-between"}>
          <Text my={3} fontSize={18}>
            Name :
          </Text>
          <Text my={3} fontSize={18}>
            {currentUser?.firstName + " " + currentUser?.lastName}
          </Text>
        </Flex>

        <Flex my={2} justifyContent={"space-between"}>
          <Text my={3} fontSize={18}>
            Address:
          </Text>
          <Text my={3} fontSize={18}>
            {currentUser?.address}
          </Text>
        </Flex>

        <Flex my={2} justifyContent={"space-between"}>
          <Text my={3} fontSize={18}>
            Email:
          </Text>
          <Text my={3} fontSize={18}>
            {currentUser?.email}
          </Text>
        </Flex>
        <Flex my={2} justifyContent={"space-between"}>
          <Text my={3} fontSize={18}>
            Amount: &pound;{amount}
          </Text>
          <Text my={3} fontSize={18}></Text>
        </Flex>
        <Text textAlign={"center"} my={3} fontSize={18}>
          Receipt will be sent to the email address once the payment is
          completed.
        </Text>
        <Flex justifyContent={"space-between"}>
          <Button
            my={5}
            colorScheme="blue"
            mr={3}
            onClick={() => {
              window.location.href = "/admin/payments";
            }}
          >
            Edit
          </Button>
          <Button
            my={5}
            color={"white"}
            bg={"green"}
            onClick={() => {
              handleFlutterPayment({
                callback: async (response) => {
                  console.log(response);

                  let { response: res, error } = await CreateTransactionApi({
                    email: currentUser?.email,
                    amount,
                    transactionsType,
                  });
                  if (!error) {
                    setResponseVisible(true);
                  }
                  console.log(res, error);
                  closePaymentModal(); // this will close the modal programmatically
                },
                onClose: () => {},
              });
            }}
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default PaymentConfirmation;
