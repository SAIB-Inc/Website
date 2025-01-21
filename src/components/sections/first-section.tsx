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
            <div className='container mx-auto flex items-center justify-between max-w-[1139px] pt-40'>
                <div className='w-[779px]'>
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
                    <Typography
                        component="p"
                        variant="body1"
                        className="!mt-4"
                    >
                        We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for
                        <Typography
                            component="span"
                            variant="body1"
                            className="!font-bold"
                        >
                            {' '}Cardano.
                        </Typography>
                    </Typography>
                    <div className='relative'>
                        <Button
                            variant='contained'
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
                        <SaibCursor className="absolute !left-[155px] top-14 !text-[53px]"/>
                    </div>
                </div>
                <img alt="first section image" src={FirstSectionImage} />
            </div>

            <div className="flex h-[190px] mt-16">
                <Box 
                    component="div"
                    sx={{
                        backgroundColor: theme.palette.secondary.dark
                    }}
                    className="!w-[calc(50%-500px)] !h-[8px] !mt-[27px] !-mr-[5px]" />
                <LightningBackground className="!relative !-left-60 !-top-[10.6px] !text-[150px] !w-full !max-w-[780px]"/>
            </div>

            <div className='container mx-auto flex items-center justify-between max-w-[1139px] pt-[50px] pb-36 relative'>
                <div className='space-y-4 w-[715px]'>
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
                        We specialize in decentralized applications built on the
                        <span className="font-bold"> Cardano </span> blockchain. We focus on creating
                        <span className="font-bold"> secure, scalable, </span> and
                        <span className="font-bold"> sustainable </span>
                        solutions that leverage Cardano's proof-of-stake protocol to drive innovation in DeFi<br /> and enterprise blockchain solutions.
                    </Typography>
                    <Button
                        variant='outlined'
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
                <Lightning className="absolute -top-40 right-12 !text-[69px]"/>
                <img alt="first section image 2" src={FirstSectionImage2} className="absolute -top-40 -right-[440px] scale-120 rounded-xl" />
            </div>
        </Box>
    )
}

export default FirstSection