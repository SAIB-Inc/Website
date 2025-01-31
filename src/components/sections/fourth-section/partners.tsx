import React, { useState, useEffect } from "react";
import { Button, Typography, useTheme } from "@mui/material";
import { Demeter, DemeterLight, Levvy, LevvyLight, TxPipe, TxPipeLight, UtxoRpc, UtxoRpcLight } from "../../../images/brands";
import { Browser, Github, X } from "../../../images/socials";
import SaibNavigation from "../../common/saib-navigation";
import BrandCard from "./brand-card";

const Partners = () => {
    const theme = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('enter'); // 'enter' or 'exit'
    const [transitioning, setTransitioning] = useState(false);

    const partnersData = [
        {
            brand: DemeterLight,
            brandAlternate: Demeter,
            name: "Demeter",
            description: "Build and deploy dApps on a single platform with Demeter - effortlessly scale to support millions of users.",
            gradient: `linear-gradient(to bottom right,
                ${theme.palette.gradient.demeter.main},
                ${theme.palette.gradient.demeter.secondary}
            )`,
            socials: [
                {
                    icon: Browser,
                    link: "https://demeter.run",
                },
                {
                    icon: X,
                    link: "https://x.com/DemeterRun",
                },
            ]
        },
        {
            brand: TxPipeLight,
            brandAlternate: TxPipe,
            name: "TxPipe",
            description: "Open-source software for a decentralized world.",
            gradient: `linear-gradient(to bottom right,
                ${theme.palette.gradient.txpipe.main},
                ${theme.palette.gradient.txpipe.secondary}
            )`,
            socials: [
                {
                    icon: Browser,
                    link: "https://txpipe.io",
                },
                {
                    icon: X,
                    link: "https://x.com/txpipe_tools",
                },
                {
                    icon: Github,
                    link: "https://github.com/txpipe",
                }
            ]
        },
        {
            brand: UtxoRpcLight,
            brandAlternate: UtxoRpc,
            name: "UTxORPC",
            description: "Interact with UTxO-based blockchains using a shared specification with focus on developer experience and performance.",
            gradient: `linear-gradient(to bottom right,
                ${theme.palette.gradient.utxorpc.main},
                ${theme.palette.gradient.utxorpc.secondary}
            )`,
            socials: [
                {
                    icon: Browser,
                    link: "https://utxorpc.org",
                },
                {
                    icon: Github,
                    link: "https://github.com/utxorpc",
                }
            ]
        },
        {
            brand: LevvyLight,
            brandAlternate: Levvy,
            name: "Levvy",
            description: "Effortless lending, instant liquidity. Maximize liquidity & earnings lending and borrowing tokens or NFTs.",
            gradient: `linear-gradient(to bottom right,
                ${theme.palette.gradient.levvy.main},
                ${theme.palette.gradient.levvy.secondary},
                ${theme.palette.gradient.levvy.tertiary}
            )`,
            socials: [
                {
                    icon: Browser,
                    link: "https://levvy.fi",
                },
                {
                    icon: X,
                    link: "https://x.com/levvyfinance",
                }
            ]
        },
    ];

    const handleCardChange = (newIndex: number) => {
        if (transitioning) return;
        
        setTransitioning(true);
        setDirection('exit');
        
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setDirection('enter');
            setTimeout(() => {
                setTransitioning(false);
            }, 100);
        }, 300);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!transitioning) {
                handleCardChange((currentIndex + 1) % partnersData.length);
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, transitioning]);

    return (
        <div className="flex flex-col items-stretch text-center py-25">
            <div>
                <Typography
                    component="h6"
                    variant="h6"
                    color="secondary"
                >
                    We are proud to be...
                </Typography>
                <Typography
                    component="h3"
                    variant="h3"
                >
                    Building With
                </Typography>
            </div>
            <div className="flex flex-col-reverse items-center mt-14 gap-20 lg:flex-row lg:items-stretch lg:h-100">
                <div className="hidden flex-1 flex-col justify-evenly items-end lg:flex">
                    {partnersData.map((datum, index) => (
                        <Button
                            component="div"
                            key={index}
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                transition: "ease"
                            }}
                            onClick={() => handleCardChange(index)}
                        >
                            <img
                                src={datum.brandAlternate}
                                alt={datum.name}
                                className={`transition-opacity duration-150 ${currentIndex === index ? "opacity-100" : "opacity-30 hover:opacity-100"}`}
                            />
                        </Button>
                    ))}
                </div>
                <SaibNavigation
                    buttonCount={partnersData.length}
                    currentIndex={currentIndex}
                    setCurrentIndex={handleCardChange}
                />
                <div className="relative h-full w-200">
                    <div
                        className={`absolute w-full h-full flex transition-all duration-200 ease-in-out
                            ${direction === 'enter' ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                    >
                        <BrandCard
                            brand={partnersData[currentIndex].brand}
                            name={partnersData[currentIndex].name}
                            description={partnersData[currentIndex].description}
                            background={partnersData[currentIndex].gradient}
                            socials={partnersData[currentIndex].socials}
                            sx={{
                                width: 480,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;