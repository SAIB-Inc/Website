import React, { useRef, useState } from "react";
import { List, ListItem, ListItemIcon, Paper, Typography, useTheme } from "@mui/material";
import { Dapp, Minting, SmartContract, Staking, Token, Wallet } from "../../../images/sections/second-section";
import SaibButton from "../../common/saib-button";
import SaibNavigation from "../../common/saib-navigation";
import { Circle } from "@mui/icons-material";

const OfferMobile = () => {
    const offersData = [
        {
            icon: Dapp,
            title: "dApp Development",
            services: [
                "Innovative dApp development",
                "Offchain Development",
                "Frontend Integration"
            ],
            buttonTitle: "Develop Now"
        },
        {
            icon: SmartContract,
            title: "Smart Contracts",
            services: [
                "Aiken Development",
                "PlutusTx Development",
                "Plutarch Development"
            ],
            buttonTitle: "Build Now"
        },
        {
            icon: Minting,
            title: "NFT Minting",
            services: [
                "Mint and Manage NFTs",
                "Build customized marketplaces",
                "Designed for scalability and flexibility"
            ],
            buttonTitle: "Mint Now"
        },
        {
            icon: Token,
            title: "Token Creation",
            services: [
                "Custom Cardano Native Tokens creation",
                "Deployment and management solutions",
                "Ideal for diverse applications"
            ],
            buttonTitle: "Create Now"
        },
        {
            icon: Staking,
            title: "Staking Solutions",
            services: [
                "Staking pools and platforms to engage users",
                "Maximize rewards for community involvement",
                "Designed for ease of use and reliability"
            ],
            buttonTitle: "Build Staking"
        },
        {
            icon: Wallet,
            title: "Wallet Integration",
            services: [
                "Integrate popular wallets like Yoroi and Daedalus",
                "Develop custom wallets for your ecosystem",
                "Ensure smooth and secure user experience"
            ],
            buttonTitle: "Integrate Now"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
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
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        } else if (deltaX < -50) {
            setCurrentIndex((prev) => Math.min(prev + 1, offersData.length - 1));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-center w-full lg:hidden">
            <div>
                <Typography
                    component="h6"
                    variant="h6"
                    color="secondary"
                    className="max-sm:!text-sm"
                >
                    What we offer...
                </Typography>
                <Typography
                    component="h3"
                    variant="h3"
                    className="max-sm:!text-4xl"
                >
                    Cardano
                </Typography>
            </div>
            <div className="max-w-60 w-full mt-10">
                <SaibNavigation
                    buttonCount={offersData.length}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />
            </div>
            <div
                className="mt-10 w-full overflow-hidden rounded-3xl relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {offersData.map((datum, index) => (
                        <div key={index} className="min-w-full flex justify-center">
                            <Paper
                                sx={{
                                    background: "white",
                                    textAlign: "center",
                                    boxShadow: theme.shadows[4]
                                }}
                                className="!rounded-3xl relative overflow-hidden w-full mx-auto !flex !flex-col !items-center gap-2 p-10 md:!p-15"
                            >
                                <div className="h-18 md:h-auto">
                                    <Typography
                                        component="h5"
                                        variant="h5"
                                    >
                                        {datum.title}
                                    </Typography>
                                </div>
                                <div className="!h-60 sm:!h-40 md:mt-5">
                                    <Typography
                                        component="p"
                                        variant="subtitle2"
                                        color="secondary"
                                    >
                                        SERVICES
                                    </Typography>
                                    <List
                                        sx={{
                                        }}
                                        className="!flex !flex-col !items-center !justify-center"
                                    >
                                        {datum.services.map((listItems, index) => (
                                            <ListItem
                                                key={index}
                                                sx={{
                                                    display: "list-item",
                                                    textAlign: "center",
                                                }}
                                                className="!w-auto max-sm:text-sm !flex"
                                            >
                                                <ListItemIcon sx={{ minWidth: 20 }} className="!flex !items-end">
                                                    <Circle sx={{ fontSize: 6, color: theme.palette.text.primary }} />
                                                </ListItemIcon>
                                                <div>
                                                    <p>{listItems}</p>
                                                </div>
                                            </ListItem>
                                        ))}
                                    </List>
                                </div>
                                <div className="mt-3">
                                    <SaibButton
                                        variant="outlined"
                                    >
                                        {datum.buttonTitle}
                                    </SaibButton>
                                </div>
                                <div className="mt-3 h-26 md:h-34">
                                    <img
                                        src={datum.icon}
                                        alt={datum.title}
                                        className="w-full h-full"
                                    />
                                </div>
                            </Paper>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OfferMobile;