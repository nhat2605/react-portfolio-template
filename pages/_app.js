import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
