import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import theme from "./customTheme.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
//import { UserProvider } from "./context/userProvider.tsx";
//import { GetCurrentUser } from "./services/authService.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <ChakraProvider theme={theme}>
  //     <App />
  //   </ChakraProvider>
  // </React.StrictMode>
  <GoogleOAuthProvider clientId="643182585421-kvrvktqjb1uhtvgeo3nruun9ekk9lr1b.apps.googleusercontent.com">
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
