import {
    Card,
    CardContent,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
} from "@mui/material";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Layout } from "../components/layout";
import Cookie from "js-cookie";

interface Props {
    theme: string;
}

const ThemeChangerPage: FC<Props> = ({ theme }) => {
    console.log(theme);

    const [currentTheme, setCurrentTheme] = useState(theme);
    const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = event.target.value;

        console.log({ selectedTheme });
        setCurrentTheme(selectedTheme);

        localStorage.setItem("theme", selectedTheme);
        Cookie.set("theme", selectedTheme);
    };
    const onClick = async () => {
        const { data } = await axios.get("/api/hello");
        console.log(data);
    };
    //Esto se le en el cliente
    useEffect(() => {
        console.log(Cookie.get("theme"));
    }, []);

    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup
                            value={currentTheme}
                            onChange={onThemeChange}
                        >
                            <FormControlLabel
                                value="light"
                                control={<Radio />}
                                label="Light"
                            />
                            <FormControlLabel
                                value="dark"
                                control={<Radio />}
                                label="Dark"
                            />
                            <FormControlLabel
                                value="custom"
                                control={<Radio />}
                                label="Custom"
                            />
                        </RadioGroup>
                    </FormControl>

                    <Button onClick={onClick}>Solicitud</Button>
                </CardContent>
            </Card>
        </Layout>
    );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";
import axios from "axios";
import { light } from "@mui/material/styles/createPalette";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    // your fetch function here
    console.log(req.cookies.theme);
    //esto sucede en el server
    const { theme = "light" } = req.cookies;

    const validThemes = ["light", "dark", "custom"];

    return {
        props: {
            theme: validThemes.includes(theme) ? theme : "light",
        },
    };
};

export default ThemeChangerPage;
