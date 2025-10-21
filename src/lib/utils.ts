import { useMantineTheme } from "@mantine/core";

export const getSession = () => {
  return true;
};

export const getPrimaryColorHexCode = () => {
  const theme = useMantineTheme();
  const primary = theme.colors[theme.primaryColor][6];

  return primary;
};

export const enumToDataOptions = (enumObj: Record<string, string>) => {
  return Object.values(enumObj).map((value) => ({
    label: value.charAt(0).toUpperCase() + value.slice(1),
    value,
  }));
};
