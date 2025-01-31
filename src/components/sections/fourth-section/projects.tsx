import { Typography, useTheme } from "@mui/material";
import React from "react";
import { Aegis, Argus } from "../../../images/brands";
import { OpenInNew } from "@mui/icons-material";
import BrandCard from "./brand-card";

const Projects: React.FC = () => {
    const theme = useTheme()

    const projectsData = [
        {
            brand: Aegis,
            name: "Aegis",
            description: "Automated stake pool manager. Effortlessly collect rewards while supporting pools you care for with hassle-free pool selection.",
            gradient: `linear-gradient(to bottom right,
                ${theme.palette.gradient.aegis.main},
                ${theme.palette.gradient.aegis.secondary}
            )`,
            socials: [
                {
                    icon: OpenInNew,
                    link: "https://cardano.ideascale.com/c/cardano/idea/128406"
                }
            ]
        },
        {
            brand: Argus,
            name: "Argus",
            description: "A .NET library that simplifies interactions with the Cardano blockchain by providing an efficient indexing framework.",
            gradient: `linear-gradient(to bottom right,
                ${theme.palette.gradient.argus.main},
                ${theme.palette.gradient.argus.secondary}
            )`,
            socials: [
                {
                    icon: OpenInNew,
                    link: "https://projectcatalyst.io/funds/12/f12-cardano-open-developers/cardanosync-or-a-netc-indexing-framework-for-cardano"
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center text-center py-25">
            <div>
                <Typography
                    component="h6"
                    variant="h6"
                    color="secondary"
                >
                    Tools we developed...
                </Typography>
                <Typography
                    component="h3"
                    variant="h3"
                >
                    Our Projects
                </Typography>
            </div>
            <div className="flex mt-14 gap-10 w-full flex-wrap">
                {projectsData.map((datum, index) => (
                    <BrandCard
                        key={index}
                        brand={datum.brand}
                        name={datum.name}
                        description={datum.description}
                        background={datum.gradient}
                        socials={datum.socials}
                        sx={{
                            width: 480,
                        }}
                        bordered={false}
                        iconSize={40}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;