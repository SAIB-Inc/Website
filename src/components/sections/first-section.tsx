import { Button, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'

import FirstSectionImage2 from "../../images/first-section-image2.webp";
import WaveLine from "../../images/waveLine1.svg"
import Cursor from "../../images/saib-cursor.svg";

const FirstSection: React.FC = () => {
    const theme = useTheme()

    return (
        <section className='bg-gradient-to-b from-[#F3F1FF] from-60% to-[#E4E1FA]'>
            <div className='container mx-auto flex items-center justify-between max-w-[1139px] pt-40'>
                <div className='w-[779px]'>
                    <p className='text-[72px] leading-none -tracking-[0.001em] font-medium text-[#3A376A]'>
                        We are...<br />
                        <span className='font-bold'>Softwarez,</span> at its
                        <span className='font-bold text-[#6F03E0]'> Best</span>.
                    </p>
                    <p className='!text-lg mt-4 tracking-wide !leading-relaxed'>
                        We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for
                        <span className='!text-[#3A376A] font-bold'> Cardano.</span>
                    </p>
                    <div className='relative'>
                        <Button
                            variant='contained'
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                color: "white",
                                borderRadius: "9999px",
                                fontWeight: "700",
                                padding: "8px 25px",
                                marginTop: "2.25rem",
                                textTransform: "capitalize"
                            }}
                        >
                            Build With Us
                        </Button>
                        <img src={Cursor} alt='Saib Cursor' className='absolute !left-[155px] top-14' />
                    </div>
                </div>
                <StaticImage alt="first section image" src="../../images/first-section-image.svg" />
            </div>

            <div
                style={{
                    backgroundImage: `url(${WaveLine})`
                }}
                className='bg-no-repeat bg-center bg-[length:100%_auto] w-full h-[20vh] mt-10'
            />

            <div className='container mx-auto flex items-center justify-between max-w-[1139px] pt-[70px] pb-36 relative'>
                <div className='space-y-4 w-[715px]'>
                    <div>
                        <p className='text-[#6F03E0] font-bold'>What we do best...</p>
                        <h1 className='!font-bold text-5xl tracking-normal '>We make 
                            <span className='text-[#6F03E0] !font-bold'> Cardano</span> Software
                        </h1>
                    </div>
                    <p className='text-lg !mt-1 tracking-[0.01rem] leading-relaxed'>
                        We specialize in decentralized applications built on the
                        <span className='font-bold text-[#3A376A]'> Cardano</span> blockchain. We focus on creating
                        <span className='font-bold text-[#3A376A]'> secure, scalable,</span> and
                        <span className='font-bold text-[#3A376A]'> sustainable </span>
                        solutions that leverage Cardano's proof-of-stake protocol to drive innovation in DeFi
                        <br /> and enterprise blockchain solutions.
                    </p>
                    <Button
                        variant='outlined'
                        sx={{
                            borderColor: theme.palette.secondary.main,
                            backgroundColor: "#EBE8FD",
                            color: theme.palette.text.secondary,
                            borderRadius: "9999px",
                            fontWeight: "700",
                            padding: "7px 35px",
                            textTransform: "capitalize"
                        }}
                        className="!shadow-md !mt-7"
                    >
                        Know More                       
                    </Button>
                </div>
                <img alt='first section image 2' src={FirstSectionImage2} className='absolute -top-24 -right-40 w-[572px] h-[488px] rounded-xl' />
            </div>
        </section>
    )
}

export default FirstSection