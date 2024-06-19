// import MainLayout from "../layouts/MainLayout";

// import { IndexHero } from "../features/hero";
import CustomLayout from "../layouts/CustomLayout";
import {
  Box,
  Center,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { AppName, lightColor, primaryColor } from "../constants";

const DonationPage = () => {
  return (
    <CustomLayout>
      <Box minH={"90vh"} bg={lightColor} py={"130px"}>
        <Center>
          <Heading>Support Our Cause - Make a difference Today</Heading>
        </Center>
        <Center mt={3}>
          <Heading
            textAlign={"center"}
            mx={{ base: 2, md: "20%" }}
            fontWeight={400}
            fontSize={16}
            lineHeight={2}
          >
            Thank you for considering a donation to {AppName}, your support is
            needed in furthering our mission To provide evidence-based,
            multidisciplinary, public health approach, including lifestyle
            medicine, and treatment for individuals with mental health and
            addiction or dual diagnosis; and housing with ultimate integration
            into the society. Creating public health awareness and education
            about the epidemic of psycho-active drug usage among the youth and
            vulnerable populations
          </Heading>
        </Center>
        <Heading
          textAlign={"center"}
          mx={{ base: 2, md: "20%" }}
          fontWeight={600}
          fontSize={20}
          lineHeight={2}
          color={primaryColor}
          my={10}
        >
          Donation Methods
        </Heading>
        <Box bg={"white"} p={10} mx={{ base: 2, md: "20%" }}>
          <Tabs variant="soft-rounded" size={"lg"} colorScheme="yellow">
            <TabList>
              <Tab>Direct Bank Transfer</Tab>
              <Tab>PayPal</Tab>
            </TabList>
            <TabPanels>
              <TabPanel fontWeight={"bold"}>
                <p>
                  BANK: TD BANK
                  <br /> ACCOUNT NUMBER: 5004125 <br />
                  BRANCH TRANSIT: 03839 CANADA <br />
                  LEGAL BUSINESS NAME: 2576057 ALBERTA LTD
                </p>
              </TabPanel>
              <TabPanel>{/* <p>two!</p> */}</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </CustomLayout>
  );
};

export default DonationPage;
