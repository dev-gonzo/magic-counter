'use client'

import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { themeDark } from "./themeDark";
import { theme } from "./theme";


type Props = {
  children: ReactNode | ReactNode[];
};

export const ProviderTheme = ({ children }: Props) => {
  let themeMode = "light";

  return (
    <>
      <ThemeProvider theme={themeMode == "dark" ? themeDark() : theme()}>
        {children}
      </ThemeProvider>
    </>
  );
};
