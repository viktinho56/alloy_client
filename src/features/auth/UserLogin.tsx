import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
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
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Spinner,
  Center,
  //Image,
  Flex,
} from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
//import { logoLight } from "../../assets";
import {
  greenColor,
  //accentColor,
  // greenColor,
  lightColor,
  linkColor,
  primaryColor,
  primaryColorLight,
  yellowColor,
} from "../../constants";
import { Authorize } from "./services/authorizationService";

import { validateInput } from "../../utils/inputValidator";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
//import { GetGeoLocation } from "../../utils/get_location";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { logo } from "../../assets";
//import UserContext from "../../context/userContext";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Username is required")
      .email("Please enter the email address in the correct format"),
    // password: yup.string().required("Password is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  })
  .required();

export default function UserLogin() {
  const navigate = useNavigate();
  let { AuthLogin, GetCurrentUser } = useAuth();
  const { setCurrentUser } = useContext(AuthContext);
  const [user, setUser] = useState<any>([]);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const handleClick = () => setPasswordVisible(!isPasswordVisible);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    console.log(response);
    setError(null);
    setLoading(true);
    const {
      response: serverResponse,
      error,
      isLoading,
    } = await Authorize(data);
    setError(error);
    setLoading(isLoading);
    setResponse(serverResponse);
    //console.log(serverResponse);
    if (!error) {
      AuthLogin(serverResponse ?? "", false);
      setCurrentUser(GetCurrentUser());
      navigate("/menu");
     
    } else {
      console.log("error");
      setError(error);
      setLoading(isLoading);
    }
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse: any) => {
      setUser(codeResponse);
      // AuthLogin(serverResponse ?? "", false);
      // setCurrentUser(GetCurrentUser());
      //GetGeoLocation();
      navigate("/admin/user-management");
    },
    onError: (error: any) => console.log("Login Failed:", error),
  });
  console.log(login);
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          //setProfile(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      p={10}
      borderRadius={12}
      h={"auto"}
      w={{ base: "100%" }}
    >
      <Center>
        <img width={120} src={logo} />
      </Center>
      <Center my={2}>
        <Heading color={yellowColor} fontSize={25}>
          Premier Food Ordering Portal
        </Heading>
      </Center>
      <Center my={4}>
        <Text fontSize={15} color={linkColor} textAlign={"center"}>
          Enter your username and password to login
        </Text>
      </Center>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <InputGroup>
          <InputLeftElement
            ml={2}
            pt={2}
            justifyContent={"center"}
            alignItems={"center"}
            pointerEvents="none"
          >
            <EmailIcon color={linkColor} />
          </InputLeftElement>
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
      <FormControl mt={2}>
        <FormLabel>Password</FormLabel>
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
      <Flex mt={3} justifyContent={"flex-end"}>
        <Text as={NavLink} to={"/auth/forgot-password"}>
          Forgot Password
        </Text>
      </Flex>
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
        borderRadius={8}
        type="submit"
      >
        {isLoading ? <Spinner /> : "Login"}
      </Button>
      <Button
        as={NavLink}
        size={"md"}
        bg={greenColor}
        w={"100%"}
        color={lightColor}
        py={6}
        fontSize={"14px"}
        fontWeight={"medium"}
        mt={5}
        borderRadius={8}
        to={"/staff"}
      >
        {"Staff Login"}
      </Button>
      <Button
        as={NavLink}
        size={"md"}
        bg={primaryColorLight}
        w={"100%"}
        color={lightColor}
        py={6}
        fontSize={"14px"}
        fontWeight={"medium"}
        mt={5}
        borderRadius={8}
        to={"/auth/register"}
      >
        {"Create an Account"}
      </Button>

      {/* <Button borderRadius={8} width={"full"} mb={2} onClick={() => login()}>
        Sign in with Google 🚀{" "}
      </Button> */}
    </Box>
  );
}

// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Text,
//   Button,
//   Checkbox,
//   Flex,
//   Spacer,
//   Spinner,
//   Alert,
//   AlertIcon,
//   AlertTitle,
//   InputGroup,
//   InputRightElement,
//   Icon,
//   Hide,
//   Center,
// } from "@chakra-ui/react";
// import { MdVisibilityOff, MdVisibility } from "react-icons/md";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Authorize, AuthLogin } from "../../services/authService";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().required("Email is required").email("Email is invalid"),
//   password: Yup.string()
//     .required("Password is required")
//     .min(6, "Password must be at least 6 characters")
//     .max(40, "Password must not exceed 40 characters"),
//   keepLogged: Yup.bool().default(true),
//   terms: Yup.bool().default(true),
// });
// // interface FormValues {
// //   email: string;
// //   password: string;
// //   keepLogged: boolean;
// //   terms: boolean;
// // }
// const UserLogin = () => {
//   const [error, setError] = useState(null);
//   const [response, setResponse] = useState(null);
//   const [isLoading, setLoading] = useState(false);
//   const [isPasswordVisible, setPasswordVisible] = useState(false);
//   const [user, setUser] = useState<any>([]);
//   //const [setProfile] = useState([]);
//   const handleClick = () => setPasswordVisible(!isPasswordVisible);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({ mode: "all", resolver: yupResolver(validationSchema) });
//   const onSubmit = handleSubmit(async (data: any) => {
//     console.log(data);
//     setError(null);
//     setLoading(true);
//     const { response, error, isLoading } = await Authorize(data);
//     setError(error);
//     setLoading(isLoading);
//     setResponse(response);
//     if (!error) {
//       const user = AuthLogin(response ? response : "", data.keepLogged);
//       window.location.href = "/";
//       console.log(user);
//       //  switch (user?.role_id) {
//       //    case 1:
//       //      window.location.href = "/";
//       //      break;

//       //    default:
//       //      break;
//       //  }
//     }
//   });
//   const ValidateInput = (input: string) => {
//     if (input.length > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   // const responseMessage = (response: any) => {
//   //   console.log(response);
//   // };
//   // const errorMessage = () => {
//   //   console.log("error has occurred");
//   // };
//   const login = useGoogleLogin({
//     onSuccess: (codeResponse: any) => setUser(codeResponse),
//     onError: (error: any) => console.log("Login Failed:", error),
//   });
//   useEffect(() => {
//     if (user) {
//       axios
//         .get(
//           `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
//           {
//             headers: {
//               Authorization: `Bearer ${user.access_token}`,
//               Accept: "application/json",
//             },
//           }
//         )
//         .then((res) => {
//           //setProfile(res.data);
//           console.log(res.data);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [user]);
//   return (
//     <Box>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Box>
//           <Text fontSize="3xl" fontWeight="bold" color="#000000">
//             Login
//           </Text>
//           <Text fontSize="sm" fontWeight="normal" color="yellow.500">
//             Please type in your login credentials to sign in
//           </Text>
//           <FormControl mt="5">
//             <Box>
//               <FormLabel color="black">Email</FormLabel>
//               <Input
//                 {...register("email")}
//                 isInvalid={ValidateInput(errors.email?.message || "")}
//                 py="6"
//                 id="email"
//                 colorScheme="red"
//                 placeholder="Enter Email Address"
//                 name="email"
//                 color="black"
//                 type="email"
//                 focusBorderColor="#074E3B"
//                 borderColor="blackAlpha.500"
//                 _hover={{ borderColor: "blackAlpha.400" }}
//                 _placeholder={{ opacity: 1, color: "gray.500" }}
//               />
//               {errors?.email && (
//                 <Text color="#FC8180">{errors.email.message}.</Text>
//               )}
//             </Box>
//             <Box mt="5">
//               <FormLabel color="black">Password</FormLabel>
//               <InputGroup size="md">
//                 <Input
//                   type={isPasswordVisible ? "text" : "password"}
//                   placeholder="Enter password"
//                   isInvalid={ValidateInput(errors.password?.message || "")}
//                   {...register("password")}
//                   id="password"
//                   name="password"
//                   color="black"
//                   borderWidth={1}
//                   py="6"
//                   borderColor="blackAlpha.500"
//                   focusBorderColor="#074E3B"
//                   _hover={{ borderColor: "blackAlpha.400" }}
//                   _placeholder={{ opacity: 1, color: "gray.500" }}
//                 />
//                 <InputRightElement pt="2" width="4.5rem" onClick={handleClick}>
//                   {isPasswordVisible ? (
//                     <Icon as={MdVisibilityOff} boxSize={6} color="gray.500" />
//                   ) : (
//                     <Icon as={MdVisibility} boxSize={6} color="gray.500" />
//                   )}
//                 </InputRightElement>
//               </InputGroup>

//               {errors?.password && (
//                 <Text color="#FC8180">{errors.password.message}.</Text>
//               )}
//             </Box>
//             <Flex mt="7">
//               {/* <NavLink
//                 style={{ color: "black", fontSize: "14px" }}
//                 to="/auth/sign-up"
//               >
//                 Sign Up
//               </NavLink> */}
//               <Checkbox
//                 {...register("keepLogged")}
//                 id="keepLogged"
//                 name="keepLogged"
//                 color="black"
//                 colorScheme="orange"
//                 borderColor="blackAlpha.500"
//                 fontSize="sm"
//                 size="lg"
//                 defaultChecked
//               >
//                 <Text color="black" fontSize="sm">
//                   Remember Me
//                 </Text>
//               </Checkbox>
//               <Spacer />
//               <NavLink
//                 style={{ color: "black", fontSize: "14px" }}
//                 to="/auth/forgot-password"
//               >
//                 Forgot Password?
//               </NavLink>
//             </Flex>
//             <Flex mt="7">
//               {/* <NavLink
//                 style={{ color: "black", fontSize: "14px" }}
//                 to="/auth/sign-up"
//               >
//                 Sign Up
//               </NavLink> */}
//               <Checkbox
//                 {...register("terms")}
//                 id="terms"
//                 name="terms"
//                 color="black"
//                 colorScheme="orange"
//                 borderColor="blackAlpha.500"
//                 fontSize="sm"
//                 size="lg"
//                 defaultChecked
//               >
//                 <Text color="black" fontSize="xs">
//                   I agree to the Terms <br /> of Use and Privacy Policy
//                 </Text>
//               </Checkbox>
//               <Spacer />
//               <NavLink
//                 style={{ color: "black", fontSize: "14px" }}
//                 to="/auth/sign-up"
//               >
//                 Not a member Sign Up
//               </NavLink>
//             </Flex>
//             <Button
//               mt={7}
//               w="100%"
//               isLoading={isSubmitting}
//               type="submit"
//               bg="#F1B357"
//               color="#000000"
//               py="6"
//             >
//               {isLoading ? <Spinner /> : "Signin"}
//             </Button>
//             <Center my={2}> OR</Center>
//             <Button width={"full"} mb={2} onClick={() => login()}>
//               Sign in with Google 🚀{" "}
//             </Button>
//             {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
//             {error && (
//               <Alert
//                 borderRadius={5}
//                 bg="red.500"
//                 opacity={100}
//                 mt="5"
//                 status="error"
//               >
//                 <AlertIcon />
//                 <AlertTitle fontWeight="normal">{error}</AlertTitle>
//               </Alert>
//             )}
//             <Hide>{response}</Hide>
//           </FormControl>
//           {/* <Box mt={5}>
//             <Flex justifyContent={"center"}>
//               <Text>OR</Text>
//             </Flex>
//             <Flex justifyContent={"center"}>
//               <Text>Sign In using your account with</Text>
//             </Flex>
//             <IconButton
//               colorScheme="red"
//               aria-label="Call Segun"
//               size="md"
//               icon={<PhoneIcon />}
//             ></IconButton>
//           </Box> */}
//         </Box>
//       </form>
//     </Box>
//   );
// };

//export default UserLogin;
