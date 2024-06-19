import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);
import {
  Button,
  Box,
  // Text,
  Spinner,
  // Center,
  Flex,
  // Progress,
  SimpleGrid,
  // FormControl,
  // FormHelperText,
  // FormLabel,
  // InputGroup,
  // Select,
} from "@chakra-ui/react";

import { useContext, useState } from "react";
import Notiflix from "notiflix";
import {
  //ServerUrl,
  lightColor,
  //linkColor,
  yellowColor,
} from "../../../constants";
import AppInput from "../../../components/forms/AppInput";
//import apiClient from "../../../services/api-client";
// import CustomAppSelect from "../../../components/common/CustomAppSelect";
//import AvatarEditor from "../../../components/common/AvatarEditor";

import { UpdateUserApi } from "../../users/services/userServices";
// import CustomEditAppSelect from "../../../components/common/CustomEditAppSelect";
import { AuthContext } from "../../../context/AuthContext";
import useAuth from "../../../hooks/useAuth";
//import { validateInput } from "../../../utils/inputValidator";
//import { CreateUserApi } from "../services/userServices";

const schema = yup
  .object({
    title: yup.string().notRequired(),
    userId: yup.number().required("User Id is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    address: yup.string().required("Address is required"),
    postcode: yup.string().required("Post Code is required"),
    phone: yup.string().required("Phone Number is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter the email address in the correct format"),
  })
  .required();

export default function ProfileSettings() {
  let { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  let { AuthLogin } = useAuth();
  //let url = currentUser?.avatarUrl;
  // let [codes, setCodes] = useState<any>([]);

  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  console.log(response);
  const {
    register,
    handleSubmit,
    reset,
    //setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      //title: currentUser?.title,
      userId: currentUser?.id ?? 0,
      firstName: currentUser?.firstName ?? "",
      lastName: currentUser?.lastName ?? "",
      address: currentUser?.address,
      postcode: currentUser?.postcode,
      phone: currentUser?.phone,
      email: currentUser?.email ?? "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const onSubmit = async (data: any) => {
    let {
      response: serverResponse,
      error: serverError,
      isLoading,
    } = await UpdateUserApi(data);
    setIsLoading(isLoading);
    setError(serverError);
    if (!serverError) {
      reset();
      setResponse(serverResponse);
      Notiflix.Report.success(
        "Success",
        "My personal information has been changed!",
        "OK,got  it!",
        () => {
          AuthLogin(serverResponse ?? "", false);
          window.location.reload();
        }
      );
    } else {
      setIsLoading(false);
      setError(serverError);
      Notiflix.Report.failure("Error", error ?? "An Error has Occured", "OK");
    }
  };

  return (
    <Box as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid gap={10} columns={{ base: 1, md: 2 }}>
        {/* <FormControl my={3}>
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
        </FormControl> */}
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
      </SimpleGrid>
      <AppInput
        errors={errors}
        register={register}
        property={"address"}
        label={"Address"}
      />
      <AppInput
        errors={errors}
        register={register}
        property={"postcode"}
        label={"Post Code"}
      />

      <AppInput
        errors={errors}
        register={register}
        property={"phone"}
        label={"Phone Number"}
        type={"tel"}
      />

      <Flex justifyContent={"flex-end"} gap={5}>
        <Button
          mx={0}
          isLoading={isSubmitting}
          size={"md"}
          bg={yellowColor}
          w={"auto"}
          py={6}
          fontSize={"16px"}
          fontWeight={"medium"}
          color={lightColor}
          mt={3}
          type="submit"
        >
          {isLoading ? <Spinner /> : "Save"}
        </Button>
      </Flex>
    </Box>
  );
}
