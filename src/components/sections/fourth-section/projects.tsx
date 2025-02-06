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
        <div className="flex flex-col items-center justify-center text-center py-15 lg:py-25">
            <div>
                <Typography
                    component="h6"
                    variant="h6"
                    color="secondary"
                    className="max-sm:!text-sm"
                >
                    Tools we developed...
                </Typography>
                <Typography
                    component="h3"
                    variant="h3"
                    className="max-sm:!text-4xl"
                >
                    Our Projects
                </Typography>
            </div>
            <div className="gap-10 w-full mt-14 grid grid-cols-1 md:grid-cols-2">
                {projectsData.map((datum, index) => (
                    <BrandCard
                        key={index}
                        brand={datum.brand}
                        name={datum.name}
                        description={datum.description}
                        background={datum.gradient}
                        socials={datum.socials}
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            minHeight: "100%",
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