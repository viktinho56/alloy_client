import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
//import { MdVisibilityOff, MdVisibility } from "react-icons/md";
YupPassword(yup);
import {
  //   Alert,
  //   AlertIcon,
  //   AlertTitle,
  //   FormControl,
  //   FormLabel,
  //   Input,
  //   FormHelperText,
  Button,
  Box,
  Heading,
  //Text,
  //   InputGroup,
  //   InputLeftElement,
  //   InputRightElement,
  //   Icon,
  Spinner,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  // Icon,
  // Input,
  InputGroup,
  // InputLeftElement,
  // InputRightElement,
  Select,
  //Image,
} from "@chakra-ui/react";

//import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useState } from "react";
//import { logoLight } from "../../assets";

//import { validateInput } from "../../utils/inputValidator";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { generateCode } from "../../../utils/random_number_generator";
import Notiflix from "notiflix";
import AppInput from "../../../components/forms/AppInput";
import {
  yellowColor,
  linkColor,
  primaryColor,
  lightColor,
  Properties,
} from "../../../constants";
import { validateInput } from "../../../utils/inputValidator";
import { CreateBookingApi } from "../services/mainService";
//import { CreateAccount } from "../../auth/services/authorizationService";

//import UserContext from "../../context/userContext";
const emailRegex = new RegExp(
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const schema = yup
  .object({
    appDate: yup.string().required("Date is required"),
    appTime: yup.string().required("Time is required"),
    title: yup.string().required("Title is required"),
    firstName: yup.string().required("FirstName is required"),
    lastName: yup.string().required("LastName is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter the email address in the correct format")
      .matches(emailRegex, "Invalid email"),
    phoneNo: yup.string().required("Phone Number is required"),
    // password: yup
    //   .string()
    //   .required("Password is required")
    //   .min(6, "Password must be at least 6 characters")
    //   .max(40, "Password must not exceed 40 characters"),
    //address: yup.string().required("Address is required"),
    // postcode: yup.string().required("Post Code is required"),
    property: yup.string().required("Property is required"),
  })
  .required();

export default function BookViewingForm() {
  //const navigate = useNavigate();

  //const [error, setError] = useState(null);
  //const [response, setResponse] = useState(null);

  const [isLoading, setLoading] = useState(false);

  const d = new Date(); // today, now

  let curr = d.toISOString().slice(0, 10);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  console.log(errors);
  const onSubmit = async (data: any) => {
    let { error, isLoading } = await CreateBookingApi(data);
    setLoading(isLoading);
    console.log(error);
    if (!error) {
      reset();
      Notiflix.Report.success(
        "Booking confirmation",
        "Your booking has been confirmed",
        "OK"
      );
    } else {
      Notiflix.Report.failure("Error", error ?? "Error", "OK");
    }
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
          Book Viewing
        </Heading>
      </Center>

      <FormControl my={3}>
        <FormLabel>Title</FormLabel>
        <InputGroup>
          <Select
            borderRadius={10}
            size={"md"}
            borderWidth={1}
            isInvalid={validateInput(errors.title?.message)}
            errorBorderColor="red.600"
            bg={"#fff"}
            _active={{ outline: "none" }}
            outline={"none"}
            _focus={{ borderWidth: 0, outlineColor: "transparent" }}
            borderColor={linkColor}
            {...register("title")}
            placeholder="Select your title"
          >
            <option value={"Mr"}>Mr</option>
            <option value={"Mr"}>Miss</option>
            <option value={"Mr"}>Ms</option>
            <option value={"Mr"}>Mrs</option>
            <option value={"Mr"}>Dr</option>
          </Select>
        </InputGroup>
        <FormHelperText color={"red"}>{errors.title?.message}</FormHelperText>
      </FormControl>
      <AppInput
        errors={errors}
        register={register}
        property={"firstName"}
        label={"First Name"}
      />
      <AppInput
        errors={errors}
        register={register}
        property={"lastName"}
        label={"Last Name"}
      />
      <AppInput
        errors={errors}
        register={register}
        property={"email"}
        label={"Email"}
      />
      <AppInput
        errors={errors}
        register={register}
        property={"phoneNo"}
        label={"Phone Number"}
      />
      <FormControl my={3}>
        <FormLabel>Property</FormLabel>
        <InputGroup>
          <Select
            borderRadius={10}
            size={"md"}
            borderWidth={1}
            w={"full"}
            isInvalid={validateInput(errors.property?.message)}
            errorBorderColor="red.600"
            bg={"#fff"}
            _active={{ outline: "none" }}
            outline={"none"}
            _focus={{ borderWidth: 0, outlineColor: "transparent" }}
            borderColor={linkColor}
            {...register("property")}
            placeholder="Select your Property"
          >
            {Properties &&
              Properties.map((p, i) => (
                <option key={i} value={p.name}>
                  {p.name}
                </option>
              ))}
          </Select>
        </InputGroup>
        <FormHelperText color={"red"}>
          {errors.property?.message}
        </FormHelperText>
      </FormControl>
      <AppInput
        errors={errors}
        register={register}
        type="date"
        min={curr}
        property={"appDate"}
        label={"Date"}
      />
      <AppInput
        errors={errors}
        register={register}
        type="time"
        min={curr}
        property={"appTime"}
        label={"Time"}
      />
      {/* <FormControl my={2}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <InputLeftElement
            ml={2}
            pt={0}
            justifyContent={"center"}
            alignItems={"center"}
            pointerEvents="none"
          >
            <LockIcon color={linkColor} />
          </InputLeftElement>
          <Input
            borderRadius={10}
            size={"md"}
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
          <InputRightElement pt="0" width="4.5rem" onClick={handleClick}>
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
      </FormControl> */}

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
        borderRadius={30}
        type="submit"
      >
        {isLoading ? <Spinner /> : "Submit"}
      </Button>
    </Box>
  );
}
