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
  //   Heading fontSize={20},
  Text,
  InputGroup,
  InputLeftElement,
  //   InputRightElement,
  //   Icon,
  Spinner,
  Textarea,
  SimpleGrid,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
//import { AuthLogin, Authorize } from "./services/authService";
import { useState } from "react";
import { generateCharacterCode } from "../../../utils/random_number_generator";
import Notiflix from "notiflix";
import { BiUserCircle } from "react-icons/bi";
import { SendEmail } from "../services/contactService";
import { yellowColor } from "../../../constants";

const schema = yup
  .object({
    fullName: yup.string().required("FullName is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter the email address in the correct format"),
    phone: yup.string().required("Phone is required"),
    company: yup.string().default("N/A"),
    message: yup.string().required("Message is required"),
    code: yup.string().required("Character Code is required"),
  })
  .required();

export default function ContactForm() {
  let [characterCode, setCharacterCode] = useState(generateCharacterCode());
  const [error, setError] = useState<any>(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  //const [isPasswordVisible, setPasswordVisible] = useState(false);
  // const handleClick = () => setPasswordVisible(!isPasswordVisible);
  console.log(response);
  console.log(isLoading);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    setError(null);
    setLoading(true);
    if (data.code !== characterCode) {
      setError("Character Code is Incorrect");
      setLoading(false);
    } else {
      SendEmail(data);
      // console.log(error);
      setLoading(false);
      Notiflix.Report.success(
        "Success",
        "Message Received Successfully",
        "OK",
        () => {
          window.location.reload();
        }
      );
      reset();
      setResponse(null);
      setError(null);
    }
    // const { response, error, isLoading } = await Authorize(data);
    // setError(error);
    // setLoading(isLoading);
    // setResponse(response);
    // if (!error) {
    //   const user = AuthLogin(response ? response : "", data.keepLogged);
    //   switch (user?.role_id) {
    //     case 1:
    //       window.location.href = "/admin/role-management";
    //       break;

    //     default:
    //       break;
    //   }
    // }
  };
  const validateInput = (property: any) => {
    if (property) {
      return true;
    }
    return false;
  };
  return (
    <Box
      height={"100%"}
      as={"form"}
      py={"2"}
      w={"100%"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <SimpleGrid mt={5} columns={{ base: 1, md: 2, lg: 2 }} gap={5}>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <InputGroup>
            <InputLeftElement
              pt={2}
              justifyContent={"center"}
              alignItems={"center"}
              pointerEvents="none"
            >
              <Icon ml={1} mt={1} boxSize={5} as={BiUserCircle} />
            </InputLeftElement>
            <Input
              size={"lg"}
              borderWidth={1}
              isInvalid={validateInput(errors.email?.message)}
              errorBorderColor="red.600"
              bg={"#fff"}
              _active={{ outline: "none" }}
              outline={"none"}
              _focus={{ borderWidth: 0, outlineColor: "transparent" }}
              borderColor={"#000"}
              {...register("fullName")}
              type="text"
              placeholder="Enter your FullName"
            />
          </InputGroup>
          <FormHelperText color={"red"}>
            {errors.fullName?.message}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <InputGroup>
            <InputLeftElement
              pt={2}
              justifyContent={"center"}
              alignItems={"center"}
              pointerEvents="none"
            >
              <EmailIcon color="#000" />
            </InputLeftElement>
            <Input
              size={"lg"}
              borderWidth={1}
              isInvalid={validateInput(errors.email?.message)}
              errorBorderColor="red.600"
              bg={"#fff"}
              _active={{ outline: "none" }}
              outline={"none"}
              _focus={{ borderWidth: 0, outlineColor: "transparent" }}
              borderColor={"#000"}
              {...register("email")}
              type="email"
              placeholder="Enter your email"
            />
          </InputGroup>
          <FormHelperText color={"red"}>{errors.email?.message}</FormHelperText>
        </FormControl>
      </SimpleGrid>

      <SimpleGrid mt={5} columns={{ base: 1, md: 2, lg: 2 }} gap={5}>
        <FormControl>
          <FormLabel>Telephone</FormLabel>
          <InputGroup>
            <InputLeftElement
              pt={2}
              justifyContent={"center"}
              alignItems={"center"}
              pointerEvents="none"
            >
              <PhoneIcon color="#000" />
            </InputLeftElement>
            <Input
              size={"lg"}
              borderWidth={1}
              isInvalid={validateInput(errors.phone?.message)}
              errorBorderColor="red.600"
              bg={"#fff"}
              _active={{ outline: "none" }}
              outline={"none"}
              _focus={{ borderWidth: 0, outlineColor: "transparent" }}
              borderColor={"#000"}
              {...register("phone")}
              type="tel"
              placeholder="Enter your Phone"
            />
          </InputGroup>
          <FormHelperText color={"red"}>{errors.phone?.message}</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Property Name</FormLabel>
          <InputGroup>
            {/* <InputLeftElement
              pt={2}
              justifyContent={"center"}
              alignItems={"center"}
              pointerEvents="none"
            >
              <EmailIcon color="#000" />
            </InputLeftElement> */}
            <Input
              size={"lg"}
              borderWidth={1}
              isInvalid={validateInput(errors.company?.message)}
              errorBorderColor="red.600"
              bg={"#fff"}
              _active={{ outline: "none" }}
              outline={"none"}
              _focus={{ borderWidth: 0, outlineColor: "transparent" }}
              borderColor={"#000"}
              {...register("company")}
              type="text"
              placeholder="Enter Property name"
            />
          </InputGroup>
          <FormHelperText color={"red"}>
            {errors.company?.message}
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
      <FormControl mt={2}>
        <FormLabel>Message</FormLabel>
        <InputGroup>
          <Textarea
            rows={3}
            size={"lg"}
            borderWidth={1}
            isInvalid={validateInput(errors.message?.message)}
            errorBorderColor="red.600"
            bg={"#fff"}
            _active={{ outline: "none" }}
            outline={"none"}
            _focus={{ borderWidth: 0, outlineColor: "transparent" }}
            borderColor={"#000"}
            {...register("message")}
            // type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter your Message"
          />
        </InputGroup>
        <FormHelperText color={"red"}>{errors.message?.message}</FormHelperText>
      </FormControl>
      <Flex alignItems={"center"} justifyContent={"space-between"} p={5} my={0}>
        <Text
          p={5}
          bg={"gainsboro"}
          fontSize={"xl"}
          fontStyle={"italic"}
          w={"auto"}
        >
          {characterCode}
        </Text>
        <Button onClick={() => setCharacterCode(generateCharacterCode())}>
          Reload
        </Button>
      </Flex>
      <FormControl mt={5}>
        {/* <FormLabel>Type the characters you see</FormLabel> */}
        <InputGroup>
          {/* <InputLeftElement
              pt={2}
              justifyContent={"center"}
              alignItems={"center"}
              pointerEvents="none"
            >
              <EmailIcon color="#000" />
            </InputLeftElement> */}
          <Input
            size={"lg"}
            borderWidth={1}
            isInvalid={validateInput(errors.code?.message)}
            errorBorderColor="red.600"
            bg={"#fff"}
            _active={{ outline: "none" }}
            outline={"none"}
            _focus={{ borderWidth: 0, outlineColor: "transparent" }}
            borderColor={"#000"}
            {...register("code")}
            type="text"
            placeholder="Type the characters you see"
          />
        </InputGroup>
        <FormHelperText color={"red"}>{errors.code?.message}</FormHelperText>
      </FormControl>
      {error && (
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
      )}
      <Button
        isLoading={isSubmitting}
        size={"md"}
        //bg={"#021530"}
        w={"100%"}
        py={6}
        fontSize={"14px"}
        fontWeight={"medium"}
        mt={3}
        type="submit"
        bg={yellowColor}
      >
        {isLoading ? <Spinner /> : "Submit"}
      </Button>
    </Box>
  );
}
