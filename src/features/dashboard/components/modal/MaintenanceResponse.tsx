import {
  Button,
  //Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { useEffect } from "react";

//import { generateCode } from "../../../../utils/random_number_generator";

export function MaintenanceResponse({ isOpen: IsOpen, code }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: IsOpen });
  console.log(isOpen);

  useEffect(() => {}, [IsOpen]);
  return (
    <>
      <Button display={"none"} onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={IsOpen} size={"xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader visibility={"hidden"}>
            Enter Verification Code
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={"center"}>
            <Text fontSize={18}>
              Your request for maintenance has been logged successfully
            </Text>
            <Text fontSize={14}>Reference Number: {code}</Text>
            <Button
              my={5}
              colorScheme="blue"
              mr={3}
              onClick={() => {
                window.location.href = "/admin/dashboard";
              }}
            >
              Back to Dashboard
            </Button>
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
