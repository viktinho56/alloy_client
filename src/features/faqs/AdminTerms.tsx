import { Box, Heading } from "@chakra-ui/react";
//import useMission from "./hooks/useMission";
//3;etyuii` q dym3,mport MissionCard from "./components/MissionCard";
import useTerms from "./hooks/useTerms";
import TermsCard from "./components/TermsCard";

const AdminTerms = () => {
  let { data } = useTerms();
  return (
    <Box>
      <Heading>Terms & Conditions</Heading>
      <Box mt={5}>
        {data && data.length > 0 && <TermsCard data={data[0]} />}
      </Box>
    </Box>
  );
};

export default AdminTerms;
