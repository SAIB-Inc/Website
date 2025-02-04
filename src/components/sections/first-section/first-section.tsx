import React from "react"
import { Box, Typography, useTheme } from "@mui/material";
import { FirstSectionImage2, LightningBackground, Lightning, SaibCursor, Hand, Cardano, Rust, CSharp, Haskell, LightningThree, LightningFour, FirstSectionImageMobile, LightningTwo } from "../../../images/sections/first-section";
import SaibButton from "../../common/saib-button";

const FirstSection: React.FC = () => {
    const theme = useTheme()

    return (
        <Box
            component="section"
            id="home"
            sx={{
                background: `linear-gradient(to bottom, ${theme.palette.gradient.main} 60%, ${theme.palette.gradient.dark})`,
                boxShadow: theme.shadows[2],
                color: theme.palette.text.primary,
                paddingX: "24px"
            }}
            className="max-lg:!bg-none max-lg:!shadow-none"
        >
            <div className="mx-auto !pt-40 max-w-(--breakpoint-xl) 2xl:h-[calc(100vh-150px)] flex flex-col justify-center">
                <div className="flex flex-col justify-between items-center text-center gap-10 lg:flex-row lg:text-left lg:!justify-between lg:gap-24">
                    <div className="max-w-200">
                        <div className="relative flex flex-col items-center justify-center">
                            <div>
                                <Typography
                                    component="h2"
                                    variant="h2"
                                    className="-tracking-[0.005em] max-sm:!text-5xl max-lg:!text-5xl max-w-65 sm:max-w-none"
                                >
                                    <span>We are...</span>
                                    <br />
                                    <span className="font-bold">Softwarez,</span>
                                    <span> at its </span>
                                    <Typography
                                        component="span"
                                        variant="h1"
                                        color="secondary"
                                        className="max-lg:!text-5xl"
                                    >
                                        Best
                                    </Typography>
                                    <span>.</span>
                                </Typography>
                            </div>
                            <div className="lg:hidden">
                                <div>
                                    <img
                                        alt="rust"
                                        src={Rust}
                                        className="absolute top-15 -left-10 w-8 sm:top-60 sm:left-30 sm:w-10"
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="haskell"
                                        src={Haskell}
                                        className="absolute top-28 -left-15 w-8 sm:top-80 sm:left-20 sm:w-10"
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="cardano"
                                        src={Cardano}
                                        className="absolute top-10 -right-8 w-9 sm:top-60 sm:right-24 sm:w-11"
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="c#"
                                        src={CSharp}
                                        className="absolute top-22 -right-14 w-7 sm:top-80 sm:right-20 sm:w-9"
                                    />
                                </div>
                                <div>
                                    <Lightning sx={{ fontSize: 44 }} className="absolute -top-2 -right-20 -rotate-60 sm:-right-10" />
                                </div>
                                <div>
                                    <LightningThree sx={{ fontSize: 250 }} className="absolute -top-50 -left-60" />
                                </div>
                                <div>
                                    <LightningFour sx={{ fontSize: 50 }} className="absolute -top-18 -right-22 sm:-right-10" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:max-w-170">
                            <Typography
                                component="p"
                                variant="body1"
                                className="mt-4! max-w-70 max-sm:!text-base max-sm:leading-7 sm:max-w-140 lg:max-w-none"
                            >
                                <span>We are a software development company based in Philippines that has been established through connecting the dots of its founders&apos; shared and common passion for </span>
                                <span className="font-bold">Cardano.</span>
                            </Typography>
                        </div>
                        <div className="relative">
                            <SaibButton
                                variant="contained"
                                className="!mt-9"
                                href="https://calendly.com/saibdev"
                                target="_blank"
                            >
                                Build With Us
                            </SaibButton>
                            <SaibCursor className="absolute left-[155px]! top-14" />
                        </div>

                    </div>
                    <div className="shrink-0 relative flex flex-col justify-center items-center gap-22">
                        <div className="w-47 animate-float">
                            <img
                                alt="saib graphic"
                                src={Cardano}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-11 absolute left-3 top-40 animate-float" style={{ animationDelay: "0.8s" }}>
                            <img
                                alt="saib graphic"
                                src={CSharp}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-11 absolute top-50 animate-float" style={{ animationDelay: "0.2s" }}>
                            <img
                                alt="saib graphic"
                                src={Rust}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-14 absolute right-5 top-40 animate-float !delay-200" style={{ animationDelay: "0.5s" }}>
                            <img
                                alt="saib graphic"
                                src={Haskell}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-72">
                            <img
                                alt="saib graphic"
                                src={Hand}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <img
                            alt="saib graphic"
                            src={FirstSectionImageMobile}
                        />
                    </div>
                </div>
                <div className="h-47 mt-16 w-full relative hidden lg:block">
                    <img
                        alt="lightning background"
                        src={LightningBackground}
                        className="absolute -left-200 w-full"
                    />
                </div>
            </div>
            <div
                className="mx-auto mt-25 flex flex-col items-center justify-between gap-10 pt-13 pb-36 relative max-w-(--breakpoint-xl) lg:flex-row text-center lg:text-left lg:gap-0 lg:mt-0"
            >
                <div className="space-y-4 max-w-175 flex flex-col items-center lg:block">
                    <div className="relative w-max">
                        <Typography
                            component="h6"
                            variant="h6"
                            color="secondary"
                            className="max-sm:!text-sm"
                        >
                            What we do best...
                        </Typography>
                        <div className="lg:hidden">
                            <div>
                                <LightningTwo className="absolute -top-3 -right-12" />
                            </div>
                            <div>
                                <LightningTwo className="absolute -top-3 -left-12 scale-y-[-1] rotate-180" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Typography
                            component="h3"
                            variant="h3"
                            className="mt-2! max-w-85 max-sm:!text-4xl sm:max-w-140 lg:max-w-none"
                        >
                            <span>We make </span>
                            <Typography
                                component="span"
                                variant="h3"
                                color="secondary"
                                className="max-sm:!text-4xl"
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
                            className="max-w-70 !mt-5 max-sm:!text-base max-sm:leading-7 sm:max-w-140 sm:!mt-0 lg:max-w-none"
                        >
                            <span>We specialize in decentralized applications built on the</span>
                            <span className="font-bold"> Cardano </span>
                            <span>blockchain. We focus on creating</span>
                            <span className="font-bold"> secure, scalable, </span>
                            <span>and</span>
                            <span className="font-bold"> sustainable </span>
                            <span>solutions that leverage Cardano&apos;s proof-of-stake protocol to drive innovation in DeFi </span>
                            <span>and enterprise blockchain solutions.</span>
                        </Typography>
                    </div>
                    <SaibButton
                        variant="outlined"
                        className="mt-7 xl:!mt-9"
                    >
                        Know More
                    </SaibButton>
                </div>
                <div className="relative w-125 shrink-0">
                    <div className="hidden lg:block">
                        <Lightning className="absolute -top-88 right-20" />
                    </div>
                    <div className="-top-90 -right-96 scale-60 sm:scale-80 lg:absolute lg:scale-100">
                        <img
                            alt="saib code preview"
                            src={FirstSectionImage2}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default FirstSection;