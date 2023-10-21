"use client";

import { createTheme,MantineColorsTuple  } from "@mantine/core";

const orangeapp: MantineColorsTuple = [
  "#fff1e9",
  "#fae2d5",
  "#f2c3a8",
  "#eba178",
  "#e6854f",
  "#e37336",
  "#e26928",
  "#c9581c",
  "#b44d16",
  "#9d410d"
];

export const theme = createTheme({
  primaryColor: 'orangeapp',
  colors: {
    orangeapp,
  },
  primaryShade: { light: 6, dark: 8 }
});