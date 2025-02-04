import React, { useState } from "react";
import { Box, SvgIconProps, Typography, useTheme } from "@mui/material";
import ImagePlaceholder from "../../../images/team/placeholder.webp";
import SaibTeamBackground from "../../../images/team/saib-background.webp";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface TeamCardProps {
    items: {
        name: string;
        position: string;
        imageSrc: IGatsbyImageData;
        group: string;
        tags: React.ComponentType<SvgIconProps>[];
        description?: string;
    }[];
}

const TeamCard: React.FC<TeamCardProps> = ({ items }) => {
    const theme = useTheme();
    const [cardIndex, setCardIndex] = useState<number | null>(null);

    return (
        <Box
            sx={{
                display: "flex",
                gap: 2.5,
                overflow: "auto",
                width: "max-content",

            }}
        >
            {items.map((datum, index) => (
                <Box
                    key={index}
                    component="div"
                    onMouseEnter={() => setCardIndex(index)}
                    onMouseLeave={() => setCardIndex(null)}
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        width: cardIndex === index ? 480 : 260,
                        height: 400,
                        borderRadius: 8,
                        transition: 'width 0.3s ease-in-out',
                        display: 'flex',
                    }}
                >
                    <Box
                        component="div"
                        sx={{
                            position: 'relative',
                            width: 260,
                            flexShrink: 0,
                            backgroundImage: `url(${SaibTeamBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%"
                            }}
                        >
                            {datum.imageSrc ? (
                                <img
                                    src={datum.imageSrc.images?.fallback?.src}
                                    alt={datum.name}
                                />
                            ) : (
                                <img
                                    src={ImagePlaceholder}
                                    alt="placeholder"
                                    className="absolute bottom-0"
                                />
                            )}
                        </Box>
                        <Box
                            component="div"
                            sx={{
                                background: `linear-gradient(to bottom, 
                                ${theme.palette.gradient.teamCardGradient.tintLight},
                                ${theme.palette.gradient.teamCardGradient.tintSecondary} 40%
                            )`,
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                width: "100%",
                                bottom: 0,
                                paddingY: 3.5,
                                zIndex: 10,
                                gap: 1.5,
                            }}
                        >
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
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: cardIndex === index ? 220 : 0,
                            opacity: cardIndex === index ? 1 : 0,
                            transition: 'all 0.3s ease-in-out',
                            overflow: 'hidden',
                            background: `linear-gradient(to top left, 
                                ${theme.palette.gradient.teamCardGradient.main}, 
                                ${theme.palette.gradient.teamCardGradient.secondary}
                            )`,
                            padding: cardIndex === index ? 3 : 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <div>
                            <Typography
                                component="h4"
                                variant="h4"
                                color="white"
                                sx={{
                                    opacity: cardIndex === index ? 1 : 0,
                                    transition: 'opacity 0.2s ease-in-out',
                                    transitionDelay: '0.1s',
                                }}
                            >
                                {datum.name || "Additional information about team member can go here."}
                            </Typography>
                            <Typography
                                component="h6"
                                variant="h6"
                                color="white"
                                sx={{
                                    opacity: cardIndex === index ? 1 : 0,
                                    transition: 'opacity 0.2s ease-in-out',
                                    transitionDelay: '0.1s',
                                }}
                            >
                                {datum.position || "Additional information about team member can go here."}
                            </Typography>
                        </div>
                        <div>
                            
                        </div>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default TeamCard;