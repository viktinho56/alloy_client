import { Box, Heading } from "@chakra-ui/react";
//import useMission from "./hooks/useMission";
//import MissionCard from "./components/MissionCard";
import useVision from "./hooks/useVision";
import VisionCard from "./components/VisionCard";

const AdminVision = () => {
  let { data } = useVision();
  return (
    <Box>
      <Heading>Vision</Heading>
      <Box mt={5}>
        {data && data.length > 0 && <VisionCard data={data[0]} />}
      </Box>
    </Box>
  );
};

export default AdminVision;
