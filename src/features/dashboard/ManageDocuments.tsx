import { Box, Heading, } from "@chakra-ui/react";
import ManageDocumentsCard from "./components/ManageDocumentsCard";

const ManageDocuments = () => {
    return (
        <Box p={5}>
            <Heading fontSize={"25px"}>Manage Documents</Heading>
            <Box m={2} p={4} bg={"white"}>
                <ManageDocumentsCard />
            </Box>
        </Box>
    );
};

export default ManageDocuments;
