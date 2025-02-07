import React, { useState, useRef } from "react";
import {
    Paper,
    Typography,
    useTheme
} from "@mui/material";
import {
    Backend,
    BackendHovered,
    Blockchain,
    BlockchainHovered,
    Contract,
    ContractHovered,
    Frontend,
    FrontendHovered,
    MeshBackground,
    Software,
    SoftwareHovered
} from "../../../images/sections/second-section";
import SaibButton from "../../common/saib-button";
import SaibNavigation from "../../common/saib-navigation";

const About: React.FC = () => {
    const AboutItems = [
        {
            title: "Frontend Excellence",
            modalTitle: "Frontend",
            modalHighlight: "Excellence",
            content: "Transforming ideas into stunning, intuitive web experiences that captivate and engage.",
            buttonTitle: "Explore More",
            imageSrc: Frontend,
            hovered: FrontendHovered
        },
        {
            title: "Backend Reliability",
            modalTitle: "Backend",
            modalHighlight: "Reliability",
            content: "Powering your platforms with secure, efficient, and scalable server solutions.",
            buttonTitle: "Explore More",
            imageSrc: Backend,
            hovered: BackendHovered
        },
        {
            title: "Software Innovation",
            modalTitle: "Software",
            modalHighlight: "Innovation",
            content: "Developing bespoke software solutions that drive growth and enhance productivity.",
            buttonTitle: "Explore More",
            imageSrc: Software,
            hovered: SoftwareHovered
        },
        {
            title: "Blockchain Mastery",
            modalTitle: "Blockchain",
            modalHighlight: "Mastery",
            content: "Leveraging blockchain technology to deliver decentralized, transparent, secure applications.",
            buttonTitle: "Explore More",
            imageSrc: Blockchain,
            hovered: BlockchainHovered
        },
        {
            title: "Smart Contracts",
            modalTitle: "Smart",
            modalHighlight: "Contracts",
            content: "Creating decentralized smart contracts for secure, trustless efficiency.",
            buttonTitle: "Explore More",
            imageSrc: Contract,
            hovered: ContractHovered
        },
    ];

    const [index, setIndex] = useState(0);

    const theme = useTheme();
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const deltaX = touchEndX.current - touchStartX.current;
        if (deltaX > 50) {
            setIndex((prev) => Math.max(prev - 1, 0));
        } else if (deltaX < -50) {
            setIndex((prev) => Math.min(prev + 1, AboutItems.length - 1));
        }
    };

    return (
        <div className="flex flex-col justify-center items-center lg:pt-25">
            <div className="w-full text-center max-w-130 hidden lg:block">
                <Typography
                    component="h3"
                    variant="h3"
                >
                    <span>Empowering your </span>
                    <Typography
                        component="span"
                        variant="h3"
                        color="secondary"
                    >
                        digital presence
                    </Typography>
                </Typography>
            </div>
            <div className="hidden lg:grid grid-cols-6 gap-8 mt-14">
                {AboutItems.map((datum, index) => {
                    const colSpan = index < 2 ? 'md:col-span-3' : 'md:col-span-2';

                    return (
                        <Paper
                            key={index}
                            sx={{
                                background: "white",
                                textAlign: "center",
                                padding: "40px 60px",
                                boxShadow: theme.shadows[4],
                                transition: "all 0.4s ease-in-out",
                                cursor: "pointer",
                                "&:hover": {
                                    background: theme.palette.secondary.main,
                                    color: "white",
                                    scale: "105%"
                                }
                            }}
                            className={`group col-span-6 ${colSpan} !rounded-3xl relative overflow-hidden`}
                        >
                            <div className="absolute inset-0 z-10 hidden group-hover:block">
                                <img
                                    alt="mesh background"
                                    src={MeshBackground}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-20 flex flex-col items-center justify-center gap-6">
                                <div className="w-40 h-40 shrink-0 flex items-center justify-center relative">
                                    <img
                                        alt={datum.title}
                                        src={datum.imageSrc}
                                        className="absolute w-full h-full transition-opacity duration-300 group-hover:opacity-0"
                                    />
                                    <img
                                        alt={datum.title}
                                        src={datum.hovered}
                                        className="absolute w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>
                                <div className={`${(index === 0 || index === 1) ? "" : "h-55"}`}>
                                    <Typography
                                        component="h4"
                                        variant="h4"
                                        className="max-xl:!text-3xl"
                                    >
                                        {datum.title}
                                    </Typography>
                                    <Typography
                                        component="p"
                                        variant="body1"
                                        className="!mt-2 max-xl:!text-base"
                                    >
                                        {datum.content}
                                    </Typography>
                                </div>
                            </div>
                        </Paper>
                    );
                })}
            </div>
            <div className="w-full max-w-60 lg:hidden">
                <SaibNavigation
                    buttonCount={AboutItems.length}
                    currentIndex={index}
                    setCurrentIndex={setIndex}
                />
            </div>
            <div
                className="lg:hidden mt-10 w-full overflow-hidden rounded-3xl relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {AboutItems.map((datum, i) => (
                        <div key={i} className="min-w-full flex justify-center">
                            <Paper
                                sx={{
                                    background: "white",
                                    textAlign: "center",
                                    padding: "60px 60px",
                                    boxShadow: theme.shadows[4]
                                }}
                                className="!rounded-3xl relative overflow-hidden w-full mx-auto flex flex-col items-center gap-10"
                            >
                                <div>
                                    <Typography
                                        component="h3"
                                        variant="h3"
                                        className="mb-4 max-lg:!text-4xl"
                                    >
                                        <span className="font-bold">{datum.modalTitle} </span>
                                        <Typography
                                            component="span"
                                            variant="h3"
                                            color="secondary"
                                            className="max-lg:!text-4xl"
                                        >
                                            {datum.modalHighlight}
                                        </Typography>
                                    </Typography>
                                </div>
                                <div>
                                    <Typography component="p" variant="body1" className="!-mt-5">
                                        {datum.content}
                                    </Typography>
                                </div>
                                <div>
                                    <SaibButton variant="outlined">
                                        {datum.buttonTitle}
                                    </SaibButton>
                                </div>
                                <div className="w-40 h-40 mx-auto flex items-center justify-center relative">
                                    <img alt={datum.title} src={datum.imageSrc} className="absolute w-full h-full transition-opacity duration-300" />
                                </div>
                            </Paper>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
