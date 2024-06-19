import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
//import { MdVisibilityOff, MdVisibility } from "react-icons/md";
YupPassword(yup);
import {
  Alert,
  AlertIcon,
  AlertTitle,
  FormControl,
  Input,
  FormHelperText,
  Button,
  Box,
  Spinner,
  Center,
} from "@chakra-ui/react";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  accentColor,
  primaryColorDark,
  primaryColorLight,
  primaryColor,
  whiteColor,
} from "../../../constants";
import { validateInput } from "../../../utils/inputValidator";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter the email address in the correct format"),
  })
  .required();

export default function NewsLetterForm() {
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  console.log(setResponse);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    console.log(response, data);
    setError(null);
    setLoading(true);
    // const {
    //   response: serverResponse,
    //   error,
    //   isLoading,
    // } = await Authorize(data);
    setError(error);
    setLoading(isLoading);
    // setResponse(serverResponse);
    // console.log(serverResponse);
    if (!error) {
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb={5}>
        <Input
          w={"40vw"}
          borderRadius={30}
          size={"lg"}
          borderWidth={1}
          isInvalid={validateInput(errors.email?.message)}
          errorBorderColor="red.600"
          bg={"#fff"}
          _active={{ outline: "none" }}
          outline={"none"}
          _focus={{ borderWidth: 0, outlineColor: "transparent" }}
          borderColor={whiteColor}
          {...register("email")}
          type="email"
          placeholder="Enter your email"
        />
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
      <Center>
        <Button
          isLoading={isSubmitting}
          px={7}
          size={"md"}
          bg={accentColor}
          rounded={"full"}
          fontWeight={500}
          fontSize={16}
          color={primaryColorDark}
          type="submit"
          _hover={{
            bgGradient: `linear(to-r, ${primaryColorLight}, ${primaryColor})`,
          }}
        >
          {isLoading ? <Spinner /> : "Subscribe"}
        </Button>
      </Center>
    </Box>
  );
}
