// import MainLayout from "../layouts/MainLayout";

// import { IndexHero } from "../features/hero";
// import { IndexAbout } from "../features/about-us";
//import UserLogin from "../features/auth/UserLogin";
import { Container } from "@chakra-ui/react";
import UserAuthLayout from "../layouts/UserAuthLayout";
import StaffLogin from "../features/auth/StaffLogin";

const StaffLoginPage = () => {
  return (
    <UserAuthLayout>
      <Container px={10} borderRadius={22} bg={"white"}>
        <StaffLogin />
      </Container>
    </UserAuthLayout>
  );
};

export default StaffLoginPage;
