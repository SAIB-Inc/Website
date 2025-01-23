import React from "react"
import { Box, Button, Typography, useTheme } from "@mui/material";

import FirstSectionImage from "../../images/sections/first-section/first-section-image.webp";
import FirstSectionImage2 from "../../images/sections/first-section/first-section-image2.webp";
import LightningBackground from "../../images/sections/first-section/lightning-background";
import Lightning from "../../images/sections/first-section/lightning";
import SaibCursor from "../../images/sections/first-section/saib-cursor";

const FirstSection: React.FC = () => {
    const theme = useTheme()

    return (
        <Box
            component="section"
            sx={{
                background: `linear-gradient(to bottom, ${theme.palette.gradient.main} 60%, ${theme.palette.gradient.dark})`,
            }}
        >
            <div className="container mx-auto flex items-center justify-between pt-40 max-w-screen-xl">
                <div className="max-w-4xl">
                    <div>
                        <Typography
                            component="h2"
                            variant="h2"
                            className="-tracking-[0.005em]"
                        >
                            We are...
                            <br />
                            <Typography
                                component="span"
                                variant="h1"
                            >
                                Softwarez,
                            </Typography> {' '}
                            at its {' '}
                            <Typography
                                component="span"
                                variant="h1"
                                color="secondary"
                            >
                                Best
                            </Typography>
                            .
                        </Typography>
                    </div>
                    <div>
                        <Typography
                            component="p"
                            variant="body1"
                            className="!mt-4"
                        >
                            <span>We are a software development company based in Philippines that has been established through connecting the dots of its founders' shared and common passion for </span>
                            <Typography
                                component="span"
                                variant="body1"
                                className="!font-bold"
                            >
                                Cardano.
                            </Typography>
                        </Typography>
                    </div>
                    <div className="relative">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                fontSize: theme.typography.h6,
                                color: "white",
                                padding: "9px 24px",
                                marginTop: "2.25rem",
                                height: 44,
                                width: 163,
                                textTransform: "capitalize"
                            }}
                            className="!rounded-full"
                        >
                            Build With Us
                        </Button>
                        <SaibCursor className="absolute !left-[155px] top-14 !text-[53px]" />
                    </div>
                </div>
                <div className="flex-shrink-0 w-72">
                    <img
                        alt="first section image"
                        src={FirstSectionImage}
                        className="w-full h-full"
                    />
                </div>
            </div>

            <div className="flex h-[190px] mt-16">
                <Box
                    component="div"
                    sx={{
                        backgroundColor: theme.palette.secondary.dark
                    }}
                    className="!w-[calc(50%-500px)] !h-2 !mt-[27px] !-mr-[5px]" />
                <LightningBackground className="!relative !-left-60 !-top-[10.6px] !text-[150px] !w-full !max-w-[780px]" />
            </div>

            <div className="container mx-auto flex items-center justify-between pt-[50px] pb-36 relative max-w-screen-xl">
                <div className="space-y-4 max-w-3xl">
                    <div>
                        <Typography
                            component="h6"
                            variant="h6"
                            color="secondary"
                        >
                            What we do best...
                        </Typography>
                        <Typography
                            component="h3"
                            variant="h3"
                            className="!mt-2"
                        >
                            We make
                            <Typography
                                component="span"
                                variant="h3"
                                color="secondary"
                            >
                                {' '}Cardano{' '}
                            </Typography>
                            Software
                        </Typography>
                    </div>
                    <Typography
                        component="p"
                        variant="body1"
                        sx={{
                            letterSpacing: "0.01rem",
                            marginTop: "0.5rem"
                        }}
                    >
                        <span>We specialize in decentralized applications built on the</span>
                        <span className="font-bold"> Cardano </span>
                        <span>blockchain. We focus on creating</span>
                        <span className="font-bold"> secure, scalable, </span>
                        <span>and</span>
                        <span className="font-bold"> sustainable </span>
                        <span>solutions that leverage Cardano's proof-of-stake protocol to drive innovation in DeFi</span>
                        <br />
                        <span>and enterprise blockchain solutions.</span>
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.text.secondary,
                            fontSize: theme.typography.h6,
                            fontWeight: "bold",
                            padding: "8px 30px",
                            width: 163,
                            height: 44,
                            textTransform: "capitalize"
                        }}
                        className="!rounded-full !shadow-md !mt-7"
                    >
                        Know More
                    </Button>
                </div>
                <div>
                    <div>
                        <Lightning className="absolute -top-40 right-12 !text-[69px]" />
                    </div>
                    <div>
                        <img alt="first section image 2" src={FirstSectionImage2} className="absolute -top-40 -right-[440px] scale-120 rounded-xl" />
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default FirstSection