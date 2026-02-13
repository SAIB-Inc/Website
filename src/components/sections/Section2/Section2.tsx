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
            icon: <Security sx={{ color: "primary.contrastText", fontSize: 20 }} />,
            description: "Built on Cardano's peer-reviewed, formally verified protocols"
        },
        {
            title: "Sustainable",
            icon: <Sustainable sx={{ color: "primary.contrastText", fontSize: 20 }} />,
            description: "Built on Cardano's peer-reviewed, formally verified protocols"
        },
        {
            title: "Scalable",
            icon: <Scalable sx={{ color: "primary.contrastText", fontSize: 20 }} />,
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
            className="lg:h-screen"
        >
            <div className="container mx-auto flex flex-col items-center md:flex-row md:items-center md:justify-between max-sm:py-16 py-40 px-4 md:gap-10! xl:gap-0! lg:px-9">
                <div className="h-full flex flex-col items-center md:items-start justify-between">
                    <div className="max-md:text-center! max-md:flex flex-col items-center">
                        <Chip label="Why we exist" sx={{ borderColor: "primary.dark", color: "primary.dark" }} className="py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                        <Typography className="text-[32px]! leading-[1.1]! mt-4! sm:text-[48px]! md:text-[40px]! xl:text-[60px]!">
                            <span style={{ color: theme.palette.text.primary }}>Engineering</span><br/>
                            <span style={{ color: theme.palette.primary.main }}>Business Value</span>
                        </Typography>
                    </div>
                    <div className="text-center! md:hidden!">
                        <Typography className="text-sm! max-w-162.5 font-light! mt-6! sm:text-base!">
                            We don&apos;t just deliver software; we deliver competitive advantages. By integrating advanced Machine Learning, intuitive UI/UX, and secure Blockchain architecture, we create holistic digital ecosystems designed for high-growth enterprises.
                        </Typography>
                    </div>
                    <div className="md:hidden!">
                        <img src={Globe} alt="globe" className="mt-6! w-full"/>
                    </div>
                    <div className="flex flex-col gap-3 mt-8">
                        {businessValues.map((item, index) => {
                            const isExpanded = expandedIndex === index;
                            return (
                                <div
                                    key={item.title}
                                    onClick={() => setExpandedIndex(index)}
                                    className={`flex gap-3 p-4 rounded-[20px] cursor-pointer transition-all max-w-154.75 md:p-3 xl:p-4 ${
                                        isExpanded
                                            ? ""
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
                                            className="leading-10! text-xl! xl:text-2xl!"
                                            style={{ color: isExpanded ? theme.palette.primary.contrastText : theme.palette.text.primary }}
                                        >
                                            {item.title}
                                        </Typography>
                                        {isExpanded && (
                                            <Typography className="font-light! text-sm! sm:mt-1! sm:text-lg! md:text-base! xl:text-xl!" style={{ color: theme.palette.primary.contrastText, opacity: 0.8 }}>
                                                {item.description}
                                            </Typography>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="hidden h-full! flex-col justify-between max-w-176.75 max-xl:gap-4! md:flex">
                    <div>
                        <Typography className="max-w-162.5 font-light! text-base! md:mt-0! xl:text-xl! lg:mt-10!">
                            We don&apos;t just deliver software; we deliver competitive advantages. By integrating advanced Machine Learning, intuitive UI/UX, and secure Blockchain architecture, we create holistic digital ecosystems designed for high-growth enterprises.
                        </Typography>
                    </div>
                    <div>
                        <img src={Globe} alt="globe" className="lg:w-160 xl:w-auto xl:-mb-22.5!"/>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Section2;
