import React from "react";
import { Paper, Typography, useTheme } from "@mui/material";
import { Backend, Blockchain, Contract, Frontend, Software } from "../../../images/sections/second-section";

const About: React.FC = () => {
    const AboutItems = [
        {
            title: "Frontend Excellence",
            content: "Transforming ideas into stunning, intuitive web experiences that captivate and engage.",
            buttonTitle: "Explore More",
            imageSrc: Frontend,
        },
        {
            title: "Backend Reliability",
            content: "Powering your platforms with secure, efficient, and scalable server solutions.",
            buttonTitle: "Explore More",
            imageSrc: Backend,
        },
        {
            title: "Software Innovation",
            content: "Developing bespoke software solutions that drive growth and enhance productivity.",
            buttonTitle: "Explore More",
            imageSrc: Software,
        },
        {
            title: "Blockchain Mastery",
            content: "Leveraging blockchain technology to deliver decentralized, transparent, secure applications.",
            buttonTitle: "Explore More",
            imageSrc: Blockchain,
        },
        {
            title: "Smart Contracts",
            content: "Creating decentralized smart contracts for secure, trustless efficiency.",
            buttonTitle: "Explore More",
            imageSrc: Contract,
        },
    ];

    const theme = useTheme();

    return (
        <div className="mt-25">
            <div className="w-full text-center">
                <Typography
                    component="h3"
                    variant="h3"
                >
                    <span>Empowering your</span>
                    <Typography
                        component="h3"
                        variant="h3"
                        color="secondary"
                    >
                        digital presence
                    </Typography>
                </Typography>
            </div>
            <div className="grid grid-cols-6 gap-8 mt-14">
                {AboutItems.map((datum, index) => {
                    const colSpan = (index === 0 || index === 1) ? 'md:col-span-3' : 'md:col-span-2';

                    return (
                        <Paper
                            key={index}
                            sx={{
                                background: "white",
                                textAlign: "center",
                                padding: "50px 60px",
                                boxShadow: theme.shadows[4]
                            }}
                            className={`col-span-6 ${colSpan} flex flex-col items-center justify-between !rounded-3xl relative gap-8`}
                        >
                            <div className={`w-48  h-50 shrink-0 flex items-center justify-center`}>
                                <img
                                    alt={datum.title}
                                    src={datum.imageSrc}
                                />
                            </div>
                            <div className={`${(index === 0 || index === 1) ? "" : "h-55"} `}>
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
                        </Paper>
                    )
                })}
            </div>
        </div>
    );
};

export default About;
