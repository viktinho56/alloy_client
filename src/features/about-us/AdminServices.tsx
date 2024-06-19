import { Box, Heading } from "@chakra-ui/react";
//import useMission from "./hooks/useMission";
//import MissionCard from "./components/MissionCard";
// import useVision from "./hooks/useVision";
// import VisionCard from "./components/VisionCard";
import useService from "./hooks/useService";
import ServiceCard from "./components/ServiceCard";

const AdminServices = () => {
  let { data } = useService();
  return (
    <Box>
      <Heading>Services</Heading>
      <Box mt={5}>
        {data && data.length > 0 && <ServiceCard data={data[0]} />}
      </Box>
    </Box>
  );
};

export default AdminServices;
