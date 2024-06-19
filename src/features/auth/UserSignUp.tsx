"use client";

import { useContext, useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  //GridItem,
  FormLabel,
  Input,
  //Text,
  //Select,
  //SimpleGrid,
  //InputLeftAddon,
  InputGroup,
  //Textarea,
  FormHelperText,
  InputRightElement,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//import YupPassword from "yup-password";
///import { useToast } from "@chakra-ui/react";
import {
  lightColor,
  linkColor,
  primaryColorLight,
  yellowColor,
} from "../../constants";
import { logo } from "../../assets";
import { validateInput } from "../../utils/inputValidator";
import { CreateAccount, VerifyAccount } from "./services/authorizationService";
import Notiflix from "notiflix";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
const schema = yup
  .object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phoneNo: yup.string().required("PhoneNo is required"),
    hospitalId: yup.string().required("HospitalId is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter the email address in the correct format"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  })
  .required();

export default function UserSignUp() {
  //const toast = useToast();
  let { AuthLogin, GetCurrentUser } = useAuth();
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  console.log(errors, error, response);
  const Form1 = () => {
    return (
      <>
        <Heading
          w="100%"
          fontSize={18}
          textAlign={"center"}
          //fontWeight="normal"
          mb="2%"
        >
          Verify your Identity
        </Heading>
        <Flex>
          <FormControl mr={"5%"}>
            <FormLabel>First Name</FormLabel>
            <InputGroup>
              <Input
                borderRadius={8}
                size={"lg"}
                borderWidth={1}
                isInvalid={validateInput(errors.firstName?.message)}
                errorBorderColor="red.600"
                bg={"#fff"}
                _active={{ outline: "none" }}
                outline={"none"}
                _focus={{ borderWidth: 0, outlineColor: "transparent" }}
                borderColor={linkColor}
                {...register("firstName")}
                type="text"
                placeholder="Enter your firstName"
              />
            </InputGroup>
            <FormHelperText color={"red"}>
              {errors.firstName?.message}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <InputGroup>
              <Input
                borderRadius={8}
                size={"lg"}
                borderWidth={1}
                isInvalid={validateInput(errors.lastName?.message)}
                errorBorderColor="red.600"
                bg={"#fff"}
                _active={{ outline: "none" }}
                outline={"none"}
                _focus={{ borderWidth: 0, outlineColor: "transparent" }}
                borderColor={linkColor}
                {...register("lastName")}
                type="text"
                placeholder="Enter your lastName"
              />
            </InputGroup>
            <FormHelperText color={"red"}>
              {errors.lastName?.message}
            </FormHelperText>
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input
              borderRadius={8}
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
        <FormControl>
          <FormLabel>Phone No</FormLabel>
          <InputGroup>
            <Input
              borderRadius={8}
              size={"lg"}
              borderWidth={1}
              isInvalid={validateInput(errors.phoneNo?.message)}
              errorBorderColor="red.600"
              bg={"#fff"}
              _active={{ outline: "none" }}
              outline={"none"}
              _focus={{ borderWidth: 0, outlineColor: "transparent" }}
              borderColor={linkColor}
              {...register("phoneNo")}
              type="text"
              placeholder="Enter your Phone No"
            />
          </InputGroup>
          <FormHelperText color={"red"}>
            {errors.phoneNo?.message}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Medical Record Number (MRN)</FormLabel>
          <InputGroup>
            <Input
              borderRadius={8}
              size={"lg"}
              borderWidth={1}
              isInvalid={validateInput(errors.hospitalId?.message)}
              errorBorderColor="red.600"
              bg={"#fff"}
              _active={{ outline: "none" }}
              outline={"none"}
              _focus={{ borderWidth: 0, outlineColor: "transparent" }}
              borderColor={linkColor}
              {...register("hospitalId")}
              type="text"
              placeholder="Enter your hospitalID"
            />
          </InputGroup>
          <FormHelperText color={"red"}>{errors.email?.message}</FormHelperText>
        </FormControl>
      </>
    );
  };

  const Form2 = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    return (
      <>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              borderRadius={8}
              size={"lg"}
              borderWidth={1}
              isInvalid={validateInput(errors.hospitalId?.message)}
              errorBorderColor="red.600"
              bg={"#fff"}
              _active={{ outline: "none" }}
              outline={"none"}
              _focus={{ borderWidth: 0, outlineColor: "transparent" }}
              borderColor={linkColor}
              {...register("password")}
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" mt={2} size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText color={"red"}>
            {errors.password?.message}
          </FormHelperText>
        </FormControl>
      </>
    );
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    setError(null);
    setLoading(true);
    const {
      response: serverResponse,
      error,
      isLoading,
    } = await VerifyAccount(data);
    setError(error);
    setLoading(isLoading);
    setResponse(serverResponse);
    //console.log(serverResponse);
    if (!error) {
      const { error: serverError } = await CreateAccount(data);
      if (!serverError) {
        Notiflix.Report.success(
          "Registration Successful.",
          "Please click below to Login.",
          "Login"
          // () => {
          //   navigate("/");
          // }
        );
        AuthLogin(serverResponse ?? "", false);
        setCurrentUser(GetCurrentUser());
        //GetGeoLocation();
        navigate("/admin/dashboard");
      } else {
        Notiflix.Report.failure(
          "Error",
          serverError ?? "An Error has Occurred",
          "Try Again"
        );
      }
    } else {
      setError(error);
      setLoading(isLoading);
      Notiflix.Report.failure(
        "Error",
        error ?? "An Error has Occurred",
        "Try Again"
      );
    }
  };
  return (
    <>
      <Box
        background={lightColor}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={10}
        borderRadius={12}
        h={"auto"}
        w={{ base: "100%" }}
        m="10px auto"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        <Center>
          <img width={120} src={logo} />
        </Center>
        <Center my={2}>
          <Heading color={yellowColor} fontSize={25}>
            Premier Food Ordering Portal
          </Heading>
        </Center>

        {step === 1 ? <Form1 /> : <Form2 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 50);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                isLoading={isSubmitting}
                size={"md"}
                bg={primaryColorLight}
                //w={"100%"}
                color={lightColor}
                //py={6}
                fontSize={"14px"}
                fontWeight={"medium"}
                //mt={5}
                borderRadius={8}
                type="submit"
              >
                {isLoading ? <Spinner /> : "Register"}
              </Button>
            ) : // <Button
            //   w="7rem"
            //   type="submit"
            //   colorScheme="red"
            //   variant="solid"
            //   // onClick={() => {
            //   //   toast({
            //   //     title: "Account created.",
            //   //     description: "We've created your account for you.",
            //   //     status: "success",
            //   //     duration: 3000,
            //   //     isClosable: true,
            //   //   });
            //   // }}
            // >
            //   Submit
            // </Button>
            null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
