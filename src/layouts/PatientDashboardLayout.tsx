import {
    useColorModeValue,
    Box,
    useDisclosure,
    Drawer,
    DrawerContent,
} from "@chakra-ui/react";

import { ReactNode } from "react";
import { PatientSidebar } from "../components/sidebar/PatientSidebar";
import { UserNavbar } from "../components/navbar/UserNavbar";

interface Props {
    children?: ReactNode;
}
const PatientDashboardLayout = ({ children }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <PatientSidebar
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <PatientSidebar onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <UserNavbar onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
};

export default PatientDashboardLayout;
