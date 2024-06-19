import { Box } from "@chakra-ui/react";
//import MaxCard from "./components/MaxCard";
// import ExpertiseCard from "../../components/common/ExpertiseCard";
// import IndexEvents from "../events/IndexEvents";
import Hero from "./components/Hero";
import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";
import { useEffect, useState } from "react";
import MaximumCard from "./components/MaximumCard";

const ServiceFeature = () => {
  let { slug } = useParams();
  let { data } = useServices();
  let [found, setFound] = useState(null);
  useEffect(() => {
    setFound(data.find((d) => d.slug == slug));
  }, [data]);
  // let { data: mission } = useMission();
  // let { data: vision } = useVision();
  return (
    <Box>
      <Hero />
      {found && <MaximumCard data={found} />}
    </Box>
  );
};

export default ServiceFeature;
