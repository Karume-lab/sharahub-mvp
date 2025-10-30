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
import styles from "#/partners.module.css";
import SectionTitle from "@/features/landing-page/components/SectionTitle";

const partners = [
  {
    uuid: crypto.randomUUID(),
    Icon: IconBrand4chan,
  },
  {
    uuid: crypto.randomUUID(),
    Icon: IconBrandWhatsapp,
  },
  {
    uuid: crypto.randomUUID(),
    Icon: IconBrandWordpress,
  },
  {
    uuid: crypto.randomUUID(),
    Icon: IconBrandBing,
  },
  {
    uuid: crypto.randomUUID(),
    Icon: IconBrandGithub,
  },
  {
    uuid: crypto.randomUUID(),
    Icon: IconBrandMantine,
  },
  {
    uuid: crypto.randomUUID(),
    Icon: IconBrandAmazon,
  },
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
          {partners.map((partner) => (
            <ThemeIcon
              key={partner.uuid}
              variant="transparent"
              className={styles.iconResponsive}
              mx="md"
            >
              <partner.Icon style={{ width: "70%", height: "70%" }} />
            </ThemeIcon>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default Partners;
