import React, { useState } from "react";
import { Paper, Typography, useTheme } from "@mui/material";
import { Backend, Blockchain, Contract, Frontend, Laptop, Software } from "../../../images/sections/second-section";
import SaibButton from "../../common/saib-button";
import SaibNavigation from "../../common/saib-navigation";

const Carousel: React.FC = () => {
    const CarouselItems = [
        {
            title: "Empowering your",
            highlight: "Digital Presence",
            content: [
                {
                    text: "With blockchain, you gain ",
                    bold: false
                },
                {
                    text: "greater ownership ",
                    bold: true
                },
                {
                    text: "of your digital assets, from intellectual property to personal data.",
                    bold: false
                },
            ],
            buttonTitle: "Explore More",
            imageSrc: Laptop,
        },
        {
            title: "Frontend",
            highlight: "Excellence",
            content: [
                {
                    text: "Transforming ideas into stunning, intuitive web experiences that captivate and engage.",
                    bold: false
                },
            ],
            buttonTitle: "Explore More",
            imageSrc: Frontend,
        },
        {
            title: "Backend",
            highlight: "Reliability",
            content: [
                {
                    text: "Powering your platforms with secure, efficient, and scalable server solutions.",
                    bold: false
                },
            ],
            buttonTitle: "Explore More",
            imageSrc: Backend,
        },
        {
            title: "Software",
            highlight: "Innovation",
            content: [
                {
                    text: "Developing bespoke software solutions that drive growth and enhance productivity.",
                    bold: false
                },
            ],
            buttonTitle: "Explore More",
            imageSrc: Software,
        },
        {
            title: "Blockchain",
            highlight: "Mastery",
            content: [
                {
                    text: "Leveraging blockchain technology to deliver decentralized, transparent, secure applications.",
                    bold: false
                },
            ],
            buttonTitle: "Explore More",
            imageSrc: Blockchain,
        },
        {
            title: "Smart",
            highlight: "Contracts",
            content: [
                {
                    text: "Creating decentralized smart contracts for secure, trustless efficiency.",
                    bold: false
                },
            ],
            buttonTitle: "Explore More",
            imageSrc: Contract,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();

    return (
        <Paper
            elevation={1}
            sx={{
                background: theme.palette.gradient.dark,
                padding: "61px 60px",
                borderRadius: "24px",
                marginTop: "100px",
                height: 534,
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            <div className="w-75 h-auto">
                <img
                    alt="carousel item"
                    src={CarouselItems[currentIndex].imageSrc}
                    className="w-full h-auto object-contain"
                />
            </div>
            <div className="flex flex-col gap-5 w-2xl">
                <Typography
                    component="h3"
                    variant="h3"
                    className="mb-4"
                >
                    <span className="font-bold">{CarouselItems[currentIndex].title} </span>
                    <Typography
                        component="span"
                        variant="h3"
                        color="secondary"
                    >
                        {CarouselItems[currentIndex].highlight}
                    </Typography>
                </Typography>
                <Typography
                    component="p"
                    variant="body1"
                >
                    {CarouselItems[currentIndex].content.map((part, idx) => (
                        <span
                            key={idx}
                            className={part.bold ? "font-bold" : undefined}
                        >
                            {part.text}
                        </span>
                    ))}
                </Typography>
                <SaibButton variant="outlined">
                    {CarouselItems[currentIndex].buttonTitle}
                </SaibButton>
            </div>
            <SaibNavigation
                buttonCount={CarouselItems.length}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </Paper>
    );
};

export default Carousel;
