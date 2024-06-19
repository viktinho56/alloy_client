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
  //Input,
  FormHelperText,
  Button,
  Box,
  //   Heading fontSize={20},
  Text,
  InputGroup,
  //   InputLeftElement,
  //   InputRightElement,
  //   Icon,
  Spinner,
  //Textarea,
  //SimpleGrid,
  Flex,
  Select,
  //Icon,
} from "@chakra-ui/react";
//import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
//import { AuthLogin, Authorize } from "./services/authService";
import { useContext, useState } from "react";
//import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
//import { FlutterwaveConfig } from "flutterwave-react-v3/dist/types";
//import { generateCode } from "../../../utils/random_number_generator";
//import Notiflix from "notiflix";
//import { BiUserCircle } from "react-icons/bi";
//import { SendEmail } from "../services/contactService";
import { Fees, Properties, linkColor, yellowColor } from "../../../constants";
import AppInput from "../../../components/forms/AppInput";
//import AppTextArea from "../../../components/forms/AppTextArea";
//import { ComplaintResponse } from "./modal/ComplaintResponse";
//import Notiflix from "notiflix";
import { AuthContext } from "../../../context/AuthContext";
//import { generateCode } from "../../../utils/random_number_generator";
import { ReviewModal } from "./modal/ReviewModal";
import AppTextArea from "../../../components/forms/AppTextArea";
//import FlutterPayment from "./FlutterPayment";
//import FlutterPayment from "./FlutterPayment";

const schema = yup
  .object({
    property: yup.string().required("Property is required"),
    amount: yup.string().required("Amount is required"),
    transactionType: yup.string().required("Transaction Type  is required"),
    desc: yup.string().required("Description  is required"),
  })
  .required();

export default function PaymentForm() {
  const [error, setError] = useState<any>(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [amount, setAmount] = useState(0);
  const [isResponseVisible, setResponseVisible] = useState(false);
  // const handleClick = () => setPasswordVisible(!isPasswordVisible);
  console.log(response, amount, currentUser);
  console.log(isLoading);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    setAmount(data.amount);
    setError(null);
    setLoading(true);
    setResponseVisible(true);
    localStorage.setItem("hassAmount", data.amount);
    localStorage.setItem("hassTransType", data.transactionType);
    window.location.href = "/admin/payment-confirmation";
    // SendEmail(data);
    console.log(data);
    setLoading(false);

    reset();
    setResponse(null);
    setError(null);
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
      <ReviewModal isOpen={isResponseVisible} />
      <FormControl my={3}>
        <FormLabel>Payment Type</FormLabel>
        <InputGroup>
          <Select
            //onChange={(e) => handleChange(e)}
            borderRadius={10}
            size={"md"}
            w={"auto"}
            isInvalid={validateInput(errors.transactionType?.message)}
            errorBorderColor="red.600"
            bg={"#fff"}
            _active={{ outline: "none" }}
            outline={"none"}
            _focus={{ borderWidth: 0, outlineColor: "transparent" }}
            borderColor={linkColor}
            {...register("transactionType")}
          >
            {Fees &&
              Fees.map((p, i) => (
                <option key={i} value={p.name}>
                  {p.name}
                </option>
              ))}
          </Select>
        </InputGroup>
        <FormHelperText color={"red"}>
          {errors.transactionType?.message}
        </FormHelperText>
      </FormControl>

      <FormControl my={3}>
        <FormLabel>Property</FormLabel>
        <InputGroup>
          <Select
            borderRadius={10}
            size={"md"}
            borderWidth={1}
            w={"auto"}
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
      <Box w={"200px"}>
        <AppInput
          errors={errors}
          register={register}
          property={"amount"}
          label={"Enter Amount"}
        />
      </Box>
      <Box>
        <AppTextArea
          errors={errors}
          register={register}
          property={"desc"}
          label={"Enter Description"}
        />
      </Box>

      {/* <FormControl mt={2}>
        <FormLabel>Complaint</FormLabel>
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
      </FormControl> */}

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
      <Text mb={5}>Please select a payment method:</Text>
      <Flex justifyContent={"space-around"}>
        <Button
          size={"md"}
          py={6}
          fontSize={"14px"}
          fontWeight={"medium"}
          mt={3}
          type="button"
          bg={yellowColor}
        >
          {"Bank Transfer"}
        </Button>
        <Button
          isLoading={isSubmitting}
          size={"md"}
          //bg={"#021530"}
          //   w={"100%"}
          py={6}
          fontSize={"14px"}
          fontWeight={"medium"}
          mt={3}
          type="submit"
          bg={yellowColor}
        >
          {isLoading ? <Spinner /> : "Card Payment"}
        </Button>
        {/* <FlutterPayment amount={300} /> */}
        <Button
          size={"md"}
          py={6}
          fontSize={"14px"}
          fontWeight={"medium"}
          mt={3}
          type="button"
          bg={yellowColor}
        >
          {"Google Pay"}
        </Button>
      </Flex>
    </Box>
  );
}
