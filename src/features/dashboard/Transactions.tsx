import { Box, Flex, Heading, Select } from "@chakra-ui/react";

import TransactionTable from "./components/TransactionTable";
import useTransactions from "./hooks/useTransactions";
import { ChangeEvent, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Fees, linkColor } from "../../constants";

const Transactions = () => {
  let { data } = useTransactions();
  let [transactions, setTransactions] = useState<any>([]);
  let { GetCurrentUser } = useAuth();
  useEffect(() => {
    if (data) {
      setTransactions(data.filter((d) => d.email == GetCurrentUser()?.email));
    }
  }, [data]);
  function handleChange(e: ChangeEvent<HTMLSelectElement>): void {
    if (e.currentTarget.value == "All") {
      setTransactions(data.filter((d) => d.email == GetCurrentUser()?.email));
    } else {
      setTransactions(
        data.filter(
          (d) =>
            d.email == GetCurrentUser()?.email &&
            d.transactionsType == e.currentTarget.value
        )
      );
    }
  }

  return (
    <Box p={5}>
      <Flex justifyContent={"space-between"}>
        <Heading fontSize={"25px"}>Transaction Activity</Heading>
        <Select
          onChange={(e) => handleChange(e)}
          borderRadius={10}
          size={"md"}
          borderWidth={1}
          w={"auto"}
          errorBorderColor="red.600"
          bg={"#fff"}
          _active={{ outline: "none" }}
          outline={"none"}
          _focus={{ borderWidth: 0, outlineColor: "transparent" }}
          borderColor={linkColor}
        >
          {Fees &&
            Fees.map((p, i) => (
              <option key={i} value={p.name}>
                {p.name}
              </option>
            ))}
        </Select>
      </Flex>
      <Box my={3} bg={"white"} p={3}>
        {transactions && transactions.length > 0 && (
          <TransactionTable data={transactions} />
        )}
      </Box>
    </Box>
  );
};

export default Transactions;
