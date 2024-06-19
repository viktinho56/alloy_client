import { Box, Heading } from "@chakra-ui/react";
//import useMission from "./hooks/useMission";
//import MissionCard from "./components/MissionCard";
// import useVision from "./hooks/useVision";

import ObjectiveCard from "./components/ObjectiveCard";
import useObjectives from "./hooks/useObjectives";

const AdminObjectives = () => {
  let { data } = useObjectives();
  return (
    <Box>
      <Heading>Values</Heading>
      <Box mt={5}>
        {data && data.length > 0 && <ObjectiveCard data={data[0]} />}
      </Box>
    </Box>
  );
};

export default AdminObjectives;
