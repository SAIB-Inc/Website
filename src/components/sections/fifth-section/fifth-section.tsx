import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { SaibCursor } from "../../../images/sections/first-section";
import SaibButton from "../../../components/common/saib-button";
import FifthSectionImage from "../../../images/sections/fifth-section/fifth-section-image.webp"
import { CardanoPurple, CSharpPurple, HaskellPurple, RustPurple } from "../../../images/sections/fifth-section";

const FifthSection: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                background: theme.palette.background.fifthSection,
            }}
            className="2xl:!h-[calc(100vh-296px)] !px-6"
        >
            <div className="max-w-(--breakpoint-xl) mx-auto flex flex-col text-center items-center justify-between h-full py-25 lg:py-50 lg:flex-row lg:text-left">
                <div className="space-y-3! flex flex-col items-center lg:items-start max-w-65 sm:max-w-180 lg:max-w-none">
                    <Typography
                        component="h6"
                        variant="h6"
                        color="secondary"
                    >
                        Well... that&apos;s a wrap!
                    </Typography>
                    <Typography
                        component="h3"
                        variant="h3"
                        sx={{
                            fontWeight: 500
                        }}
                    >
                        <span>Ready to work with the </span>
                        <Typography
                            component="span"
                            variant="h3"
                            color="secondary"
                            sx={{
                                fontWeight: 700
                            }}
                        >
                            Best
                        </Typography>
                        <span>?</span>
                    </Typography>
                    <Typography
                        component="p"
                        variant="body1"
                        sx={{
                            maxWidth: 663
                        }}
                    >
                        <span>Transform your business with </span>
                        <span className="font-bold">secure, scalable blockchain solutions</span>
                        <span>—let&apos;s get future-proof together!</span>
                    </Typography>
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
                <div className="shrink-0 relative flex flex-col justify-center items-center">
                    <div className="w-9 absolute left-24 top-10 sm:w-13 sm:top-17 sm:left-38 animate-float">
                        <img
                            alt="saib graphic"
                            src={CardanoPurple}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-7 absolute left-8 top-25 sm:w-11 sm:left-8 sm:top-40 animate-float" style={{ animationDelay: "0.8s" }}>
                        <img
                            alt="saib graphic"
                            src={CSharpPurple}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-8 absolute right-10 top-33 sm:w-12 sm:top-54 sm:right-12 animate-float" style={{ animationDelay: "0.2s" }}>
                        <img
                            alt="saib graphic"
                            src={RustPurple}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-8 absolute right-17 bottom-22 sm:w-12 sm:right-30 sm:bottom-36 animate-float !delay-200" style={{ animationDelay: "0.5s" }}>
                        <img
                            alt="saib graphic"
                            src={HaskellPurple}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="max-w-90 sm:max-w-none">
                        <img src={FifthSectionImage} alt="last section image" />
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default FifthSection;