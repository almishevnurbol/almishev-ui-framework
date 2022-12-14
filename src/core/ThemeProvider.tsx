import React from "react";
import createPalette from "@material-ui/core/styles/createPalette";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme, CssBaseline } from "@material-ui/core";

import colors from "../theme/colors";
import lineHeight from "../theme/lineHeight";
import fontSize from "../theme/fontSize";
import fontFamily from "../theme/fontFamily";
import fontWeight from "../theme/fontWeight";

import MuiCssBaseline from "../overrides/MuiCssBaseline";
import MuiTypography from "../overrides/MuiTypography";
import MuiIconButton from "../overrides/MuiIconButton";
import MuiInput from "../overrides/MuiInput";
import MuiInputLabel from "../overrides/MuiInputLabel";
import MuiFormHelperText from "../overrides/MuiFormHelperText";
import MuiButton from "../overrides/MuiButton";
import MuiTableCell from "../overrides/MuiTableCell";
import MuiTableRow from "../overrides/MuiTableRow";
import MuiTableSortLabel from "../overrides/MuiTableSortLabel";

/**
 * Types
 */
export interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * Colors
 */
const palette = createPalette(colors);

/**
 * Setup
 */
const theme = createTheme({
  palette,
  typography: {
    htmlFontSize: fontSize.s,
    fontSize: fontSize.xl,
    fontSizeXs: fontSize.xs,
    fontSizeS: fontSize.s,
    fontSizeSm: fontSize.sm,
    fontSizeM: fontSize.m,
    fontSizeMl: fontSize.ml,
    fontSizeLg: fontSize.lg,
    fontSizeXl: fontSize.xl,
    fontSizeXl2: fontSize.xl2,
    fontSizeXl3: fontSize.xl3,
    fontSizeXl4: fontSize.xl4,
    fontSizeXl5: fontSize.xl5,
    fontSizeXl6: fontSize.xl6,
    fontFamily: fontFamily.sans,
    fontFamilySerif: fontFamily.serif,
    fontFamilyMonospace: fontFamily.monospace,
    fontWeightLight: fontWeight.light,
    fontWeightRegular: fontWeight.normal,
    fontWeightMedium: fontWeight.medium,
    fontWeightBold: fontWeight.bold,
    lineHeightXs: lineHeight.xs,
    lineHeightS: lineHeight.s,
    lineHeightSm: lineHeight.sm,
    lineHeightM: lineHeight.m,
    lineHeightMl: lineHeight.ml,
    lineHeightLg: lineHeight.lg,
    lineHeightXl: lineHeight.xl,
    lineHeightXl2: lineHeight.xl2,
    lineHeightXl3: lineHeight.xl3,
  },
  props: {
    MuiInput: {
      disableUnderline: true,
    },
    MuiInputLabel: {
      shrink: true, // keep the value `true` to keep `placeholder` shown
      disableAnimation: true,
    },
  },
  overrides: {
    MuiCssBaseline,
    MuiInput,
    MuiInputLabel,
    MuiTypography,
    MuiFormHelperText,
    MuiIconButton,
    MuiButton,
    MuiTableCell,
    MuiTableRow,
    MuiTableSortLabel,
  },
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
