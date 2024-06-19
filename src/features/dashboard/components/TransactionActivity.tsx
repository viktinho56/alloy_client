import { useState } from "react";
import { DownloadIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

// Define an interface for the row data
interface RowData {
    date: string;
    amount: string;
    description: string;
    paymentMethod: string;
    paymentStatus: string;
}

const TransactionActivity = () => {
    const [sortColumn, setSortColumn] = useState<keyof RowData>("date");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    // Sample data (replace with your actual data)
    const yourData: RowData[] = [
        { date: "01/01/2024", amount: "£400", description: "Service charge", paymentMethod: "Card", paymentStatus: "Paid" },
        { date: "13/04/2024", amount: "£380", description: "Maintenance charge", paymentMethod: "Bank Transfer", paymentStatus: "Paid" },
        { date: "25/12/2024", amount: "£463", description: "Rent", paymentMethod: "Card", paymentStatus: "Due" }
    ];

    // Function to handle sorting
    const handleSort = (column: keyof RowData) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortOrder("asc");
        }
    };

    // Sorting logic
    const sortedData = yourData.sort((a, b) => {
        if (sortOrder === "asc") {
            return a[sortColumn].localeCompare(b[sortColumn]);
        } else {
            return b[sortColumn].localeCompare(a[sortColumn]);
        }
    });

    return (
        <Box>
            <TableContainer>
                <Table size="sm" borderWidth="1px" borderColor="black">
                    <Thead>
                        <Tr bg='blue.100'>
                            <Th color="black" borderWidth="1px" borderColor="black" onClick={() => handleSort("date")}>
                                Date{" "}
                                <Box display="inline-block" ml={1}>
                                    {sortColumn === "date" && (
                                        sortOrder === "asc" ? <TriangleUpIcon /> : <TriangleDownIcon />
                                    )}
                                </Box>
                            </Th>
                            <Th color="black" borderWidth="1px" borderColor="black" onClick={() => handleSort("amount")}>
                                Amount{" "}
                                <Box display="inline-block" ml={1}>
                                    {sortColumn === "amount" && (
                                        sortOrder === "asc" ? <TriangleUpIcon /> : <TriangleDownIcon />
                                    )}
                                </Box>
                            </Th>
                            <Th color="black" borderWidth="1px" borderColor="black" onClick={() => handleSort("description")}>
                                Description{" "}
                                <Box display="inline-block" ml={1}>
                                    {sortColumn === "description" && (
                                        sortOrder === "asc" ? <TriangleUpIcon /> : <TriangleDownIcon />
                                    )}
                                </Box>
                            </Th>
                            <Th color="black" borderWidth="1px" borderColor="black" onClick={() => handleSort("paymentMethod")}>
                                Payment Method{" "}
                                <Box display="inline-block" ml={1}>
                                    {sortColumn === "paymentMethod" && (
                                        sortOrder === "asc" ? <TriangleUpIcon /> : <TriangleDownIcon />
                                    )}
                                </Box>
                            </Th>
                            <Th color="black" borderWidth="1px" borderColor="black" onClick={() => handleSort("paymentStatus")}>
                                Payment Status{" "}
                                <Box display="inline-block" ml={1}>
                                    {sortColumn === "paymentStatus" && (
                                        sortOrder === "asc" ? <TriangleUpIcon /> : <TriangleDownIcon />
                                    )}
                                </Box>
                            </Th>
                            <Th color="black" borderWidth="1px" borderColor="black">Download Receipt</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {sortedData.map((row, index) => (
                           <Tr key={index} borderWidth="1px" borderColor="black" bg={index % 2 === 0 ? "gray.200" : undefined}>
                                <Td borderWidth="1px" borderColor="black">{row.date}</Td>
                                <Td borderWidth="1px" borderColor="black">{row.amount}</Td>
                                <Td borderWidth="1px" borderColor="black">{row.description}</Td>
                                <Td borderWidth="1px" borderColor="black">{row.paymentMethod}</Td>
                                <Td borderWidth="1px" borderColor="black">{row.paymentStatus}</Td>
                                <Td borderWidth="1px" borderColor="black"><DownloadIcon /></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default TransactionActivity;
