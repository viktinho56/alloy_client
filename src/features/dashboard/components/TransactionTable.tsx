import {
  TableContainer,
  Table,
  // TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  //   Tfoot,
  //Avatar,
  Box,
  Flex,
  Text,
  Badge,
  Button,
} from "@chakra-ui/react";

import { splitDate } from "../../../utils/date_spliter";
//import ActionMenu from "./ActionMenu";

const TransactionTable = ({ data }: any) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>S/N</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Description</Th>
            <Th>Payment Method</Th>
            <Th>Payment Type</Th>
            <Th>Payment Status</Th>
            <Th>Download Receipt</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((user: any, index: number) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td fontWeight={600} fontSize={"xs"}>
                {splitDate(user.created)}
              </Td>
              <Td>
                <Flex gap={3} alignItems={"center"}>
                  <Box py={1}>
                    <Text fontSize={13} fontWeight={600}>
                      &pound;{user.amount}
                    </Text>
                  </Box>
                </Flex>
              </Td>
              <Td fontWeight={600} fontSize={"xs"}>
                Maintenance charge
              </Td>
              <Td fontWeight={600} fontSize={"xs"}>
                Card Payment
              </Td>
              {/* <Td>{splitDate(user.lastLogin)}</Td> */}
              <Td fontWeight={600} fontSize={"xs"}>
                {user.transactionsType}
              </Td>
              <Td>
                <Badge size={"md"} colorScheme="yellow">
                  Paid
                </Badge>
              </Td>

              <Td>
                {" "}
                <Button isDisabled={true} colorScheme="teal" variant="link">
                  Download Receipt
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
