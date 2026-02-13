import { Box, Card, Chip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import SaibPageIndicator from "../../common/SaibPageIndicator";

import AIMachineLearning from "../../../images/sections/section-three/AI Machine Learning.webp";
import MobileAndWeb from "../../../images/sections/section-three/Mobile and Web.webp";
import DesignAndResearch from "../../../images/sections/section-three/Design and Research.webp";
import EnterpriseB2B from "../../../images/sections/section-three/Enterprise B2B.webp";
import BlockchainArchitecture from "../../../images/sections/section-three/Blockchain Architecture.webp";
import Background from "../../../images/background/background-light.webp";

const Section3: React.FC = () => {
    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    const offeredItems = [
        {
            title: "AI & Machine Learning",
            image: AIMachineLearning,
            imageClassName: "max-sm:-right-4 max-sm:w-90! max-md:-right-50 max-lg:-right-82 max-lg:w-114! max-lg:relative p-8! pb-0!",
            imageHeight: "h-41.5",
            gradientClassName: "bottom-30 h-16",
            description: "Data-driven intelligence. We develop custom AI models and research-backed algorithms to automate processes and uncover actionable insights."
        },
        {
            title: "Mobile & Web Ecosystems",
            image: MobileAndWeb,
            imageClassName: "max-sm:-right-28 max-sm:w-100! max-md:-right-64 max-lg:-top-8 max-lg:-right-82 max-lg:w-128! max-lg:relative p-8! pb-0!",
            imageHeight: "h-41.5",
            gradientClassName: "bottom-16 h-30",
            description: "Native and cross-platform development (iOS/Android) ensuring your product is accessible, responsive, and performant on any device."
        },
        {
            title: "Blockchain Architecture",
            image: BlockchainArchitecture,
            imageClassName: "max-sm:top-62 max-lg:-top-0 max-lg:-right-20 max-lg:w-80! max-lg:absolute",
            imageHeight: "max-lg:h-41.5 h-max",
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
        className="min-h-max lg:h-screen"
    >
        <div className="container mx-auto max-sm:py-16 py-30 space-y-16! px-4 lg:px-9">
            <div className="flex flex-col items-center lg:items-start">
                <div>
                    <Chip label="Why we exist" sx={{ borderColor: "primary.dark", color: "primary.dark" }} className="py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                </div>
                <div className="w-full flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between mt-6 gap-4 lg:gap-0">
                    <Typography className="text-[32px]! sm:text-[48px]! lg:text-[60px]! leading-[1.1]!">
                        <span style={{ color: theme.palette.text.primary }}>Comprehensive </span>
                        <span style={{ color: theme.palette.primary.main }}>Digital <br/> Solutions</span>
                    </Typography>
                    <Typography sx={{ color: "text.primary" }} className=" font-light! text-sm! sm:text-base! lg:text-xl!">
                        Full-stack capabilities to bring your vision from concept to <br className="hidden lg:inline"/> production
                    </Typography>
                </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-4">
                {offeredItems.map((item, index) => (
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
                ))}
            </div>

            {/* Mobile/tablet carousel */}
            <div className="lg:hidden flex flex-col items-center gap-6">
                <Card
                    key={activeIndex}
                    sx={{
                        bgcolor: "background.default",
                    }}
                    className="max-sm:h-auto max-md:h-79.5 max-lg:h-73.5 relative overflow-hidden rounded-2xl! w-full animate-fade-in"
                >
                    <div className={`${offeredItems[activeIndex].imageHeight} -z-10`}>
                        <div className={`overflow-hidden ${offeredItems[activeIndex].imageClassName}`}>
                            {offeredItems[activeIndex].image && (
                                <img src={offeredItems[activeIndex].image} alt={offeredItems[activeIndex].title} className="w-full object-cover" />
                            )}
                            <div className={`max-lg:hidden absolute left-0 right-0 ${offeredItems[activeIndex].gradientClassName} backdrop-blur-sm`} style={{ background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`, maskImage: "linear-gradient(to top, black, transparent)" }} />
                        </div>
                    </div>
                    <div className="relative p-8! pt-0! space-y-4! z-10!">
                        <Typography sx={{ color: "text.primary" }} className="text-2xl! font-semibold!">
                            {offeredItems[activeIndex].title}
                        </Typography>
                        <Typography sx={{ color: "text.primary" }} className="font-light! text-base!">
                            {offeredItems[activeIndex].description}
                        </Typography>
                    </div>
                </Card>
                <SaibPageIndicator
                    count={offeredItems.length}
                    activeIndex={activeIndex}
                    onSelect={setActiveIndex}
                />
            </div>
        </div>
    </Box>
    );
};

export default Section3;
