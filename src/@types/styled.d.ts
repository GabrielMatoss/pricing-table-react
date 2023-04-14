import "styled-components";
import { defaultColorsTheme } from "../styles/themes/default";

type ThemeType = typeof defaultColorsTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}