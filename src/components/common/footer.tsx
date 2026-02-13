import { Box, Link, Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

import SaibBrand from "../../images/brand/saib-brand.webp";
import Background from "../../images/background/background-light.webp";

const Footer: React.FC = () => {
    const footerItems = [
        {
            category: "Company",
            items: [
                {
                    title: "About us",
                    link: ""
                },
                {
                    title: "Contact us",
                    link: ""
                },
                {
                    title: "Articles",
                    link: ""
                },
                {
                    title: "Careers",
                    link: ""
                },
                {
                    title: "Sitemap",
                    link: ""
                }
            ]
        },
        {
            category: "Products & Services",
            items: [
                {
                    title: "Our services",
                    link: ""
                },
                {
                    title: "Documentation",
                    link: ""
                },
                {
                    title: "Get a quote",
                    link: ""
                },
                {
                    title: "Help desk",
                    link: ""
                },
                {
                    title: "Support",
                    link: ""
                }
            ]
        },
        {
            category: "Legal",
            items: [
                {
                    title: "Privacy Policy",
                    link: ""
                },
                {
                    title: "Terms & Conditions",
                    link: ""
                }
            ]
        }

    ];

    const socialItems = [
        {
            title: "x",
            icon: <XIcon />,
            link: ""
        },
        {
            title: "facebook",
            icon: <FacebookIcon />,
            link: ""
        },
        {
            title: "github",
            icon: <GitHubIcon />,
            link: ""
        },
        {
            title: "linkedin",
            icon: <LinkedInIcon />,
            link: ""
        }
    ]

    return(
        <Box
            component="footer"
            sx={{
                bgcolor: "background.default",
                backgroundImage: `url(${Background})`,
                backgroundRepeat: "repeat",
            }}
            className="p-32!"
        >
            <div className="container mx-auto flex flex-col gap-[63px]">
                <div className="w-full flex justify-between">
                    <div>
                        <img src={SaibBrand} alt="SAIB" className="w-73"/>
                    </div>
                    {footerItems.map((group) => (
                        <div key={group.category}>
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    textTransform: "uppercase",
                                    color: "text.secondary",
                                }}
                                className="text-[15px]! opacity-70! mb-4">
                                    {group.category}
                                </Typography>
                            <ul className="space-y-5 mt-5">
                                {group.items.map((item) => (
                                    <li key={item.title}>
                                        <Link
                                            href={item.link || "#"}
                                            underline="none"
                                            sx={{
                                                fontWeight: 300,
                                                color: "text.primary",
                                            }}
                                            className="text-sm opacity-70!"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="w-full flex items-center justify-between">
                    <div>
                        <Typography sx={{ fontWeight: 300, color: "text.secondary" }} className="text-[15px]!">
                            &copy; SAIB Inc 2026. All Right Reserved.
                        </Typography>
                    </div>
                    <div className="flex items-center gap-10">
                        {socialItems.map((item) => (
                            <Link key={item.title} href={item.link || "#"} underline="none" sx={{ color: "text.primary" }}>
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Footer;
