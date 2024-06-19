import { Container } from "@chakra-ui/react";
import UserAuthLayout from "../layouts/UserAuthLayout";
import CreatePassword from "../features/auth/CreatePassword";

const CreatePasswordPage = () => {
  return (
    <UserAuthLayout>
      <Container bg={"white"}>
        <CreatePassword />
      </Container>
    </UserAuthLayout>
  );
};

export default CreatePasswordPage;
