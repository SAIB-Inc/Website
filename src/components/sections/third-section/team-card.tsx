import React, { useState } from "react";
import { Box, IconButton, SvgIconProps, Typography, useTheme } from "@mui/material";
import ImagePlaceholder from "../../../images/team/placeholder.webp";
import SaibTeamBackground from "../../../images/team/saib-background.webp";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Close } from "@mui/icons-material";

interface TeamCardProps {
    items: {
        name: string;
        position: string;
        imageSrc: IGatsbyImageData;
        group: string;
        description?: string;
        skills?: string[];
        socials?: {
            label: string;
            icon: React.ComponentType<SvgIconProps>;
            link: string;
        }[];
        tags: React.ComponentType<SvgIconProps>[];
    }[];
}

const TeamCard: React.FC<TeamCardProps> = ({ items }) => {
    const theme = useTheme();
    const [cardIndex, setCardIndex] = useState<number | null>(null);
    const [orderedItems, setOrderedItems] = useState(items);
    const handleCardClick = (clickedIndex: number) => {
        const newOrder = [
            ...items.slice(clickedIndex),
            ...items.slice(0, clickedIndex)
        ];

        setOrderedItems(newOrder);
        setCardIndex(0);
    };

    return (
        <Box
            sx={{
                display: "flex",
                gap: 2.5,
                overflow: "auto",
                width: "max-content",
            }}
        >
            {orderedItems.map((datum, index) => {
                const isExpanded = cardIndex === index;

                return (
                    <Box
                        key={datum.name}
                        component="div"
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            width: isExpanded ? 750 : 260,
                            height: 400,
                            borderRadius: 8,
                            transition: "width 0.3s ease-in-out",
                            display: "flex",
                        }}
                    >
                        <Box
                            component="div"
                            onClick={() => handleCardClick(items.indexOf(datum))}
                            sx={{
                                position: "relative",
                                width: 260,
                                flexShrink: 0,
                                backgroundImage: `url(${SaibTeamBackground})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                cursor: "pointer",
                            }}
                        >
                            <Box
                                component="div"
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
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
                                    ${theme.palette.gradient.teamCardGradient.tintSecondary} 40%)`,
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
                                        sx={{ textTransform: "uppercase" }}
                                    >
                                        {datum.name}
                                    </Typography>
                                </div>
                                <div className="flex gap-4">
                                    {datum.tags.map((TagIcon, idx) => (
                                        <TagIcon key={idx} sx={{ color: "white" }} />
                                    ))}
                                </div>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: isExpanded ? 487 : 0,
                                opacity: isExpanded ? 1 : 0,
                                transition: "all 0.3s ease-in-out",
                                overflow: "hidden",
                                background: `linear-gradient(to top left, 
                                    ${theme.palette.gradient.teamCardGradient.main}, 
                                    ${theme.palette.gradient.teamCardGradient.secondary}
                                )`,
                                padding: isExpanded ? 3 : 0,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                textAlign: "left",
                            }}
                        >
                            <div className="flex justify-end">
                                <IconButton onClick={() => setCardIndex(null)}>
                                    <Close sx={{ color: theme.palette.secondary.light }} />
                                </IconButton>
                            </div>

                            <div>
                                <Typography
                                    component="h4"
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        opacity: isExpanded ? 1 : 0,
                                        transition: "opacity 0.2s ease-in-out",
                                        transitionDelay: "0.1s",
                                    }}
                                >
                                    {datum.name || "Additional information about team member can go here."}
                                </Typography>
                                <Typography
                                    component="h6"
                                    variant="h6"
                                    color={theme.palette.info.main}
                                    sx={{
                                        opacity: isExpanded ? 1 : 0,
                                        transition: "opacity 0.2s ease-in-out",
                                        transitionDelay: "0.1s",
                                    }}
                                >
                                    {datum.position || "Additional information about team member can go here."}
                                </Typography>
                            </div>

                            <div>
                                <Typography component="p" variant="body2" color="white">
                                    {datum.description || "No given description"}
                                </Typography>
                            </div>

                            <div>
                                <Typography component="p" variant="subtitle2" color="white">
                                    Skills
                                </Typography>
                            </div>
                            <div className="space-x-2!">
                                {datum.socials?.map((social, idx) => (
                                    <IconButton
                                        key={idx}
                                        href={social.link}
                                        aria-label={social.label}
                                        target="_blank"
                                        sx={{
                                            border: "1px solid white",
                                            height: 32,
                                            width: 32,
                                            boxShadow: theme.shadows[0],
                                            "&:hover": { borderColor: theme.palette.button.hover },
                                        }}
                                    >
                                        <social.icon sx={{ color: "white" }} />
                                    </IconButton>
                                ))}
                            </div>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
};

export default TeamCard;