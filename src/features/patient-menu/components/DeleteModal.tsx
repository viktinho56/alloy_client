import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import React from "react";

import Notiflix from "notiflix";
import { DeleteUserByIdApi } from "../services/userServices";

export function DeleteUserModal({ data }: any) {
  let statusText = "Delete";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = React.useRef();
  const handleClick = async () => {
    let { response, error } = await DeleteUserByIdApi(data.id);
    if (!error) {
      Notiflix.Report.success("Success", response ?? "Success", "OK", () => {
        window.location.reload();
      });
    } else {
      Notiflix.Report.failure("Error", error ?? "Error", "OK", () => {
        window.location.reload();
      });
    }
  };
  return (
    <>
      <Button
        onClick={onOpen}
        fontSize={"14px"}
        fontWeight={"medium"}
        size={"sm"}
        w={"full"}
        mt={2}
        bg={"red.200"}
        color={"red.800"}
        rounded={"md"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
      >
        {statusText}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {statusText} {data.firstName + " " + data.lastName + "'s"} Account
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? Please confirm before proceeding.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={() => handleClick()} ml={3}>
                {statusText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
