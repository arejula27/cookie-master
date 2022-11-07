import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../themes";
import { lightTheme } from "../themes/";
import { Theme } from "@mui/system";
import { customTheme } from "../themes/";

interface Props extends AppProps {
    theme: string;
}

export default function App({ Component, pageProps, theme }: Props) {
    console.log("hola", theme);

    const currentTheme: Theme =
        theme === "light"
            ? lightTheme
            : theme === "dark"
            ? darkTheme
            : customTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

App.getInitialProps = async (ctx: AppContext) => {
    const { theme } = ctx.ctx.req
        ? (ctx.ctx.req as any).cookies
        : { theme: "light" };

    const validThemes = ["light", "dark", "custom"];
    return {
        theme: validThemes.includes(theme) ? theme : "light",
    };
};
