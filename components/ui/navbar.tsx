import NextLink from "next/link";

import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

export const Navbar = () => {
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton size="large" edge="start">
                    <MenuOutlined />
                </IconButton>

                <NextLink href="/" style={{ textDecoration: "none" }}>
                    <Typography variant="h6" color="white">
                        CookieMaster
                    </Typography>
                </NextLink>

                <div style={{ flex: 1 }} />

                <NextLink
                    href="/theme-changer"
                    style={{ textDecoration: "none" }}
                >
                    <Typography variant="h6" color="white">
                        Cambiar Tema
                    </Typography>
                </NextLink>
            </Toolbar>
        </AppBar>
    );
};
