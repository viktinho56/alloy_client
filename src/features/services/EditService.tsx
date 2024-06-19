import { Box } from "@chakra-ui/react";
import EditUser from "./components/EditUser";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";

const EditService = () => {
  let { id } = useParams();
  let { data } = useServices();
  let [found, setFound] = useState<any>(null);
  useEffect(() => {
    let f = data.find((d) => d.id == id);
    setFound(f);
  }, [data]);
  console.log(id);
  return <Box p={3}>{found && <EditUser data={found} />}</Box>;
};

export default EditService;
