import {
  Button,
  Flex,
  //Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { useContext, useEffect } from "react";

import { AuthContext } from "../../../../context/AuthContext";
import { generateCode } from "../../../../utils/random_number_generator";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { FlutterwaveConfig } from "flutterwave-react-v3/dist/types";

export function ReviewModal({ isOpen: IsOpen }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: IsOpen });
  console.log(isOpen);
  // const [code] = useState<any>(generateCode());
  const { currentUser } = useContext(AuthContext);
  let amount = localStorage.getItem("hassAmount");
  const config: FlutterwaveConfig = {
    public_key: "FLWPUBK_TEST-c2459b10357846e0a84a23246a87bcb7-X",
    tx_ref: generateCode(),
    amount: Number(amount),
    currency: "NGN",
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
  useEffect(() => {}, [IsOpen]);
  return (
    <>
      <Button display={"none"} onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={IsOpen} size={"xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader visibility={"hidden"}>
           
          </ModalHeader>
          <ModalCloseButton /> */}
          <ModalBody textAlign={"center"}>
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
                Amount: {amount}
              </Text>
              <Text my={3} fontSize={18}></Text>
            </Flex>

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
              <button
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      console.log(response);
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
                }}
              >
                Payment with React hooks
              </button>
            </Flex>
          </ModalBody>

          <ModalFooter display={"none"}>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                window.location.reload();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
