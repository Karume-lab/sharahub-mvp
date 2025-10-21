"use client";

import { Box, Progress, Stack, Text, Title } from "@mantine/core";
import React, { ReactNode } from "react";

interface StepperProps {
  steps: {
    label: string;
    description: string;
    icon: ReactNode;
    content: ReactNode;
  }[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  setActiveStep,
}) => {
  const percentage = Math.round((activeStep / steps.length) * 100);

  return (
    <Stack gap="lg" p="lg">
      <Box>
        <Title order={3} fw={600} c="primary">
          {steps[activeStep].label}
        </Title>
        <Text size="sm" c="dimmed" mt={4}>
          {steps[activeStep].description}
        </Text>
      </Box>

      <Stack gap={4}>
        <Text size="sm" fw={500}>
          Step {activeStep + 1} of {steps.length}
        </Text>
        <Progress value={percentage} />
      </Stack>

      <Box mt="md">{steps[activeStep].content}</Box>
    </Stack>
  );
};

export default Stepper;
