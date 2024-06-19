import { Box, Heading } from "@chakra-ui/react";
import { ResponsivePie } from "@nivo/pie";
import { paymentData } from "../Reports";

const PaymentDataReports = () => {
  return (
    <Box p={5}>
      <Heading fontSize={{ base: "20px", md: "25px" }}>Payment Data</Heading>
      <Box h={400}>
        <ResponsivePie
          data={paymentData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        />
      </Box>
    </Box>
  );
};

export default PaymentDataReports;
