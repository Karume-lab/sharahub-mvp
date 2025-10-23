import { Box, Text } from "@mantine/core";
import dayjs from "dayjs";

const LandingPageFooter = () => {
  return (
    <footer>
      <Box component="footer" py="md" ta="center" bg={"primary.1"}>
        <Text size="sm" c="dimmed">
          &copy; {dayjs().year()} SharaHub. All rights reserved.
        </Text>
      </Box>
    </footer>
  );
};

export default LandingPageFooter;
