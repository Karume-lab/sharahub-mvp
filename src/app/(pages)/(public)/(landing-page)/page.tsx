import { Stack } from "@mantine/core";
import {
  Faqs,
  FindYourFit,
  GetInTouchWithUs,
  HeroSection,
  Partners,
  Statistics,
  TheTeam,
} from "@/features/landing-page";

const LandingPage = () => {
  return (
    <Stack gap={"lg"}>
      <HeroSection />
      <Statistics />
      <Partners />
      <FindYourFit />
      <Faqs />
      <TheTeam />
      <GetInTouchWithUs />
    </Stack>
  );
};

export default LandingPage;
