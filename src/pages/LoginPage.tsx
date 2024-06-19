// import MainLayout from "../layouts/MainLayout";

// import { IndexHero } from "../features/hero";
// import { IndexAbout } from "../features/about-us";
import UserLogin from "../features/auth/UserLogin";
import { Container } from "@chakra-ui/react";
import UserAuthLayout from "../layouts/UserAuthLayout";
// import { DonationCard } from "../features/donation";
// import { NewsLetterCard } from "../features/newsletter";
// import { IndexTestimonials } from "../features/testimonials/components";
// import { IndexEvents } from "../features/events";

const LoginPage = () => {
  return (
    <UserAuthLayout>
      <Container px={10} borderRadius={22} bg={"white"}>
        <UserLogin />
      </Container>
    </UserAuthLayout>
  );
};

export default LoginPage;
