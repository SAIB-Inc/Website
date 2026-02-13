import { Box, Button, Link } from "@mui/material";
import React from "react";

import Logo from "../../images/saib-logo.svg";

const Header: React.FC = () => {
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
            className="fixed inset-x-0 container mx-auto! flex items-center justify-between py-6 px-9 z-10"
        >
            <div>
                <img src={Logo} alt="saib-logo" />
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
                                >
                                    {item.name}
                                </Link>
                            </Box>
                        )
                    )}
                </ul>
            </div>
            <div>
                <Button
                    sx={{
                        borderRadius: "6px",
                        bgcolor: "primary.main",
                        textTransform: "Capitalize",
                        fontWeight: "500",
                    }}
                    className="w-35.5 h-10"
                >
                    Start your project
                </Button>
            </div>
        </Box>
    );
};

export default Header;