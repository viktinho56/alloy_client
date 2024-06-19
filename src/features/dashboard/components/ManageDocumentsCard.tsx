import { useState } from "react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { yellowColor } from "../../../constants";
import UploadDocuments from "./UploadDocuments";

// Define an interface for the row data
interface RowData {
    date: string;
    sn: string;
    description: string;
    documentType: string;
    size: string;
}

const ManageDocumentsCard = () => {
    const [sortColumn, setSortColumn] = useState<keyof RowData>("date");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [isUploadDocumentslOpen, setIsUploadDocumentslOpen] = useState<boolean>(false);

    // Sample data (replace with your actual data)
    const yourData: RowData[] = [
        { date: "01/01/2024", sn: "1", description: "Driving Licence", documentType: "pdf", size: "1 MB" },
        { date: "13/04/2024", sn: "2", description: "Rental Agreement", documentType: "pdf", size: "1.5 MB" },
        { date: "25/12/2024", sn: "3", description: "Bank Statement", documentType: "pdf", size: "2.5 MB" }
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
                            <Th color="black" borderWidth="1px" borderColor="black">Select</Th>
                            <Th color="black" borderWidth="1px" borderColor="black" onClick={() => handleSort("sn")}>
                                S/N{" "}
                                <Box display="inline-block" ml={1}>
                                    {sortColumn === "sn" && (
                                        sortOrder === "asc" ? <TriangleUpIcon /> : <TriangleDownIcon />
                                    )}
                                </Box>
                            </Th>
                            <Th color="black" borderWidth="1px" borderColor="black" onClick={() => handleSort("date")}>
                                Date{" "}
                                <Box display="inline-block" ml={1}>
                                    {sortColumn === "date" && (
                                        sortOrder === "asc" ? <TriangleUpIcon /> : <TriangleDownIcon />
                                    )}
                                </Box>
                            </Th>
                            <Th color="black" borderWidth="1px" borderColor="black" onClick={() => handleSort("documentType")}>
                                Document Type{" "}
                                <Box display="inline-block" ml={1}>
                                    {sortColumn === "documentType" && (
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
                            <Th color="black" borderWidth="1px" borderColor="black" onClick={() => handleSort("size")}>
                                Size{" "}
                                <Box display="inline-block" ml={1}>
                                    {sortColumn === "size" && (
                                        sortOrder === "asc" ? <TriangleUpIcon /> : <TriangleDownIcon />
                                    )}
                                </Box>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {sortedData.map((row, index) => (
                            <Tr key={index} borderWidth="1px" borderColor="black">
                                <Td borderWidth="1px" borderColor="black"> <Checkbox colorScheme="blue" /></Td>
                                <Td borderWidth="1px" borderColor="black">{row.sn}</Td>
                                <Td borderWidth="1px" borderColor="black">{row.date}</Td>
                                <Td borderWidth="1px" borderColor="black">{row.documentType}</Td>
                                <Td borderWidth="1px" borderColor="black">{row.description}</Td>
                                <Td borderWidth="1px" borderColor="black">{row.size}</Td>

                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

            <Flex mt={5} flexDirection={{ base: "column", md: "row" }} textAlign={{ base: "center", md: "right" }} justifyContent={{ base: "center", md: "space-around" }}>
            <Button
                size={"md"}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: "12px", md: "14px" }}
                fontWeight={"bold"}
                mt={{ base: 3, md: 0 }}
                type="button"
                bg={yellowColor}
                mb={{ base: 3, md: 0 }}
                onClick={() => setIsUploadDocumentslOpen(true)}
            >
                {"UPLOAD"}
            </Button>

            <Button
                size={"md"}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: "12px", md: "14px" }}
                fontWeight={"bold"}
                mt={{ base: 3, md: 0 }}
                type="button"
                bg={yellowColor}
                mb={{ base: 3, md: 0 }}
            >
                {"DOWNLOAD"}
            </Button>

            <Button
                size={"md"}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: "12px", md: "14px" }}
                fontWeight={"bold"}
                mt={{ base: 3, md: 0 }}
                type="button"
                bg={yellowColor}
                mb={{ base: 3, md: 0 }}
            >
                {"DELETE"}
            </Button>

            <UploadDocuments isOpen={isUploadDocumentslOpen} onClose={() => setIsUploadDocumentslOpen(false)} />
        </Flex>
        </Box>
    );
};

export default ManageDocumentsCard;
