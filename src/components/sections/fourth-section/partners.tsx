import React, { useState, useEffect } from "react";
import { Button, Typography, useTheme } from "@mui/material";
import { Demeter, DemeterLight, Levvy, LevvyLight, TxPipe, TxPipeLight, UtxoRpc, UtxoRpcLight } from "../../../images/brands";
import { Browser, Github, X } from "../../../images/socials";
import SaibNavigation from "../../common/saib-navigation";
import BrandCard from "./brand-card";

const Partners = () => {
    const theme = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % partnersData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center py-25">
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
            <div className="flex mt-14 h-100 gap-20">
                <div className="flex flex-1 flex-col justify-evenly items-end !shrink-0">
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
                            onClick={() => setCurrentIndex(index)}
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
                    setCurrentIndex={setCurrentIndex}
                />
                <div className="relative w-200 h-full overflow-hidden flex flex-col">
                    {partnersData.map((partner, index) => (
                        <div
                            key={index}
                            className="absolute w-full h-full transition-transform duration-300 ease-in-out flex"
                            style={{
                                transform: `translateY(${(index - currentIndex) * 100}%)`,
                            }}
                        >
                            <BrandCard
                                brand={partner.brand}
                                name={partner.name}
                                description={partner.description}
                                background={partner.gradient}
                                socials={partner.socials}
                                sx={{
                                    width: 480,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;