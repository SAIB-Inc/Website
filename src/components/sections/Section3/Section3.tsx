import { Box, Card, Chip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

import AIMachineLearning from "../../../images/sections/section-three/AI Machine Learning.webp";
import MobileAndWeb from "../../../images/sections/section-three/Mobile and Web.webp";
import DesignAndResearch from "../../../images/sections/section-three/Design and Research.webp";
import EnterpriseB2B from "../../../images/sections/section-three/Enterprise B2B.webp";
import BlockchainArchitecture from "../../../images/sections/section-three/Blockchain Architecture.webp";
import Background from "../../../images/background/background-light.webp";

const Section3: React.FC = () => {
    const theme = useTheme();

    const offeredItems = [
        {
            title: "AI & Machine Learning",
            image: AIMachineLearning,
            imageClassName: "p-8! pb-0!",
            imageHeight: "h-41.5",
            gradientClassName: "bottom-30 h-16",
            description: "Data-driven intelligence. We develop custom AI models and research-backed algorithms to automate processes and uncover actionable insights."
        },
        {
            title: "Mobile & Web Ecosystems",
            image: MobileAndWeb,
            imageClassName: "p-8! pb-0!",
            imageHeight: "h-41.5",
            gradientClassName: "bottom-16 h-30",
            description: "Native and cross-platform development (iOS/Android) ensuring your product is accessible, responsive, and performant on any device."
        },
        {
            title: "Blockchain Architecture",
            image: BlockchainArchitecture,
            imageClassName: "",
            imageHeight: "h-max",
            cardClassName: "row-span-2",
            gradientClassName: "bottom-38 h-16",
            description: "End-to-end decentralized development ensuring transparency and immutability."
        },
        {
            title: "UI/UX Design & Research",
            image: DesignAndResearch,
            imageClassName: "absolute -right-30 -top-10",
            imageHeight: "h-41.5",
            gradientClassName: "bottom-5 h-34",
            description: "User-centric product design rooted in deep behavioral research, ensuring high adoption rates and seamless customer journeys"
        },
        {
            title: "Enterprise B2B Solutions",
            image: EnterpriseB2B,
            imageClassName: "absolute -top-16",
            imageHeight: "h-41.5",
            gradientClassName: "-bottom-2 h-37",
            description: "Scalable SaaS architectures designed to handle complex business logic, high traffic, and critical operational workflows."
        }
    ]

    return (
    <Box
        component="section"
        sx={{
            bgcolor: "background.default",
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "repeat",
        }}
        className="h-screen min-h-max"
    >
        <div className="container mx-auto py-30 px-9 space-y-16!">
            <div>
                <div>
                    <Chip label="Why we exist" sx={{ borderColor: "primary.dark", color: "primary.dark" }} className="py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                </div>
                <div className="w-full flex justify-between mt-6">
                    <Typography className="text-[60px]! leading-[1.1]!">
                        <span style={{ color: theme.palette.text.primary }}>Comprehensive </span>
                        <span style={{ color: theme.palette.primary.main }}>Digital <br/> Solutions</span>
                    </Typography>
                    <Typography sx={{ color: "text.primary" }} className="font-light! text-xl!">
                        Full-stack capabilities to bring your vision from concept to <br/> production
                    </Typography>
                </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
                {offeredItems.map((item, index) => {
                    return(
                        <Card
                            key={index}
                            sx={{
                                bgcolor: "background.default",
                            }}
                            className={`relative overflow-hidden rounded-2xl! ${"cardClassName" in item && item.cardClassName ? item.cardClassName : ""}`}
                        >
                            <div className={`${item.imageHeight} -z-10`}>
                                <div className={`overflow-hidden ${item.imageClassName}`}>
                                    {item.image && (
                                        <img src={item.image} alt={item.title} className="w-full object-cover" />
                                    )}
                                    <div className={`absolute left-0 right-0 ${item.gradientClassName} backdrop-blur-sm`} style={{ background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`, maskImage: "linear-gradient(to top, black, transparent)" }} />
                                </div>
                            </div>
                            <div className="relative p-8! pt-0! space-y-4! z-10!">
                                <Typography sx={{ color: "text.primary" }} className="text-2xl! font-semibold!">
                                    {item.title}
                                </Typography>
                                <Typography sx={{ color: "text.primary" }} className="font-light! text-base!">
                                    {item.description}
                                </Typography>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    </Box>
    );
};

export default Section3;
