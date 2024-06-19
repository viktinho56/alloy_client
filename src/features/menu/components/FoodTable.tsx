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
    // Avatar,
    Box,
    Flex,
    Text,
    Badge,
    Avatar,
} from "@chakra-ui/react";
//import { User } from "../../../types/user-type";
//import { splitDate } from "../../../utils/date_spliter";
// import ActionMenu from "./ActionMenu";
import { ServerUrl } from "../../../constants";
import FoodActionMenu from "./FoodActionMenu";
//import { ServerUrl } from "../../../constants";

const FoodTable = ({ data, properties }: any) => {
    return (
        <TableContainer>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        {properties.map((property: any, index: number) => (
                            <Th key={index}>{property}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((user: any, index: number) => (
                        <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>
                                <Flex gap={3} alignItems={"center"}>
                                    <Box gap={2} alignItems={"center"} as={Flex} py={1}>
                                        <Avatar borderRadius={2} src={ServerUrl + user.avatarUrl} />
                                        <Text fontSize={13} fontWeight={600}>
                                            {user.productName}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Td>
                            <Td fontWeight={600} fontSize={"xs"}>
                                {user.productDescription}
                            </Td>
                            {/* <Td>{splitDate(user.lastLogin)}</Td> */}

                            <Td>
                                {user.status == 1 ? <Badge colorScheme="green">Available</Badge> : <Badge colorScheme="red">Not Available</Badge>}

                            </Td>

                            <Td>
                                <FoodActionMenu user={user} />
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

export default FoodTable;
