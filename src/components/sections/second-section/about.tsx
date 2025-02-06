import React from "react";
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

const About: React.FC = () => {
    const AboutItems = [
        {
            title: "Frontend Excellence",
            content: "Transforming ideas into stunning, intuitive web experiences that captivate and engage.",
            buttonTitle: "Explore More",
            imageSrc: Frontend,
            hovered: FrontendHovered
        },
        {
            title: "Backend Reliability",
            content: "Powering your platforms with secure, efficient, and scalable server solutions.",
            buttonTitle: "Explore More",
            imageSrc: Backend,
            hovered: BackendHovered
        },
        {
            title: "Software Innovation",
            content: "Developing bespoke software solutions that drive growth and enhance productivity.",
            buttonTitle: "Explore More",
            imageSrc: Software,
            hovered: SoftwareHovered
        },
        {
            title: "Blockchain Mastery",
            content: "Leveraging blockchain technology to deliver decentralized, transparent, secure applications.",
            buttonTitle: "Explore More",
            imageSrc: Blockchain,
            hovered: BlockchainHovered
        },
        {
            title: "Smart Contracts",
            content: "Creating decentralized smart contracts for secure, trustless efficiency.",
            buttonTitle: "Explore More",
            imageSrc: Contract,
            hovered: ContractHovered
        },
    ];

    const theme = useTheme();

    return (
        <div className="mt-25 flex flex-col justify-center items-center">
            <div className="w-full text-center">
                <Typography
                    component="h3"
                    variant="h3"
                >
                    <span>Empowering your</span>
                    <Typography
                        component="span"
                        variant="h3"
                        color="secondary"
                    >
                        digital presence
                    </Typography>
                </Typography>
            </div>
            <div className="flex lg:grid grid-cols-6 gap-8 mt-14">
                {AboutItems.map((datum, index) => {
                    const colSpan = (index === 0 || index === 1) ? 'md:col-span-3' : 'md:col-span-2';

                    return (
                        <Paper
                            key={index}
                            sx={{
                                background: "white",
                                textAlign: "center",
                                padding: "40px 60px",
                                boxShadow: theme.shadows[4],
                                transition: "all 0.3s ease-in-out",
                                cursor: "pointer",
                                "&:hover": {
                                    background: theme.palette.secondary.main,
                                    color: "white",
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
                                    >
                                        {datum.title}
                                    </Typography>
                                    <Typography
                                        component="p"
                                        variant="body1"
                                        className="!mt-2"
                                    >
                                        {datum.content}
                                    </Typography>
                                </div>
                            </div>
                        </Paper>
                    )
                })}
            </div>
            <div className="my-14">
                <SaibButton
                    variant="outlined"
                    size="medium"
                >
                    Explore More
                </SaibButton>
            </div>
        </div>
    );
};

export default About;
