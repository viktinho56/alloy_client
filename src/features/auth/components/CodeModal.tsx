import {
  Button,
  Input,
  Modal,
  ModalBody,
  // ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { accentColor, linkColor } from "../../../constants";
import { useEffect, useState } from "react";

export function CodeModal({ isOpen: IsOpen, handleCodeSubmit }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: IsOpen });
  console.log(isOpen);
  const [code, setCode] = useState<any>(null);
  useEffect(() => {}, [IsOpen]);
  return (
    <>
      <Button display={"none"} onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={IsOpen} size={"xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Verification Code</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Text fontSize={14}>
              Enter your unique verification code that was sent to your email to
              proceed with the registration
            </Text>
            <Input
              mt={5}
              borderRadius={10}
              size={"lg"}
              onChange={(e) => setCode(e.currentTarget.value)}
              borderWidth={1}
              errorBorderColor="red.600"
              bg={"#fff"}
              _active={{ outline: "none" }}
              outline={"none"}
              _focus={{ borderWidth: 0, outlineColor: "transparent" }}
              borderColor={linkColor}
              type="number"
              placeholder="Verification Code"
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => window.location.reload()}
            >
              Close
            </Button>
            <Button
              backgroundColor={accentColor}
              onClick={() => handleCodeSubmit(code)}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
