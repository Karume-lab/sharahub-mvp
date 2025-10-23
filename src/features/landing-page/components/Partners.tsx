import styles from "#/partners.module.css";
import SectionTitle from "@/features/landing-page/components/SectionTitle";
import { Marquee } from "@gfazioli/mantine-marquee";
import { Box, ThemeIcon } from "@mantine/core";
import {
  IconBrand4chan,
  IconBrandAmazon,
  IconBrandBing,
  IconBrandGithub,
  IconBrandMantine,
  IconBrandWhatsapp,
  IconBrandWordpress,
} from "@tabler/icons-react";

const iconsBrand = [
  IconBrand4chan,
  IconBrandWhatsapp,
  IconBrandWordpress,
  IconBrandBing,
  IconBrandGithub,
  IconBrandMantine,
  IconBrandAmazon,
];

const Partners = () => {
  return (
    <Box id="partners">
      <Box px={{ base: "md", sm: "lg", md: 80, lg: 120 }} py="xl">
        <SectionTitle
          title="PARTNERS"
          description="We team up with brands that care about results and relationships."
        />
      </Box>

      <Box mt="lg" px={{ base: "sm", sm: "lg", md: 80 }}>
        <Marquee pauseOnHover fadeEdges repeat={4}>
          {iconsBrand.map((Icon, index) => (
            <ThemeIcon
              key={index}
              variant="transparent"
              className={styles.iconResponsive}
              mx="md"
            >
              <Icon style={{ width: "70%", height: "70%" }} />
            </ThemeIcon>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default Partners;
