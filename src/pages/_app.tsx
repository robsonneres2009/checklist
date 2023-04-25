import type { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../styles/theme";
import { Layout } from "@/components/templates/layout";
import "leaflet/dist/leaflet.css";
import { FeedbackContextProvider } from "@/provider/FeedbackProvider";
import { ChecklistContextProvider } from "@/provider/CheckListProvider";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:  Roboto, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #E6E6E6;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  .Container{
    width: 100%;
    height: 100%;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChecklistContextProvider>
      <FeedbackContextProvider>
        <Layout>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </FeedbackContextProvider>
    </ChecklistContextProvider>
  );
}
