import { Box, Link } from "@mui/material";
import React, { useEffect, useState } from "react";

import LogoLight from "../../images/brand/saib-logo-light.svg";
import LogoDark from "../../images/brand/saib-logo-dark.svg";
import SaibButton from "./SaibButton";

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
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
            <div className="container mx-auto! flex items-center justify-between py-3.5 px-9">
                <div>
                    <img src={scrolled ? LogoDark : LogoLight} alt="saib-logo" />
                </div>
                <div>
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
                <div>
                    <SaibButton className="w-35.5 h-10">
                        Start your project
                    </SaibButton>
                </div>
            </div>
        </Box>
    );
};

export default Header;
