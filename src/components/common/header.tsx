import { Box, Drawer, IconButton, Link, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";

import LogoLight from "../../images/brand/saib-logo-light.svg";
import LogoDark from "../../images/brand/saib-logo-dark.svg";
import SaibButton from "./SaibButton";

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    // TODO: use currentPath for active nav matching once distinct routes are set up
    // Const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY >= window.innerHeight);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigationItems = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/",
        },
        {
            name: "Services",
            href: "/",
        },
        {
            name: "Documentation",
            href: "/",
        },
        {
            name: "Articles",
            href: "/",
        },
        {
            name: "Careers",
            href: "/",
        },
    ]

    return (
        <Box
            component="header"
            sx={{
                bgcolor: scrolled ? "brand.lightText" : "transparent",
                transition: "background-color 0.3s ease",
            }}
            className="fixed z-100 w-full backdrop-blur-md"
        >
            <div className="container mx-auto! flex items-center justify-between py-3.5 px-4 md:px-9">
                <div>
                    <img src={scrolled ? LogoDark : LogoLight} alt="saib-logo" />
                </div>
                {/* Desktop nav */}
                <div className="hidden lg:block">
                    <ul className="space-x-6 flex items-center">
                        {navigationItems.map((item) => (
                            <Box
                                component={"li"}
                                key={item.name}
                            >
                                <Link
                                    href={item.href}
                                    underline="none"
                                    sx={{
                                        color: scrolled ? "text.primary" : "brand.lightText",
                                        fontWeight: item.name === "Home" ? 700 : 400,
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </Box>
                        )
                        )}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <SaibButton className="w-35.5 h-10">
                        Start your project
                    </SaibButton>
                </div>
                {/* Mobile hamburger */}
                <IconButton
                    className="lg:hidden!"
                    onClick={() => setDrawerOpen(true)}
                    sx={{ color: scrolled ? "text.primary" : "brand.lightText" }}
                >
                    <MenuIcon />
                </IconButton>
            </div>

            {/* Mobile drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                slotProps={{
                    paper: {
                        sx: {
                            bgcolor: "background.default",
                            width: "100%",
                            maxWidth: 320,
                            boxShadow: "none",
                        },
                    },
                }}
            >
                <div className="flex items-center justify-end p-4">
                    <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "text.primary" }}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <List className="px-4!">
                    {navigationItems.map((item) => (
                        <ListItem key={item.name} className="px-0!">
                            <Link
                                href={item.href}
                                underline="none"
                                onClick={() => setDrawerOpen(false)}
                                sx={{
                                    color: "text.primary",
                                    fontWeight: item.name === "Home" ? 700 : 400,
                                    fontSize: "1.125rem",
                                    py: 1,
                                }}
                            >
                                {item.name}
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <div className="px-4 mt-4">
                    <SaibButton className="w-full h-10" onClick={() => setDrawerOpen(false)}>
                        Start your project
                    </SaibButton>
                </div>
            </Drawer>
        </Box>
    );
};

export default Header;
