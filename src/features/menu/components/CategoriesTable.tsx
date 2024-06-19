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
} from "@chakra-ui/react";
//import { User } from "../../../types/user-type";
//import { splitDate } from "../../../utils/date_spliter";
//import ActionMenu from "./ActionMenu";
import CategoriesActionMenu from "./CategoriesActionMenu";
//import { ServerUrl } from "../../../constants";

const CategoriesTable = ({ data, properties }: any) => {
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
                                    <Box py={1}>
                                        <Text fontSize={13} fontWeight={600}>
                                            {user.categoryName}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Td>
                            <Td fontWeight={600} fontSize={"xs"}>
                                {user.categoryDesc}
                            </Td>
                            {/* <Td>{splitDate(user.lastLogin)}</Td> */}

                            <Td>
                                <Badge colorScheme="green">Active</Badge>
                            </Td>

                            <Td>
                                <CategoriesActionMenu user={user} />
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

export default CategoriesTable;
