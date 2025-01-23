import React from "react"
import { Box, Typography, useTheme } from "@mui/material";
import { FirstSectionImage, FirstSectionImage2, LightningBackground, Lightning, SaibCursor } from "../../../images/sections/first-section";
import SaibButton from "../../common/saib-button";

const FirstSection: React.FC = () => {
    const theme = useTheme()

    return (
        <Box
            component="section"
            sx={{
                background: `linear-gradient(to bottom, ${theme.palette.gradient.main} 60%, ${theme.palette.gradient.dark})`,
                boxShadow: theme.shadows[1]
            }}
        >
            <div className="mx-auto flex items-center justify-between !pt-40 max-w-(--breakpoint-xl)">
                <div className="max-w-200">
                    <div>
                        <Typography
                            component="h2"
                            variant="h2"
                            className="-tracking-[0.005em]"
                        >
                            <span>We are...</span>
                            <br />
                            <span className="font-bold">Softwarez,</span>
                            <span> at its </span>
                            <Typography
                                component="span"
                                variant="h1"
                                color="secondary"
                            >
                                Best
                            </Typography>
                            <span>.</span>
                        </Typography>
                    </div>
                    <div className="max-w-170">
                        <Typography
                            component="p"
                            variant="body1"
                            className="mt-4!"
                        >
                            <span>We are a software development company based in Philippines that has been established through connecting the dots of its founders' shared and common passion for </span>
                            <span className="font-bold">Cardano.</span>
                        </Typography>
                    </div>
                    <div className="relative">
                        <SaibButton
                            variant="contained"
                            className="!mt-9"
                        >
                            Build With Us
                        </SaibButton>
                        <SaibCursor className="absolute left-[155px]! top-14" />
                    </div>
                </div>
                <div className="shrink-0 w-72">
                    <img
                        alt="first section image"
                        src={FirstSectionImage}
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="h-47 mx-auto mt-16 relative max-w-(--breakpoint-xl)">
                <img
                    alt="lighning background"
                    src={LightningBackground}
                    className="absolute -left-200 w-full"
                />
            </div>
            <div className="container mx-auto flex items-center justify-between pt-13 pb-36 relative max-w-(--breakpoint-xl)">
                <div className="space-y-4 max-w-175">
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
                            className="mt-2!"
                        >
                            <span>We make </span>
                            <Typography
                                component="span"
                                variant="h3"
                                color="secondary"
                            >
                                Cardano
                            </Typography>
                            <span> Software</span>
                        </Typography>
                    </div>
                    <div>
                        <Typography
                            component="p"
                            variant="body1"
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
                    </div>
                    <div>
                        <SaibButton
                            variant="outlined"
                            className="!mt-9"
                        >
                            Know More
                        </SaibButton>
                    </div>
                </div>
                <div className="relative w-125 shrink-0">
                    <div>
                        <Lightning className="absolute -top-88 right-20 text-[69px]!" />
                    </div>
                    <div>
                        <img alt="first section image 2" src={FirstSectionImage2} className="absolute -top-64 -right-64 scale-150 rounded-xl" />
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default FirstSection