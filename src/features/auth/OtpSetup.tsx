import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);
import {
  FormControl,
  Button,
  Box,
  Heading,
  Center,
  //Image,
} from "@chakra-ui/react";

//import { logoLight } from "../../assets";
import {
  // greenColor,
  lightColor,
  primaryColor,
  yellowColor,
} from "../../constants";

import { useNavigate } from "react-router-dom";
import { generateCode } from "../../utils/random_number_generator";
import { useState } from "react";
import { SendOtp } from "./services/authorizationService";
import Notiflix from "notiflix";
//import { GetGeoLocation } from "../../utils/get_location";

//import UserContext from "../../context/userContext";

const schema = yup
  .object({
    authType: yup.string().required("Authentication Method is required"),
    // password: yup.string().required("Password is required"),
  })
  .required();

export default function OtpSetup() {
  const navigate = useNavigate();
  let [code] = useState(generateCode());
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    console.log(data);
    let email = localStorage.getItem("hassAuthenticationEmail");
    const { response, error } = await SendOtp({ email, code });
    if (!error) {
      localStorage.setItem("hassAuthenticatedUser", response ?? "");
      localStorage.setItem("hassOtp", code);
      navigate("/auth/otp");
    } else {
      Notiflix.Report.failure("Error", "An Error has occurred", "Try again");
    }
    // setError(error);
    // setLoading(isLoading);
    // setResponse(serverResponse);
    // //console.log(serverResponse);
    // if (!error) {
    //   let auth = localStorage.getItem("hassAuthentication");
    //   if (auth) {
    //     AuthLogin(serverResponse ?? "", false);
    //     setCurrentUser(GetCurrentUser());
    //     //GetGeoLocation();
    //     navigate("/admin/dashboard");
    //   } else {
    //     navigate("/auth/otp-setup");
    //   }
    // }
    // else {
    //   console.log("error");
    //   setError(error);
    //   setLoading(isLoading);
    // }
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
      <Center my={2}>
        <Heading color={yellowColor} fontSize={25}>
          Two-Factor authentication
        </Heading>
      </Center>

      <Box mt={5} p={10} bg={"white"}>
        <FormControl>
          <label htmlFor="field-rain">
            <input
              {...register("authType")}
              type="radio"
              value="email"
              id="field-rain"
              checked
              style={{ marginRight: 5 }}
            />
            Email
          </label>
          <p> Receive verification codes via email</p>
        </FormControl>
      </Box>

      <Button
        isLoading={isSubmitting}
        size={"md"}
        bg={primaryColor}
        w={"100%"}
        color={lightColor}
        py={6}
        fontSize={"14px"}
        fontWeight={"medium"}
        mt={5}
        borderRadius={30}
        type="submit"
      >
        {"Continue"}
      </Button>
    </Box>
  );
}
