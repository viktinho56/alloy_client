// import {
//   Box,
//   Text,
//   Center,
//   SimpleGrid,
//   useBreakpointValue,
// } from "@chakra-ui/react";

// import { Events } from "../../constants";
// import EventsCard from "./components/EventsCard";
import EventCarousel from "./components/EventCarousel";
import useEvents from "./hooks/useEvents";

const IndexEvents = () => {
  let { data } = useEvents();
  return <EventCarousel Events={data} />;
};

export default IndexEvents;
