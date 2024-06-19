// import MainLayout from "../layouts/MainLayout";

// import { IndexHero } from "../features/hero";
// import { IndexAbout } from "../features/about-us";
import { Container } from "@chakra-ui/react";
//import UserLogin from "../features/auth/UserLogin";
import UserAuthLayout from "../layouts/UserAuthLayout";
import UserSignUp from "../features/auth/UserSignUp";
// import { DonationCard } from "../features/donation";
// import { NewsLetterCard } from "../features/newsletter";
// import { IndexTestimonials } from "../features/testimonials/components";
// import { IndexEvents } from "../features/events";

const RegisterPage = () => {
  return (
    <UserAuthLayout>
      <Container bg={"transparent"}>
        <UserSignUp />
      </Container>
    </UserAuthLayout>
  );
};

export default RegisterPage;
