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
  //Text,
  InputGroup,
  InputLeftElement,
  Spinner,
  Center,
  // Image,
  // Flex,
  Icon,
  InputRightElement,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

import { useState } from "react";

import {
  lightColor,
  linkColor,
  primaryColor,
  yellowColor,
} from "../../constants";
//import { UpdatePassword } from "./services/authorizationService";

import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Notiflix from "notiflix";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
//import { logo } from "../../assets";
import { UpdateUserPasswordByEmailApi } from "../users/services/userServices";

const schema = yup
  .object({
    // email: yup.string().default("N/A"),
    password: yup
      .string()
      .required("Password is required")
      .min(
        8,
        "Minimum 8 characters long, Contains at least one uppercase letter, one lowercase letter, one number, & one special character"
      )
      .minLowercase(1, "password must contain at least 1 lower case letter")
      .minUppercase(1, "password must contain at least 1 upper case letter")
      .minSymbols(1, "password must contain at least one special character")
      .minNumbers(1, "password must contain at least 1 number"),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref("password"), undefined],
        "THE PASSWORDS DO NOT MATCH, PLEASE TRY AGAIN"
      ),
    // .minSymbols(1, "password must contain at least 1 special character"),
  })
  .required();

export default function ResetPassword() {
  const { email: passedEmail } = useParams();
  let email = atob(passedEmail ? passedEmail : "");
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const handleClick = () => setPasswordVisible(!isPasswordVisible);
  console.log(response);
  console.log(isLoading);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    data.email = email;
    data.userType = "personal";
    setError(null);
    setLoading(true);
    const { response, error, isLoading } = await UpdateUserPasswordByEmailApi(
      data
    );
    setError(error);
    setLoading(isLoading);
    setResponse(response);
    if (!error) {
      Notiflix.Report.success("Success", "Password Changed Successfully", "OK");
    } else {
      Notiflix.Report.failure("Error", response ? response : "", "OK");
    }
    Notiflix.Loading.remove();
  };
  const validateInput = (property: any) => {
    if (property) {
      return true;
    }
    return false;
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
          Change Password
        </Heading>
      </Center>

      <FormControl mt={2}>
        <FormLabel>New Password</FormLabel>
        <InputGroup>
          <InputLeftElement
            ml={2}
            pt={2}
            justifyContent={"center"}
            alignItems={"center"}
            pointerEvents="none"
          >
            <LockIcon color={linkColor} />
          </InputLeftElement>
          <Input
            borderRadius={5}
            size={"lg"}
            borderWidth={1}
            isInvalid={validateInput(errors.password?.message)}
            errorBorderColor="red.600"
            bg={"#fff"}
            _active={{ outline: "none" }}
            outline={"none"}
            _focus={{ borderWidth: 0, outlineColor: "transparent" }}
            borderColor={linkColor}
            {...register("password")}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter your password"
          />
          <InputRightElement pt="2" width="4.5rem" onClick={handleClick}>
            {isPasswordVisible ? (
              <Icon as={MdVisibilityOff} boxSize={6} color="gray.500" />
            ) : (
              <Icon as={MdVisibility} boxSize={6} color="gray.500" />
            )}
          </InputRightElement>
        </InputGroup>
        <FormHelperText color={"red"}>
          {errors.password?.message}
        </FormHelperText>
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <InputLeftElement
            ml={2}
            pt={2}
            justifyContent={"center"}
            alignItems={"center"}
            pointerEvents="none"
          >
            <LockIcon color={linkColor} />
          </InputLeftElement>
          <Input
            size={"lg"}
            borderWidth={1}
            isInvalid={validateInput(errors.passwordConfirmation?.message)}
            errorBorderColor="red.600"
            bg={"#fff"}
            _active={{ outline: "none" }}
            outline={"none"}
            _focus={{ borderWidth: 0, outlineColor: "transparent" }}
            borderColor={"#000"}
            {...register("passwordConfirmation")}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Confirm your password"
          />
          <InputRightElement pt="2" width="4.5rem" onClick={handleClick}>
            {isPasswordVisible ? (
              <Icon as={MdVisibilityOff} boxSize={6} color="gray.500" />
            ) : (
              <Icon as={MdVisibility} boxSize={6} color="gray.500" />
            )}
          </InputRightElement>
        </InputGroup>
        <FormHelperText color={"red"}>
          {errors.password?.message}
        </FormHelperText>
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
        {isLoading ? <Spinner /> : "Submit"}
      </Button>
    </Box>
  );
}
