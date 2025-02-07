import React from "react";
import SaibIconLight from "../../images/saib-logo-light.svg";
import MeshLeft from "../../images/sections/footer/mesh-left.webp"
import MeshRight from "../../images/sections/footer/mesh-right.webp"
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Facebook, Github, LinkedIn, X } from "../../images/socials";

const Footer: React.FC = () => {

    const socials = [
        {
            label: "Facebook",
            icon: Facebook,
            link: "https://www.facebook.com/saibllc"
        },
        {
            label: "LinkedIn",
            icon: LinkedIn,
            link: "https://www.linkedin.com/company/saibllc/"
        },
        {
            label: "X",
            icon: X,
            link: "https://x.com/saibdev"
        },
        {
            label: "Github",
            icon: Github,
            link: "https://github.com/SAIB-Inc"
        }
    ]

    const menuItems = [
        {
            name: "About",
            link: "about"
        },
        {
            name: "Services",
            link: "services"
        },
        {
            name: "Our Team",
            link: "our-team"
        },
        {
            name: "Our Work",
            link: "our-work"
        }
    ];

    const theme = useTheme();
    const scrollToNextSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        e.preventDefault();
        const nextSection = document.getElementById(id);
        if (nextSection) {
            setTimeout(() => {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.background.footer,
                height: 296,
                position: "relative"
            }}
        >
            <div className="absolute top-0 left-0">
                <img src={MeshLeft} className="z-10" />
            </div>
            <div className="absolute top-0 right-0">
                <img src={MeshRight} className="z-10" />
            </div>
            <div className="max-w-(--breakpoint-xl) mx-auto h-full relative z-40">
                <div className="w-full flex items-center justify-between h-[70%] pt-12">
                    <div>
                        <a onClick={(e) => scrollToNextSection(e, "home")} className="cursor-pointer">
                            <img src={SaibIconLight} alt="saib-logo" />
                        </a>
                    </div>
                    <div className="flex gap-20">
                        <ul className="space-y-5">
                            {menuItems.map((item) => (
                                <Box
                                    component="li"
                                    key={item.name}
                                    sx={{
                                        cursor: "pointer",
                                        color: "white",
                                        "& a": {
                                            textAlign: "center",
                                            position: "relative",
                                            transition: "color 0.15s ease, font-weight 0.15s ease",
                                            "&:before": {
                                                content: `"${item.name}"`,
                                                fontWeight: "bold",
                                                height: 0,
                                                overflow: "hidden",
                                                visibility: "hidden",
                                                display: "block",
                                            },
                                            "&:hover": {
                                                color: theme.palette.text.secondary,
                                                fontWeight: "bold",
                                            },
                                        },
                                    }}
                                >
                                    <Typography
                                        component="a"
                                        variant="body2"
                                        onClick={(e) => scrollToNextSection(e, item.link)}
                                    >
                                        {item.name}
                                    </Typography>
                                </Box>
                            ))}
                        </ul>
                        <div>
                            <div>
                                <Typography
                                    component="p"
                                    variant="h6"
                                    color="white"
                                >
                                    Let&apos;s keep in touch
                                </Typography>
                            </div>
                            <div className="space-x-4! mt-3">
                                {socials.map((datum, index) => (
                                    <IconButton
                                        key={index}
                                        href={datum.link}
                                        aria-label={datum.label}
                                        target="_blank"
                                        sx={{
                                            border: "1px solid white",
                                            height: 32,
                                            width: 32,
                                        }}
                                    >
                                        {React.createElement(datum.icon, { sx: { color: "white" } })}
                                    </IconButton>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography
                        component="p"
                        variant="body2"
                        color="white"
                    >
                        &copy; Softwarez At Its Best, Inc. 2025. All Rights Reserved
                    </Typography>
                </div>
            </div>
        </Box>
    );
};

export default Footer;