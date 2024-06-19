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
  //Image,
  //Flex,
  Icon,
  InputRightElement,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

import { useContext, useState } from "react";

import {
  // greenColor,
  lightColor,
  linkColor,
  primaryColor,
  yellowColor,
} from "../../constants";
//import { UpdatePassword } from "./services/authorizationService";

import { motion } from "framer-motion";
//import { NavLink } from "react-router-dom";
import Notiflix from "notiflix";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
//import { logo } from "../../assets";
import { AuthContext } from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// import { logo } from "../../assets";
import { UpdateValidateUserPasswordApi } from "../users/services/userServices";

const schema = yup
  .object({
    currentPassword: yup.string().required("Current Password is Required"),
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

export default function ChangePassword() {
  //const navigate = useNavigate();
  let { AuthLogout } = useAuth();
  console.log(AuthLogout);
  let { currentUser } = useContext(AuthContext);

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
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    if (data.currentPassword == data.password) {
      Notiflix.Report.failure(
        "Error",
        "That password ha already been used - please create an alternative",
        "OK"
      );
    } else {
      data.userId = currentUser?.id;
      setError(null);
      setLoading(true);
      const { response, error, isLoading } =
        await UpdateValidateUserPasswordApi(data);
      setError(error);
      setLoading(isLoading);
      setResponse(response);
      if (!error) {
        Notiflix.Report.success(
          "Success",
          "password has been changed successfully.",
          "OK"
        );
        reset();
        //AuthLogout();
        //AuthLogin(response ?? "", false);
        //setCurrentUser(GetCurrentUser());
        //console.log(currentUser);
        //GetGeoLocation();
        //navigate("/admin/dashboard");
      } else {
        Notiflix.Report.failure("Error", error ? error : "", "OK");
      }
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
        <FormLabel>Current Password</FormLabel>
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
            isInvalid={validateInput(errors.currentPassword?.message)}
            errorBorderColor="red.600"
            bg={"#fff"}
            _active={{ outline: "none" }}
            outline={"none"}
            _focus={{ borderWidth: 0, outlineColor: "transparent" }}
            borderColor={linkColor}
            {...register("currentPassword")}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter your Current Password"
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
          {errors.currentPassword?.message}
        </FormHelperText>
      </FormControl>
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
          {errors.passwordConfirmation?.message}
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
      {/* <Flex justifyContent={"flex-end"}>
        <Text fontWeight={500} as={NavLink} to={"/"} color={yellowColor}>
          Login
        </Text>
      </Flex> */}
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
        {isLoading ? <Spinner /> : "Save"}
      </Button>
    </Box>
  );
}
