import { Box, Text, Title } from "@mantine/core";
import type React from "react";

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <Box my={"xl"}>
      <Title order={6} c="primary">
        {title}
      </Title>
      <Text fw={"normal"} c={"gray"} size="lg">
        {description}
      </Text>
    </Box>
  );
};

export default SectionTitle;
