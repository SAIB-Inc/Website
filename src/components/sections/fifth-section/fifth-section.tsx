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
            className="2xl:!h-[calc(100vh-296px)]"
        >
            <div className="max-w-(--breakpoint-xl) mx-auto flex items-center justify-between h-full py-50">
                <div className="space-y-3!">
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
                            width: 663
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
                        >
                            Build With Us
                        </SaibButton>
                        <SaibCursor className="absolute left-[155px]! top-14" />
                    </div>
                </div>
                <div className="shrink-0 relative flex flex-col justify-center items-center">
                    <div className="w-13 absolute top-17 left-38 animate-float">
                        <img
                            alt="saib graphic"
                            src={CardanoPurple}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-11 absolute left-8 top-40 animate-float" style={{ animationDelay: "0.8s" }}>
                        <img
                            alt="saib graphic"
                            src={CSharpPurple}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-12 absolute top-54 right-12 animate-float" style={{ animationDelay: "0.2s" }}>
                        <img
                            alt="saib graphic"
                            src={RustPurple}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-12 absolute right-30 bottom-36 animate-float !delay-200" style={{ animationDelay: "0.5s" }}>
                        <img
                            alt="saib graphic"
                            src={HaskellPurple}
                            className="w-full h-full"
                        />
                    </div>
                    <div>
                        <img src={FifthSectionImage} alt="last section image" />
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default FifthSection;