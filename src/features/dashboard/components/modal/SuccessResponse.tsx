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

import { useEffect, useState } from "react";

import { generateCode } from "../../../../utils/random_number_generator";

export function SuccessResponse({ isOpen: IsOpen }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: IsOpen });
  console.log(isOpen);
  const [code] = useState<any>(generateCode());
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
            <Text fontSize={18}>Transaction Successful</Text>
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
