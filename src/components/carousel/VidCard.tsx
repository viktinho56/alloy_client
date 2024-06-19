import { Box } from "@chakra-ui/react";

const VidCard = ({ data }: any) => {
  return (
    <Box w={"full"} bg={"black"} height={{ base: "100%", md: "100%" }}>
      <video style={{ width: "100%", height: "100%" }} autoPlay muted loop>
        <source src={data} type="video/mp4"></source>
      </video>
    </Box>
  );
};

export default VidCard;
