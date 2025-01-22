import React from "react";
import { Box, Button, Card, CardActions, CardContent, List, ListItem, Paper, Typography, useTheme } from "@mui/material";

import Laptop from "../../images/sections/second-section/laptop.svg";
import CardanoBg from "../../images/sections/second-section/cardano-background.svg";
import DApp from "../../images/icons/dApp";
import Nft from "../../images/icons/nft";
import SmartContract from "../../images/icons/smart-contract";
import Stake from "../../images/icons/stake";
import Token from "../../images/icons/token";
import Wallet from "../../images/icons/wallet";
import LightningBackgroundLeft from "../../images/sections/second-section/lightning-background-left";
import LightningBackgroundRight from "../../images/sections/second-section/lightning-background-right";

const SecondSection: React.FC = () => {
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
    ]

    return (
        <section className="">
            <div className="container max-w-screen-xl mx-auto">
                <Paper
                    elevation={3}
                    sx={{
                        background: theme.palette.gradient.dark,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "61px 60px",
                        borderRadius: "24px",
                        marginTop: "100px",
                    }}
                >
                    <div className="w-[300px] h-auto">
                        <img
                            alt="saib laptop"
                            src={Laptop}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="flex flex-col gap-5 max-w-2xl">
                        <Typography
                            component="h3"
                            variant="h3"
                        >
                            Empowering your {' '}
                            <Typography
                                component="span"
                                variant="h3"
                                color="secondary"
                            >
                                digital presence
                            </Typography>
                        </Typography>
                        <Typography
                            component="p"
                            variant="body1"
                        >
                            With blockchain, you gain
                            <span className="font-bold"> greater ownership </span>
                            of your digital assets, from intellectual property to personal data. Decentralized platforms enable you to
                            <span className="font-bold"> maintain control over how your information is shared and monetized. </span>
                            This shift from centralized authorities to user-driven systems fosters autonomy and strengthens your online presence.
                        </Typography>
                        <Button
                            variant='outlined'
                            sx={{
                                borderColor: theme.palette.secondary.main,
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.text.secondary,
                                fontSize: theme.typography.h6,
                                padding: "8px 20px",
                                textTransform: "capitalize",
                                width: 163,
                                height: 44
                            }}
                            className="!rounded-full !shadow-md !mt-4"
                        >
                            Explore More
                        </Button>
                    </div>
                    <div className="space-y-2">
                        <Box
                            component="div"
                            sx={{
                                backgroundColor: theme.palette.carouselButtons.active,
                                width: 10,
                                height: 62,
                                borderRadius: 6
                            }}
                        />
                        <Box
                            component="div"
                            sx={{
                                backgroundColor: theme.palette.carouselButtons.inActive,
                                width: 10,
                                height: 62,
                                borderRadius: 6
                            }}
                        />
                        <Box
                            component="div"
                            sx={{
                                backgroundColor: theme.palette.carouselButtons.inActive,
                                width: 10,
                                height: 62,
                                borderRadius: 6
                            }}
                        />
                        <Box
                            component="div"
                            sx={{
                                backgroundColor: theme.palette.carouselButtons.inActive,
                                width: 10,
                                height: 62,
                                borderRadius: 6
                            }}
                        />
                        <Box
                            component="div"
                            sx={{
                                backgroundColor: theme.palette.carouselButtons.inActive,
                                width: 10,
                                height: 62,
                                borderRadius: 6
                            }}
                        />
                        <Box
                            component="div"
                            sx={{
                                backgroundColor: theme.palette.carouselButtons.inActive,
                                width: 10,
                                height: 62,
                                borderRadius: 6
                            }}
                        />
                    </div>
                </Paper>
                <Paper
                    elevation={3}
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
                    <img src={CardanoBg} alt="Cardano logo" className="absolute top-0 right-0" />
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
                        className="w-[632px] !mt-4"
                    >
                        We offer development services on the
                        <span className="font-bold"> Cardano blockchain</span>,
                        delivering secure, scalable, and innovative solutions tailored to your needs.
                    </Typography>
                    <div className="grid grid-cols-2 gap-8 mt-14">
                        {offersData.map((datum, index) => (
                            <Card
                                key={index}
                                sx={{
                                    backgroundColor: theme.palette.primary.dark,
                                    padding: "33px 25px",
                                    borderRadius: "24px",
                                }}
                                className="!shadow-lg"
                            >
                                <CardContent sx={{ padding: "16px 16px 0 16px" }}>
                                    <div className="flex gap-4 items-center">
                                        {React.createElement(datum.icon, {
                                            sx: { fontSize: 28 }
                                        })}
                                        <Typography
                                            component="h5"
                                            variant="h5"
                                        >
                                            {datum.title}
                                        </Typography>
                                    </div>
                                    <div className="!text-left mt-5">
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
                                                        paddingY: "4px"
                                                    }}
                                                >
                                                    {listItems}
                                                </ListItem>
                                            ))}
                                        </List>
                                    </div>
                                </CardContent>
                                <CardActions sx={{ padding: "8px 16px 16px 16px" }}>
                                    <Button
                                        variant='outlined'
                                        sx={{
                                            borderColor: theme.palette.secondary.main,
                                            backgroundColor: theme.palette.primary.main,
                                            color: theme.palette.text.secondary,
                                            fontSize: theme.typography.h6,
                                            width: 163,
                                            height: 44,
                                            maxWidth: "163px",
                                            textTransform: "capitalize"
                                        }}
                                        className="!rounded-full !shadow-md"
                                    >
                                        {datum.buttonTitle}
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </div>
                </Paper>
            </div>
        </section>
    )
}

export default SecondSection;