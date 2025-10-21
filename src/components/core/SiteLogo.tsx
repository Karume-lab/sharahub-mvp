import Logo from "@/public/core/logo.png";

import { Image as MantineImage } from "@mantine/core";
import Image from "next/image";

const SiteLogo = () => {
  return (
    <MantineImage
      component={Image}
      alt="Sharahub Logo"
      src={Logo}
      width={50}
      height={50}
    />
  );
};

export default SiteLogo;
