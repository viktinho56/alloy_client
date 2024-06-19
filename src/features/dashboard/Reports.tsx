import {
  Box,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useState } from "react";
import RentDataReport from "./components/RentDataReport";
import MaintenanceDataReport from "./components/MaintenanceDataReport";
import PaymentDataReports from "./components/PaymentDataReports";

export const rentData = [
  {
    id: "Amount Paid",
    label: "Amount Paid",
    value: 195000,
    color: "hsl(190, 70%, 50%)",
  },
  {
    id: "Outstanding Balance",
    label: "Outstanding Balance",
    value: 419000,
    color: "hsl(256, 70%, 50%)",
  },
];
export const maintenanceData = [
  {
    id: "Open Request",
    label: "Open Request",
    value: 1,
    color: "hsl(190, 70%, 50%)",
  },
  {
    id: "Resolved Request",
    label: "Resolved Request",
    value: 2,
    color: "hsl(56, 70%, 50%)",
  },
];

export const paymentData = [
  {
    id: "Routine Bill Payment",
    label: "Routine Bill Payment",
    value: 95000,
    color: "hsl(90, 70%, 50%)",
  },
  {
    id: "Maintenance Cost",
    label: "Maintenance Cost",
    value: 1419000,
    color: "hsl(206, 70%, 50%)",
  },
];
const Reports = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index: any) => {
    setSelectedTab(index);
  };

  return (
    <Box p={5}>
      <Heading fontSize={{ base: "20px", md: "25px" }}>Reports</Heading>

      <Box m={5} p={5} bg={"white"} width="100%">
        <Tabs index={selectedTab} onChange={handleTabClick} variant="unstyled">
          <TabList display="flex" flexWrap="wrap">
            <Tab
              _selected={{ bg: "blue.200" }}
              width={{ base: "100%", md: "calc(100%/3 - 16px)" }}
              border="1px solid"
              mb={2}
              borderColor="gray.400"
            >
              Rent Data
            </Tab>
            <Tab
              _selected={{ bg: "blue.200" }}
              width={{ base: "100%", md: "calc(100%/3 - 16px)" }}
              border="1px solid"
              mb={2}
              borderColor="gray.400"
            >
              Maintenance Data
            </Tab>
            <Tab
              _selected={{ bg: "blue.200" }}
              width={{ base: "100%", md: "calc(100%/3 - 16px)" }}
              border="1px solid"
              mb={2}
              borderColor="gray.400"
            >
              Payment Data
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <RentDataReport />
            </TabPanel>
            <TabPanel>
              <MaintenanceDataReport />
            </TabPanel>
            <TabPanel>
              <PaymentDataReports />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Reports;
