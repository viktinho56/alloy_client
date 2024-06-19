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
//import { User } from "../../../types/user-type";
import { splitDate } from "../../../utils/date_spliter";
//import ActionMenu from "./ActionMenu";
//import { ServerUrl } from "../../../constants";

const ServiceTable = ({ data }: any) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>S/N</Th>
            <Th>Date</Th>
            <Th>Property</Th>
            <Th>Request Type</Th>
            <Th>Status</Th>
            <Th>Feedback</Th>
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
                      {user.propertyName}
                    </Text>
                  </Box>
                </Flex>
              </Td>
              <Td fontWeight={600} fontSize={"xs"}>
                {user.maintenanceType}
              </Td>
              {/* <Td>{splitDate(user.lastLogin)}</Td> */}

              <Td>
                <Badge size={"md"} colorScheme="yellow">
                  Request Logged
                </Badge>
              </Td>

              <Td>
                {" "}
                <Button isDisabled={true} colorScheme="teal" variant="link">
                  Provide Feedback
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

export default ServiceTable;
