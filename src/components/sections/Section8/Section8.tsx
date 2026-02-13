import { Box, Card, Chip, Typography } from "@mui/material"
import SaibButton from "../../common/SaibButton"
import SaibPageIndicator from "../../common/SaibPageIndicator"
import { useTheme } from "@mui/material/styles"
import React, { useState } from "react"

import Background from "../../../images/background/background-light.webp";
import BurizaLogo from "../../../images/projects/BurizaLogo";
import CompLogo from "../../../images/projects/CompLogo";
import RazorLogo from "../../../images/projects/RazorLogo";
import ChrysalisLogo from "../../../images/projects/ChrysalisLogo";
import FuturaLogo from "../../../images/projects/FuturaLogo";
import ArgusLogo from "../../../images/projects/ArgusLogo";

import ArgusBrand from "../../../images/projects/brand/argus-brand.webp";
import BurizaBrand from "../../../images/projects/brand/buriza-brand.webp";
import ChrysalisBrand from "../../../images/projects/brand/chrysalis-brand.webp";
import RazorBrand from "../../../images/projects/brand/razor-brand.webp";
import FuturaBrand from "../../../images/projects/brand/futura-brand.webp";
import CompBrand from "../../../images/projects/brand/comp-brand.webp";

import ArgusBg from "../../../images/projects/background/argus-bg.webp";
import BurizaBg from "../../../images/projects/background/buriza-bg.webp";
import ChrysalisBg from "../../../images/projects/background/chrysalis-bg.webp";
import RazorBg from "../../../images/projects/background/razor-bg.webp";
import FuturaBg from "../../../images/projects/background/futura-bg.webp";
import CompBg from "../../../images/projects/background/comp-bg.webp";

const projectItems = [
    {
        logo: ArgusLogo,
        name: "Argus",
        theme: "#5E1AB8",
        brand: ArgusBrand,
        brandSize: "h-22.5",
        bg: ArgusBg,
        bgPosition: "w-[110%] top-12 -right-28 lg:-bottom-12 lg:-right-72 lg:w-[642px]",
        description: "Cardano Blockchain Indexer for .NET",
        smDescClassName: "",
    },
    {
        logo: BurizaLogo,
        name: "Buriza",
        theme: "#001B5E",
        brand: BurizaBrand,
        brandSize: "h-[116.82px]",
        bg: BurizaBg,
        bgPosition: "max-lg:-rotate-90 w-[360px] bottom-10 -right-50 lg:-bottom-8 lg:-right-24 lg:w-[540px]",
        description: "Cross-Platform, Open-Source Wallet Built for Security",
        smDescClassName: "max-sm:w-33.5!",
    },
    {
        logo: ChrysalisLogo,
        name: "Chrysalis",
        theme: "#1C7773",
        brand: ChrysalisBrand,
        brandSize: "h-[87px]",
        bg: ChrysalisBg,
        bgPosition: "w-[427px] -right-55 top-0 lg:-bottom-8 lg:-right-152 lg:w-[1007px]",
        description: "Core Building-Block Library for .NET Cardano Development",
        smDescClassName: "",
    },
    {
        logo: RazorLogo,
        name: "Razor",
        theme: "#3E84BC",
        brand: RazorBrand,
        brandSize: "h-[119.99px]",
        bg: RazorBg,
        bgPosition: "w-[226px] -bottom-24 -right-34 lg:-bottom-18 lg:-right-28 lg:w-[368px]",
        description: "Fully Open-Source .NET Implementation of a Cardano Node",
        smDescClassName: "max-sm:w-33!",
    },
    {
        logo: FuturaLogo,
        name: "Futura",
        theme: "#4B0082",
        brand: FuturaBrand,
        brandSize: "h-[102px]",
        bg: FuturaBg,
        bgPosition: "w-[305px] -right-40 -bottom-8 lg:-bottom-21 lg:-right-68 lg:w-[674px]",
        description: "DSL That Compiles UPLC - Cardano Smart Contract Development on .NET",
        smDescClassName: "",
    },
    {
        logo: CompLogo,
        name: "Comp",
        theme: "#F96334",
        brand: CompBrand,
        brandSize: "h-[102px]",
        bg: CompBg,
        bgPosition: "w-[385px] -right-40 -bottom-8 lg:-bottom-20 lg:-right-78 lg:w-[674px]",
        description: "COMP Sets Metadata Standards for the Cardano Ecosystem",
        smDescClassName: "",
    },
];

const Section8: React.FC = () => {
    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const length = projectItems.length;

    const getCardStyle = (index: number) => {
        const offset = (index - activeIndex + length) % length;
        const rotation = offset * 3;
        const translateX = offset * 12;
        const translateY = offset * 8;

        return {
            zIndex: length - offset,
            transform: `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`,
            opacity: 1,
        };
    };

    return(
        <Box
            component="section"
            sx={{
                bgcolor: "background.default",
                backgroundImage: `url(${Background})`,
                backgroundRepeat: "repeat",
            }}
        >
            <div className="container mx-auto max-sm:py-16 py-30 px-4 lg:px-9 flex flex-col items-center">
                <div className="flex flex-col items-center gap-6">
                    <Chip label="Innovation Lab" sx={{ borderColor: "primary.dark", color: "primary.dark" }} className="py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                    <Typography className="text-[32px]! sm:text-[48px]! lg:text-[60px]! leading-[1.1]! text-center!">
                        <span style={{ color: theme.palette.text.primary }}>Our Open </span>
                        <span style={{ color: theme.palette.primary.main }}>Projects</span>
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 300,
                            color: "text.primary",
                        }}
                        className="text-sm! sm:text-base! lg:text-xl! text-center! max-w-162.5!"
                    >
                        Explore SAIB&apos;s innovative projects, built to enhance scalability, efficiency, and accessibility within the Cardano ecosystem.
                    </Typography>
                </div>

                {/* Mobile: stacked cards + pagination below lg */}
                <div className="w-full mt-10 flex flex-col gap-8 lg:hidden">
                    <div className="max-lg:mb-36! relative w-65 sm:w-75 md:w-85 h-100 sm:h-110 md:h-120">
                        {projectItems.map((item, index) => {
                            const style = getCardStyle(index);
                            return (
                                <Card
                                    key={item.name}
                                    className="absolute! top-0! left-0! w-[260px]! sm:w-[300px]! md:w-[340px]! h-[400px]! sm:h-[440px]! md:h-[480px]! rounded-xl! p-6! sm:p-8! transition-all! duration-300! overflow-hidden! flex flex-col justify-between"
                                    style={{
                                        backgroundColor: index === activeIndex ? item.theme : "#2E2C7E",
                                        zIndex: style.zIndex,
                                        transform: style.transform,
                                        transformOrigin: "bottom left",
                                    }}
                                >
                                    {index !== activeIndex && (
                                        <>
                                            <div className="absolute inset-0 z-20 rounded-xl" style={{ backgroundColor: "rgba(46, 44, 126, 0.6)" }} />
                                            <div className="absolute inset-0 z-20 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} />
                                        </>
                                    )}
                                    <div className={`absolute ${item.bgPosition}`}>
                                        <img
                                            src={item.bg}
                                            alt={`${item.name} background`}
                                            className="pointer-events-none"
                                        />
                                    </div>
                                    <div className="relative z-10">
                                        <img src={item.brand} alt={`${item.name} brand`} className="h-14 sm:h-18" />
                                    </div>
                                    <div className="relative z-10 flex flex-col gap-4">
                                        <Typography sx={{ fontWeight: 600, color: "primary.contrastText" }} className={`text-xl! sm:text-2xl! leading-7! ${item.smDescClassName}`}>
                                            {item.description}
                                        </Typography>
                                        <SaibButton variant="dark" sx={{ bgcolor: "text.primary" }} className="px-4! py-2! rounded-xl! w-max text-sm!">See Documentation</SaibButton>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                    <SaibPageIndicator
                        count={projectItems.length}
                        activeIndex={activeIndex}
                        onSelect={setActiveIndex}
                    />
                </div>

                {/* Desktop: stacked cards + icon buttons at lg and above */}
                <div className="hidden lg:flex w-full mt-16 justify-center gap-70">
                    <div className="relative w-[842px] h-[542px]">
                        {projectItems.map((item, index) => {
                            const style = getCardStyle(index);
                            return (
                                <Card
                                    key={item.name}
                                    className="absolute! top-0! left-0! w-210.5! h-135.5! rounded-xl! p-14! transition-all! duration-300! overflow-hidden! flex flex-col justify-between"
                                    style={{
                                        backgroundColor: index === activeIndex ? item.theme : "#2E2C7E",
                                        zIndex: style.zIndex,
                                        transform: style.transform,
                                        transformOrigin: "bottom left",
                                    }}
                                >
                                    {index !== activeIndex && (
                                        <>
                                            <div className="absolute inset-0 z-20 rounded-xl" style={{ backgroundColor: "rgba(46, 44, 126, 0.6)" }} />
                                            <div className="absolute inset-0 z-20 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} />
                                        </>
                                    )}
                                    <div className={`absolute ${item.bgPosition}`}>
                                        <img
                                            src={item.bg}
                                            alt={`${item.name} background`}
                                            className="pointer-events-none"
                                        />
                                    </div>
                                    <div className="relative z-10">
                                        <img src={item.brand} alt={`${item.name} brand`} className={item.brandSize} />
                                    </div>
                                    <div className="relative z-10 max-w-98.5 flex flex-col gap-6">
                                        <Typography sx={{ fontWeight: 600, color: "primary.contrastText" }} className="text-[40px]! leading-12!">
                                            {item.description}
                                        </Typography>
                                        <SaibButton variant="dark" sx={{ bgcolor: "text.primary" }} className="px-4! py-2! rounded-xl! w-max">See Documentation</SaibButton>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                    <div className="flex flex-col gap-3">
                        {projectItems.map((item, index) => (
                            <div
                                key={item.name}
                                className={`w-[129px] h-[129px] rounded-[7px] flex items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden ${
                                    index === activeIndex
                                        ? "outline-2 outline scale-105"
                                        : "hover:opacity-80"
                                }`}
                                style={{
                                    backgroundColor: index === activeIndex ? item.theme : "#2E2C7E",
                                    outlineColor: theme.palette.background.default,
                                }}
                                onClick={() => setActiveIndex(index)}
                            >
                                {index !== activeIndex && (
                                    <>
                                        <div className="absolute inset-0 rounded-[7px]" style={{ backgroundColor: "rgba(46, 44, 126, 0.6)" }} />
                                        <div className="absolute inset-0 rounded-[7px]" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} />
                                    </>
                                )}
                                <item.logo sx={{ fontSize: 60 }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Section8;
