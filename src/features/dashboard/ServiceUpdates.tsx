import { Box, Heading } from "@chakra-ui/react";
//import MaintenanceForm from "./components/MaintenanceForm";
import useServiceStatus from "./hooks/useServiceStatus";
//import { splitDate } from "../../utils/date_spliter";
import ServiceTable from "./components/ServiceTable";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const ServiceUpdates = () => {
  let { data } = useServiceStatus();
  let [transactions, setTransactions] = useState<any>([]);
  let { GetCurrentUser } = useAuth();
  useEffect(() => {
    if (data) {
      setTransactions(data.filter((d) => d.email == GetCurrentUser()?.email));
    }
  }, [data]);
  return (
    <Box p={5}>
      <Heading fontSize={"25px"}>Service Status Updates</Heading>
      <Box my={3} bg={"white"} p={3}>
        {transactions && transactions.length > 0 && (
          <ServiceTable data={data} />
        )}
      </Box>
    </Box>
  );
};

export default ServiceUpdates;
