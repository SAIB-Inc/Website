import React from "react";
import { Card, CardActions, CardContent, List, ListItem, Paper, Typography, useTheme } from "@mui/material";
import { DApp, Nft, SmartContract, Stake, Token, Wallet } from "../../../images/icons";
import { CardanoBackground } from "../../../images/sections/second-section";
import SaibButton from "../../common/saib-button";

const Offer: React.FC = () => {
    const theme = useTheme();
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
    
    return (
        <Paper
            elevation={2}
            sx={{
                background: theme.palette.gradient.dark,
                padding: "60px 40px",
                borderRadius: "24px",
                marginY: "60px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                position: "relative"
            }}
        >
            <div>
                <img 
                    src={CardanoBackground} 
                    alt="Cardano logo" 
                    className="absolute top-0 right-0" 
                />
            </div>
            <div>
                <Typography
                    component="h6"
                    variant="h6"
                    color="secondary"
                >
                    What we offer...
                </Typography>
                <Typography
                    component="p"
                    variant="subtitle1"
                    lineHeight="70px"
                >
                    Cardano
                </Typography>
                <Typography
                    component="p"
                    variant="body1"
                    className="w-[632px] mt-4!"
                >
                    <span>We offer development services on the</span>
                    <span className="font-bold"> Cardano blockchain</span>,
                    <span>delivering secure, scalable, and innovative solutions tailored to your needs.</span>
                </Typography>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-14">
                {offersData.map((datum, index) => (
                    <Card
                        key={index}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            padding: "33px 25px",
                            borderRadius: "24px",
                            boxShadow: theme.shadows[3]
                        }}
                    >
                        <CardContent sx={{ padding: "16px 16px 0 16px" }}>
                            <div className="flex gap-4 items-center">
                                {React.createElement(datum.icon)}
                                <Typography
                                    component="h5"
                                    variant="h5"
                                >
                                    {datum.title}
                                </Typography>
                            </div>
                            <div className="text-left! mt-5">
                                <Typography
                                    component="p"
                                    variant="subtitle2"
                                    color="secondary"
                                >
                                    SERVICES
                                </Typography>
                                <List sx={{
                                    listStyleType: "disc",
                                    listStylePosition: "inside"
                                }}>
                                    {datum.services.map((listItems, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                display: "list-item",
                                                paddingX: 0,
                                                paddingY: "4px",
                                            }}
                                        >
                                            {listItems}
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </CardContent>
                        <CardActions sx={{ padding: "8px 16px 16px 16px" }}>
                            <SaibButton
                                variant="outlined"
                            >
                                {datum.buttonTitle}
                            </SaibButton>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </Paper>
    );
};

export default Offer;