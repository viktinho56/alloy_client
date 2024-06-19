import { Box, Heading } from "@chakra-ui/react";
//import useMission from "./hooks/useMission";
//import MissionCard from "./components/MissionCard";

import useValues from "./hooks/useValues";
import ValueCard from "./components/ValueCard";

const AdminVision = () => {
  let { data } = useValues();
  return (
    <Box>
      <Heading>Values</Heading>
      <Box mt={5}>
        {data && data.length > 0 && <ValueCard data={data[0]} />}
      </Box>
    </Box>
  );
};

export default AdminVision;
