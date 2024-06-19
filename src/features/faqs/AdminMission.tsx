import { Box, Heading } from "@chakra-ui/react";
import useMission from "./hooks/useMission";
import MissionCard from "./components/MissionCard";

const AdminMission = () => {
  let { data } = useMission();
  return (
    <Box>
      <Heading>Mission</Heading>
      <Box mt={5}>
        {data && data.length > 0 && <MissionCard data={data[0]} />}
      </Box>
    </Box>
  );
};

export default AdminMission;
