import { Box, Text, Title } from "@mantine/core";
import React from "react";

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
      <Title size={36} fw={"normal"} c={'gray'}>
        {description}
      </Title>
    </Box>
  );
};

export default SectionTitle;
