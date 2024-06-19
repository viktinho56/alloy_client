import MainLayout from "../layouts/MainLayout";

import { IndexHero } from "../features/hero";
import { IndexAbout } from "../features/about-us";
// import { DonationCard } from "../features/donation";
// import { NewsLetterCard } from "../features/newsletter";
// import { IndexTestimonials } from "../features/testimonials/components";
// import { IndexEvents } from "../features/events";

const IndexPage = () => {
  return (
    <MainLayout>
      <IndexHero />

      <IndexAbout />
      {/* <IndexServices /> */}
      {/* <IndexMetrix /> */}
      {/* <DonationCard />
      <IndexTestimonials />
      <NewsLetterCard />
      <IndexEvents /> */}
    </MainLayout>
  );
};

export default IndexPage;
