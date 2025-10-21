"use client";

import { Box, Card, SimpleGrid, Text, Title } from "@mantine/core";
import CountUp from "react-countup";
import { SectionTitle } from "~/components";

const statistics = [
  { name: "ACTIVE AFFILIATES", value: 1200 },
  { name: "BRANDS ON PLATFORM", value: 85 },
  { name: "COMMISSION PAID OUT", value: 450000 },
  { name: "CAMPAIGNS RUN", value: 950 },
];

const Statistics = () => {
  return (
    <Box px={{ base: "md", sm: "lg", md: 80, lg: 120 }} py="xl" id="statistics">
      <SectionTitle
        title="STATS"
        description="Don't believe us? Numbers don't lie, or so they say."
      />

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 2, lg: 4 }}
        spacing={{ base: "md", sm: "lg", md: "xl" }}
        mt="xl"
      >
        {statistics.map(({ name, value }) => (
          <Card
            key={name}
            bg="primary"
            radius="md"
            p="lg"
            withBorder
            shadow="sm"
          >
            <Text size="sm" fw={700} ta="center" c="white" mb="xs">
              {name}
            </Text>
            <Title order={2} size="h2" ta="center">
              <CountUp
                end={value}
                duration={5}
                enableScrollSpy
                formattingFn={(v) => `${v.toLocaleString()}+`}
              >
                {({ countUpRef }) => (
                  <Text
                    ref={countUpRef}
                    component="span"
                    size="36px"
                    fw={800}
                    c="white"
                    lh={1}
                  />
                )}
              </CountUp>
            </Title>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Statistics;
