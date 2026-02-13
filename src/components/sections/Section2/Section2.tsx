import { Box, Chip, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import React, { useState } from "react"

import Globe from "../../../images/globe.webp"
import Background from "../../../images/background/background-light.webp"
import Security from "../../../images/icons/Security"
import Sustainable from "../../../images/icons/Sustainable"
import Scalable from "../../../images/icons/Scalable"

const Section2: React.FC = () => {
    const theme = useTheme();
    const [expandedIndex, setExpandedIndex] = useState(0);

    const businessValues = [
        {
            title: "Security First",
            icon: <Security sx={{ color: "white", fontSize: 20 }} />,
            description: "Built on Cardano's peer-reviewed, formally verified protocols"
        },
        {
            title: "Sustainable",
            icon: <Sustainable sx={{ color: "white", fontSize: 20 }} />,
            description: "Built on Cardano's peer-reviewed, formally verified protocols"
        },
        {
            title: "Scalable",
            icon: <Scalable sx={{ color: "white", fontSize: 20 }} />,
            description: "Built on Cardano's peer-reviewed, formally verified protocols"
        },
    ]

    return (
        <Box
            component="section"
            sx={{
                bgcolor: "background.default",
                backgroundImage: `url(${Background})`,
                backgroundRepeat: "repeat",
            }}
            className="h-screen"
        >
            <div className="container mx-auto flex items-center justify-between py-40 px-9">
                <div className="h-full flex flex-col justify-between">
                    <div>
                        <Chip label="Why we exist" sx={{ borderColor: "primary.dark", color: "primary.dark" }} className="px-3! py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                        <Typography className="text-[60px]! leading-[1.1]! mt-4!">
                            <span style={{ color: theme.palette.text.primary }}>Engineering</span><br/>
                            <span style={{ color: theme.palette.primary.main }}>Business Value</span>
                        </Typography>
                    </div>
                    <div className="flex flex-col gap-3 mt-8">
                        {businessValues.map((item, index) => {
                            const isExpanded = expandedIndex === index;
                            return (
                                <div
                                    key={item.title}
                                    onClick={() => setExpandedIndex(index)}
                                    className={`flex gap-3 p-4 rounded-[20px] cursor-pointer transition-all max-w-154.75 ${
                                        isExpanded
                                            ? "text-white"
                                            : "bg-transparent border"
                                    }`}
                                    style={{
                                        backgroundColor: isExpanded ? theme.palette.primary.main : undefined,
                                        borderColor: isExpanded ? undefined : theme.palette.secondary.dark,
                                    }}
                                >
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 mt-0.5"
                                        style={{ background: `linear-gradient(to bottom, ${theme.palette.brand.gradient.iconStart}, ${theme.palette.brand.gradient.iconEnd})` }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <Typography
                                            className={`text-2xl! leading-10! ${isExpanded ? "text-white!" : ""}`}
                                            style={{ color: isExpanded ? undefined : theme.palette.text.primary }}
                                        >
                                            {item.title}
                                        </Typography>
                                        {isExpanded && (
                                            <Typography className="text-white/80! text-xl! mt-1! font-light!">
                                                {item.description}
                                            </Typography>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="h-full flex flex-col justify-between max-w-[707px]">
                    <Typography className="max-w-[650px] font-light! mt-10!">
                        We don&apos;t just deliver software; we deliver competitive advantages. By integrating advanced Machine Learning, intuitive UI/UX, and secure Blockchain architecture, we create holistic digital ecosystems designed for high-growth enterprises.
                    </Typography>
                    <img src={Globe} alt="globe" className="mb-[-90px]!"/>
                </div>
            </div>
        </Box>
    )
}

export default Section2;
