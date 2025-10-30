import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
} from "@mantine/core";
import SectionTitle from "@/features/landing-page/components/SectionTitle";

const faqs = [
  {
    value: "Who can join as an affiliate?",
    description:
      "Anyone with an audience, content platform, or marketing skills can sign up and start promoting brands.",
    emoji: "🧑‍💻",
  },
  {
    value: "How do brands track performance?",
    description:
      "Our system provides real-time analytics for clicks, conversions, and campaign performance via your dashboard.",
    emoji: "📊",
  },
  {
    value: "Is there a cost to join?",
    description:
      "Signing up is free for both affiliates and businesses. You only pay or earn based on campaign performance.",
    emoji: "💸",
  },
  {
    value: "When do affiliates get paid?",
    description:
      "Payouts are processed based on the brand's payment schedule — usually weekly or monthly, via Mpesa or bank.",
    emoji: "⏰",
  },
];

const Faqs = () => {
  return (
    <Box py="xl" px={{ base: "sm", sm: "md", md: "xl" }} id="faqs">
      <Container size="lg">
        <SectionTitle
          title="FAQS"
          description="Got questions? We got answers!"
        />
        <Accordion variant="separated" radius="md" mt="lg">
          {faqs.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionControl icon={item.emoji}>
                {item.value}
              </AccordionControl>
              <AccordionPanel c="dimmed">{item.description}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default Faqs;
