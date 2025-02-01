"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import { FunctionComponent, PropsWithChildren } from "react";

const baseTheme = createTheme();

export const Providers: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
};
