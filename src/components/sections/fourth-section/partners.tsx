import React, { useState, useEffect, useRef } from "react";
import { Button, Typography, useTheme } from "@mui/material";
import { Demeter, DemeterLight, Levvy, LevvyLight, TxPipe, TxPipeLight, UtxoRpc, UtxoRpcLight } from "../../../images/brands";
import { Browser, Github, X } from "../../../images/socials";
import SaibNavigation from "../../common/saib-navigation";
import BrandCard from "./brand-card";

const Partners = () => {
    const theme = useTheme();

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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('enter');
    const [transitioning, setTransitioning] = useState(false);
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
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        } else if (deltaX < -50) {
            setCurrentIndex((prev) => Math.min(prev + 1, partnersData.length - 1));
        }
    };

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
        <div className="flex flex-col items-stretch text-center lg:py-25">
            <div>
                <Typography
                    component="h6"
                    variant="h6"
                    color="secondary"
                    className="max-sm:!text-sm"
                >
                    We are proud to be...
                </Typography>
                <Typography
                    component="h3"
                    variant="h3"
                    className="max-sm:!text-4xl"
                >
                    Building With
                </Typography>
            </div>
            <div className="flex flex-col-reverse items-center mt-14 gap-10 lg:flex-row lg:items-stretch lg:gap-20 lg:h-100">
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
                                transition: "ease",
                                width: 200
                            }}
                            onClick={() => handleCardChange(index)}
                        >
                            <img
                                key={index}
                                src={datum.brandAlternate}
                                alt={datum.name}
                                className={`transition-opacity duration-150 ${currentIndex === index ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
                            />
                        </Button>
                    ))}
                </div>
                <div className="h-full w-full lg:w-auto max-w-50">
                    <SaibNavigation
                        buttonCount={partnersData.length}
                        currentIndex={currentIndex}
                        setCurrentIndex={handleCardChange}
                    />
                </div>
                <div className="relative h-full w-full max-w-200 hidden lg:block">
                    <div
                        className={`w-full h-full transition-all duration-200 ease-in-out flex 
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
                <div
                    className="lg:hidden w-full overflow-hidden rounded-3xl relative"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {partnersData.map((datum, index) => (
                            <div key={index} className="min-w-full h-110 flex justify-center">
                                <BrandCard
                                    brand={datum.brand}
                                    name={datum.name}
                                    description={datum.description}
                                    background={datum.gradient}
                                    socials={datum.socials}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;