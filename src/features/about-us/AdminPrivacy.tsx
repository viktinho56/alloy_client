import { Box, Heading } from "@chakra-ui/react";
//import useMission from "./hooks/useMission";
//import MissionCard from "./components/MissionCard";
import usePrivacy from "./hooks/usePrivacy";
import PrivacyCard from "./components/PrivacyCard";

const AdminPrivacy = () => {
  let { data } = usePrivacy();
  return (
    <Box>
      <Heading>Privacy</Heading>
      <Box mt={5}>
        {data && data.length > 0 && <PrivacyCard data={data[0]} />}
      </Box>
    </Box>
  );
};

export default AdminPrivacy;
