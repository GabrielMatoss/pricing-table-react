import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultColorsTheme } from "./styles/themes/default";
import { GlobalWrapper } from "./components/ContainerCard";

export function App() {
  return (
    <ThemeProvider theme={defaultColorsTheme}>
       <GlobalStyle />
     <GlobalWrapper />
    </ThemeProvider>
  );
}
