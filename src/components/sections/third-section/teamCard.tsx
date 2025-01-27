import React from "react";
import { SvgIconProps, Typography, useTheme } from "@mui/material";
import ImagePlaceholder from "../../../images/team/placeholder.webp";
import SaibTeamBackground from "../../../images/team/saib-background.webp"
import SaibLogoLight from "../../../images/saib-logo-light.svg"

interface TeamCardProps {
    items: {
        name: string;
        position: string;
        imageSrc: any;
        group: string;
        tags: React.ComponentType<SvgIconProps>[];
    }[];
}

const TeamCard: React.FC<TeamCardProps> = ({ items }) => {
    const theme = useTheme();

    return (
        <div className="flex gap-x-5 overflow-auto w-max rounded-4x">
            {items.map((datum, index) => (
                <div
                    key={index}
                    className="bg-cover bg-center w-65 rounded-4xl relative overflow-hidden"
                    style={{
                        backgroundImage: `url(${SaibTeamBackground})`,
                    }}
                >
                    <div className="w-[60px] absolute top-5 left-5">
                        <img alt="saib logo light" src={SaibLogoLight} />
                    </div>
                    <div className="h-full flex items-center justify-center">
                        {datum.imageSrc ? (
                            <img
                                src={datum.imageSrc.childImageSharp.gatsbyImageData.images.fallback.src}
                                alt={datum.name}
                            />
                        ) : (
                            <img
                                src={ImagePlaceholder}
                                alt="placeholder"
                                className="absolute bottom-0"
                            />
                        )}
                    </div>
                    <div className="absolute bottom-6 z-10 text-center w-full flex flex-col gap-3 items-center justify-center">
                        <div>
                            <Typography
                                component="h6"
                                variant="teamCardSubtitle"
                                color={theme.palette.info.main}
                            >
                                {datum.position}
                            </Typography>
                            <Typography
                                component="h6"
                                variant="teamCardTitle"
                                color="white"
                                sx={{
                                    textTransform: "uppercase",
                                }}
                            >
                                {datum.name}
                            </Typography>
                        </div>
                        <div className="flex gap-4">
                            {datum.tags.map((tag, index) =>
                                React.createElement(tag, { key: index, sx: { color: "white" } })
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamCard;
