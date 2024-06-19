import {
  Box,
  //Flex,
  FormControl,
  FormLabel,
  Heading,
  Switch,
} from "@chakra-ui/react";
//import ManageDocumentsCard from "./components/ManageDocumentsCard";

const NotificationSettings = () => {
  let emailNotification = localStorage.getItem("hassEmailNotification");
  let mobileNotification = localStorage.getItem("hassMobileNotification");
  function handleEmailNotificationChange(value: any) {
    if (value == false) {
      localStorage.removeItem("hassEmailNotification");
    } else {
      localStorage.setItem("hassEmailNotification", "hassEmailNotification");
    }
  }

  function handleMobileNotificationChange(value: any) {
    if (value == false) {
      localStorage.removeItem("hassMobileNotification");
    } else {
      localStorage.setItem("hassMobileNotification", "hassMobileNotification");
    }
  }

  return (
    <Box p={5}>
      <Heading fontSize={"25px"}>Notifications Settings</Heading>
      <Box m={2} p={10} bg={"white"}>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            Email Notification
          </FormLabel>
          <Switch
            onChange={(e) => handleEmailNotificationChange(e.target.checked)}
            defaultChecked={emailNotification ? true : false}
            // isChecked={emailNotification ? true : false}
            id="email-alerts"
          />
        </FormControl>

        <FormControl my={5} display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            Mobile Notification
          </FormLabel>
          <Switch
            onChange={(e) => handleMobileNotificationChange(e.target.checked)}
            defaultChecked={mobileNotification ? true : false}
            id="email-alerts"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default NotificationSettings;
