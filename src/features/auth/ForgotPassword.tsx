import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);
import {
  Alert,
  AlertIcon,
  AlertTitle,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Box,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Spinner,
  Center,
  // Image,
  Flex,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

import { useState } from "react";
//import { logo } from "../../assets";
import {
  lightColor,
  linkColor,
  primaryColor,
  yellowColor,
} from "../../constants";
//import { PasswordReset } from "./services/authorizationService";
import { validateInput } from "../../utils/inputValidator";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Notiflix from "notiflix";
import { SendResetEmailApi } from "../users/services/userServices";
//import { PasswordReset } from "./services/authorizationService";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter the email address in the correct format"),
  })
  .required();

export default function ForgotPassword() {
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    Notiflix.Loading.standard();
    setError(null);
    setLoading(true);
    const {
      response: serverResponse,
      error,
      isLoading,
    } = await SendResetEmailApi(data);
    setError(error);
    setLoading(isLoading);
    setResponse(serverResponse);
    if (!error) {
      Notiflix.Report.success(
        "Success",
        response ?? "Password Reset Link sent successfully",
        "OK"
      );
    } else {
      //Notiflix.Report.failure("Error", error ?? "", "OK");
    }
    Notiflix.Loading.remove();
  };

  return (
    <Box
      as="form"
      p={10}
      //shadow={"2xl"}
      borderRadius={12}
      h={"auto"}
      w={{ base: "100%" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Center my={4}>
        <Heading color={yellowColor} fontSize={25}>
          Forgot Password
        </Heading>
      </Center>

      <FormControl>
        <FormLabel>Email address</FormLabel>
        <InputGroup>
          <InputLeftElement
            ml={2}
            pt={2}
            justifyContent={"center"}
            alignItems={"center"}
            pointerEvents="none"
          >
            <EmailIcon color={linkColor} />
          </InputLeftElement>
          <Input
            borderRadius={5}
            size={"lg"}
            borderWidth={1}
            isInvalid={validateInput(errors.email?.message)}
            errorBorderColor="red.600"
            bg={"#fff"}
            _active={{ outline: "none" }}
            outline={"none"}
            _focus={{ borderWidth: 0, outlineColor: "transparent" }}
            borderColor={linkColor}
            {...register("email")}
            type="email"
            placeholder="Enter your email"
          />
        </InputGroup>
        <FormHelperText color={"red"}>{errors.email?.message}</FormHelperText>
      </FormControl>

      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Alert
            borderRadius={5}
            bg="red.500"
            opacity={100}
            mt="5"
            status="error"
          >
            <AlertIcon />
            <AlertTitle fontWeight="normal">{error}</AlertTitle>
          </Alert>
        </motion.div>
      )}
      <Flex justifyContent={"flex-end"}>
        <Text fontWeight={500} as={NavLink} to={"/"} color={yellowColor}>
          Login
        </Text>
      </Flex>
      <Button
        isLoading={isSubmitting}
        size={"md"}
        bg={primaryColor}
        w={"100%"}
        color={lightColor}
        py={6}
        fontSize={"14px"}
        fontWeight={"medium"}
        mt={10}
        borderRadius={5}
        type="submit"
      >
        {isLoading ? <Spinner /> : "Reset Password"}
      </Button>
    </Box>
  );
}
