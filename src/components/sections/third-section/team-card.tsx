import React from "react";
import { Box, SvgIconProps, Typography, useTheme } from "@mui/material";
import ImagePlaceholder from "../../../images/team/placeholder.webp";
import SaibTeamBackground from "../../../images/team/saib-background.webp"

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
                    sx={{
                        backgroundImage: `url(${SaibTeamBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        width: 260,
                        borderRadius: 8,
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
                    </Box>
                    <Box
                        component="div"
                        sx={{
                            background: `linear-gradient(to bottom, 
                        ${theme.palette.teamCardGradient.tintLight}, 
                        ${theme.palette.teamCardGradient.tintDark}
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
            ))}
        </Box>
    );
};

export default TeamCard;
