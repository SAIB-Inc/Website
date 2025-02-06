import React, { useState } from "react";
import { List, ListItem, Paper, Typography, useTheme } from "@mui/material";
import { DApp, Nft, SmartContract, Stake, Token, Wallet } from "../../../images/icons";
import SaibButton from "../../common/saib-button";
import SaibNavigation from "../../common/saib-navigation";

const OfferMobile = () => {
    const offersData = [
        {
            icon: DApp,
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
            icon: Nft,
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
            icon: Stake,
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
            <div className="w-full mt-9 flex items-center justify-center">
                <Paper
                    sx={{
                        background: theme.palette.gradient.dark,
                        height: 700,
                        flexGrow: 1,
                        borderRadius: "16px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                    className="!p-10"
                >
                    <div className="max-w-60 w-full">
                        <SaibNavigation
                            buttonCount={offersData.length}
                            currentIndex={currentIndex}
                            setCurrentIndex={setCurrentIndex}
                        />
                    </div>
                    <div>
                        <div>
                            <Typography
                                component="h5"
                                variant="h5"
                            >
                                {offersData[currentIndex].title}
                            </Typography>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Typography
                            component="p"
                            variant="subtitle2"
                            color="secondary"
                        >
                            SERVICES
                        </Typography>
                        <List
                            sx={{
                                listStyleType: "disc",
                            }}
                            className="!flex !flex-col !items-center !justify-center"
                        >
                            {offersData[currentIndex].services.map((listItems, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        display: "list-item",
                                        textAlign: "center",
                                    }}
                                    className="!w-auto"
                                >
                                    {listItems}
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div>
                        <SaibButton
                            variant="outlined"
                        >
                            {offersData[currentIndex].buttonTitle}
                        </SaibButton>
                    </div>
                    <div>
                        {React.createElement(offersData[currentIndex].icon, { sx: { fontSize: 80 } })}
                    </div>
                </Paper>
            </div>
        </div>
    );
};

export default OfferMobile;