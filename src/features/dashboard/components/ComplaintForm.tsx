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
  //   Text,
  InputGroup,
  //   InputLeftElement,
  //   InputRightElement,
  //   Icon,
  Spinner,
  //Textarea,
  SimpleGrid,
  Flex,
  Select,
  //Icon,
} from "@chakra-ui/react";
//import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
//import { AuthLogin, Authorize } from "./services/authService";
import { useState } from "react";
//import { generateCode } from "../../../utils/random_number_generator";
//import Notiflix from "notiflix";
//import { BiUserCircle } from "react-icons/bi";
//import { SendEmail } from "../services/contactService";
import { Properties, linkColor, yellowColor } from "../../../constants";
import AppInput from "../../../components/forms/AppInput";
import AppTextArea from "../../../components/forms/AppTextArea";
import { ComplaintResponse } from "./modal/ComplaintResponse";

const schema = yup
  .object({
    property: yup.string().required("Property is required"),
    fullName: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter the email address in the correct format"),
    eventDate: yup.string().required("Event Date is required"),
    eventTime: yup.string().required("Event Time is required"),
    message: yup.string().required("Complaint is required"),
  })
  .required();

export default function ComplaintForm() {
  const [error, setError] = useState<any>(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // const [isLoading, setLoading] = useState(false);
  const [isResponseVisible, setResponseVisible] = useState(false);
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

    // SendEmail(data);
    console.log(data);
    setLoading(false);
    setResponseVisible(true);
    //   Notiflix.Report.success(
    //     "Success",
    //     "Message Received Successfully",
    //     "OK",
    //     () => {
    //       window.location.reload();
    //     }
    //   );
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
      <ComplaintResponse isOpen={isResponseVisible} />
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
      <SimpleGrid mt={5} columns={{ base: 1, md: 2, lg: 2 }} gap={5}>
        <AppInput
          errors={errors}
          register={register}
          property={"fullName"}
          label={"Your Name"}
        />
        <AppInput
          errors={errors}
          register={register}
          property={"email"}
          label={"Email"}
        />
      </SimpleGrid>

      <SimpleGrid mt={5} columns={{ base: 1, md: 2, lg: 2 }} gap={5}>
        <AppInput
          errors={errors}
          register={register}
          property={"eventDate"}
          label={"Event Occurred"}
          type="date"
        />
        <AppInput
          errors={errors}
          register={register}
          property={"eventTime"}
          label={"Time"}
          type="time"
        />
      </SimpleGrid>
      <AppTextArea
        errors={errors}
        register={register}
        property={"message"}
        label={"Complaint"}
      />
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
      <Flex justifyContent={"space-between"}>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
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
          {isLoading ? <Spinner /> : "Submit"}
        </Button>
      </Flex>
    </Box>
  );
}
