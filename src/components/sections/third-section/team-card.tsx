import React, { useState } from "react";
import { Box, IconButton, SvgIconProps, Typography, useTheme } from "@mui/material";
import ImagePlaceholder from "../../../images/team/placeholder.webp";
import SaibTeamBackground from "../../../images/team/saib-background.webp";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Close } from "@mui/icons-material";
import SaibChip from "../../common/saib-chip";
import { Lightning1, Lightning2, Lightning3, Lightning4, Lightning5 } from "../../../images/sections/third-section";

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
    const [move, setMove] = useState(0);

    return (
        <div className="overflow-auto w-full h-130">
            <Box
                sx={{
                    display: "flex",
                    gap: 3,
                    marginTop: 1,
                    overflow: "visible",
                    width: "max-content",
                    transition: "all 0.3s ease-in-out",
                    transform: `translateX(-${148 * move}px)`
                }}
            >
                {items.map((datum, index) => {
                    const isExpanded = cardIndex === index;

                    return (
                        <div
                            className="relative"
                            key={datum.name}
                        >
                            <Box
                                component="div"
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    width: isExpanded ? 850 : 260,
                                    height: 480,
                                    borderRadius: 8,
                                    transition: "width 0.3s ease-in-out",
                                    display: "flex",
                                }}
                            >
                                <Box
                                    component="div"
                                    onClick={() => {
                                        const clickedIndex = items.indexOf(datum);
                                        const cardWidth = 850;
                                        const baseWidth = 260;
                                        const availableWidth = window.innerWidth;
                                        const expandedPos = clickedIndex * baseWidth + cardWidth;

                                        if (cardIndex === clickedIndex) {
                                            setCardIndex(null);
                                            setMove(0);
                                        } else {
                                            setCardIndex(clickedIndex);

                                            if (expandedPos > availableWidth) {
                                                const maxMove = items.length - Math.floor(availableWidth / baseWidth);
                                                const newMove = Math.min(clickedIndex - Math.floor(availableWidth / baseWidth) + 1, maxMove);
                                                setMove(newMove);
                                            } else {
                                                setMove(0);
                                            }
                                        }
                                    }}
                                    sx={{
                                        position: "relative",
                                        width: isExpanded ? 300 : 260,
                                        flexShrink: 0,
                                        backgroundImage: `url(${SaibTeamBackground})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease-in-out",
                                        overflow: "hidden",
                                        clipPath: isExpanded
                                            ? "polygon(0% 0%, 95% 0%, 74% 100%, 0% 100%)"
                                            : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
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
                                        className="transition-all"
                                    >
                                        <img
                                            src={datum.imageSrc ? datum.imageSrc.images?.fallback?.src : ImagePlaceholder}
                                            alt={datum.imageSrc ? datum.name : "placeholder"}
                                            className={`absolute bottom-0 scale-120`}
                                        />

                                    </Box>
                                    <Box
                                        component="div"
                                        sx={{
                                            background: `linear-gradient(to bottom, 
                                                ${theme.palette.gradient.teamCardGradient.tintLight},
                                                ${theme.palette.gradient.teamCardGradient.tintSecondary} 40%)`,
                                            position: "absolute",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            width: "100%",
                                            bottom: 0,
                                            height: 140,
                                            paddingY: 3.5,
                                            zIndex: 10,
                                            gap: 1.5,
                                            opacity: isExpanded ? 0 : 1,
                                            transition: "opacity 1s ease-in-out",
                                            transitionDelay: "0.2s",
                                        }}
                                        className={isExpanded ? "!hidden" : "!flex"}
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
                                                color={theme.palette.text.tertiary}
                                                sx={{ textTransform: "uppercase" }}
                                            >
                                                {datum.name}
                                            </Typography>
                                        </div>
                                        <div className="flex gap-4">
                                            {datum.tags.map((TagIcon, idx) => (
                                                <TagIcon key={idx} sx={{ color: theme.palette.text.tertiary }} />
                                            ))}
                                        </div>
                                    </Box>
                                </Box>
                                <div className={isExpanded ? "" : "hidden"}>
                                    <div className="absolute left-[214px] bottom-0 z-40 -rotate-3">
                                        <img
                                            alt="lightning 2"
                                            src={Lightning2}
                                        />
                                    </div>
                                    <div className="absolute left-60 top-0 z-40 -rotate-4">
                                        <img
                                            alt="lightning 3"
                                            src={Lightning3}
                                        />
                                    </div>
                                    <div className="absolute left-55 top-30 z-40 w-8 -rotate-30">
                                        <img
                                            alt="lightning 4"
                                            src={Lightning4}
                                        />
                                    </div>
                                </div>
                                <Box
                                    sx={{
                                        width: isExpanded ? 600 : 100,
                                        minWidth: isExpanded ? 630 : 100,
                                        opacity: isExpanded ? 1 : 0,
                                        transition: "all 0.3s ease-in-out",
                                        background: `linear-gradient(to top left, 
                                    ${theme.palette.gradient.teamCardGradient.main}, 
                                    ${theme.palette.gradient.teamCardGradient.secondary}
                                )`,
                                        padding: isExpanded ? 3 : 0,
                                        textAlign: "left",
                                        zIndex: isExpanded ? 30 : -10,
                                        clipPath: isExpanded
                                            ? "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)"
                                            : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                        borderRadius: "0px 32px 32px 0px",
                                    }}
                                    className="relative -left-20 flex flex-col overflow-visible !pl-28"
                                >
                                    <div className="flex justify-end">
                                        <IconButton
                                            onClick={() => {
                                                const clickedIndex = items.indexOf(datum);
                                                const cardWidth = 850;
                                                const baseWidth = 260;
                                                const availableWidth = window.innerWidth;
                                                const expandedPos = clickedIndex * baseWidth + cardWidth;

                                                if (cardIndex === clickedIndex) {
                                                    setCardIndex(null);
                                                    setMove(0);
                                                } else {
                                                    setCardIndex(clickedIndex);

                                                    if (expandedPos > availableWidth) {
                                                        const maxMove = items.length - Math.floor(availableWidth / baseWidth);
                                                        const newMove = Math.min(clickedIndex - Math.floor(availableWidth / baseWidth) + 1, maxMove);
                                                        setMove(newMove);
                                                    } else {
                                                        setMove(0);
                                                    }
                                                }
                                            }}>
                                            <Close sx={{ color: theme.palette.secondary.light }} />
                                        </IconButton>
                                    </div>
                                    <div
                                        className="flex flex-col h-full justify-between"
                                        style={{
                                            opacity: isExpanded ? 1 : 0,
                                            transition: isExpanded
                                                ? "opacity 0.2s ease-in-out"
                                                : "none",
                                            transitionDelay: isExpanded ? "0.2s" : "0s",
                                        }}
                                    >
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <div className="relative inline-flex items-center justify-center">
                                                    <Typography
                                                        component="h4"
                                                        variant="h4"
                                                        color={theme.palette.info.main}
                                                    >
                                                        {datum.name || "John Doe"}
                                                    </Typography>
                                                    <div className="relative -top-4">
                                                        <img
                                                            alt="lightning 1"
                                                            src={Lightning1}
                                                        />
                                                    </div>
                                                </div>
                                                {React.createElement(datum.tags[0], {
                                                    sx: {
                                                        color: theme.palette.text.tertiary,
                                                        fontSize: 38
                                                    }
                                                })}
                                            </div>
                                            <Typography
                                                component="h6"
                                                variant="h6"
                                                color={theme.palette.text.tertiary}
                                            >
                                                {datum.position || "No given position"}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography
                                                component="p"
                                                variant="body2"
                                                color={theme.palette.text.tertiary}
                                            >
                                                {datum.description || "No given description"}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography
                                                component="p"
                                                variant="subtitle2"
                                                color={theme.palette.text.tertiary}
                                            >
                                                Skills
                                            </Typography>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {datum.skills?.map((skill, index) => (
                                                    <SaibChip
                                                        key={index}
                                                        content={skill}
                                                        sx={{
                                                            color: theme.palette.text.tertiary,
                                                            backgroundColor: "none",
                                                        }}
                                                        fontSize={theme.typography.h6.fontSize}
                                                        fontWeight={400}
                                                    />
                                                ))}
                                            </div>
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
                                    </div>
                                </Box>
                            </Box>
                            <div className={isExpanded ? "absolute -top-[16px] -right-[7px]" : "hidden"}>
                                <img
                                    src={Lightning5}
                                    alt="lightning 5"
                                />
                            </div>
                        </div>
                    );
                })}
            </Box>
        </div>
    );
};

export default TeamCard;