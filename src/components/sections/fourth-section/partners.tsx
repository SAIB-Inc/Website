import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Demeter, DemeterLight, Levvy, LevvyLight, TxPipe, TxPipeLight, UtxoRpc, UtxoRpcLight } from "../../../images/brands";
import { Browser, Github, X } from "../../../images/socials";
import SaibCard from "../../common/saib-card";

const Partners: React.FC = () => {
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
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

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
            <div className="flex mt-14 h-[420px] gap-20">
                <div className="h-full flex flex-col justify-evenly items-end">
                    {partnersData.map((datum, index) => (
                        <Box
                            component="div"
                            key={index}
                            sx={{
                                height: "100%",
                                justifyContent: "flex-end",
                                alignContent: "center",
                            }}
                        >
                            <img
                                src={datum.brandAlternate}
                                alt={datum.name}
                            />
                        </Box>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    {partnersData.map((_, idx) => (
                        <Box
                            component="div"
                            sx={{
                                width: 10,
                                flexGrow: 1,
                                backgroundColor:
                                    currentIndex === idx
                                        ? theme.palette.carouselButtons.active
                                        : theme.palette.carouselButtons.inactive,
                                borderRadius: 6,
                                cursor: "pointer",
                            }}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>
                <SaibCard
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
    );
};

export default Partners;