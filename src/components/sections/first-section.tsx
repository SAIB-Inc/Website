import { Button } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import FirstSectionImage from "../../images/first-section-image.svg";
import FirstSectionImage2 from "../../images/first-section-image2.png";

const FirstSection: React.FC = () => {
    return (
        <section className='bg-gradient-to-b from-[#EBE9F8] to-[#D3CDF3]'>
            <div className='container mx-auto flex items-center justify-center max-w-[1139px] pt-32'>
                <div>
                    <p className='text-[66px] leading-10 tracking-tight font-medium'>
                        We are...<br />
                        <span className='font-bold'>Softwarez,</span> at its
                        <span className='font-bold text-[#6F03E0]'> Best</span>.
                    </p>
                    <p className='text-lg mt-4'>We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for <span>Cardano.</span></p>
                    <Button
                        variant="contained"
                        className='text-xl rounded-full py-2 px-8 capitalize bg-[#6F03E0] mt-9'>
                        Build With Us
                    </Button>
                </div>
                <img alt='first section image' src={FirstSectionImage} />
            </div>
            <div className='container mx-auto flex items-center justify-center max-w-[1139px]'>
                <div className='space-y-4'>
                    <div>
                        <p className='text-[#6F03E0] font-bold'>What we do best...</p>
                        <h1 className='font-bold text-5xl'>We make <span className='text-[#6F03E0] font-bold'>Cardano</span> Software</h1>
                    </div>
                    <p className='text-lg'>
                        We specialize in decentralized applications built on the
                        <span className='font-bold text-[#3A376A]'> Cardano</span> blockchain. We focus on creating
                        <span className='font-bold text-[#3A376A]'> secure, scalable,</span> and
                        <span className='font-bold text-[#3A376A]'> sustainable </span>
                        solutions that leverage Cardano's proof-of-stake protocol to drive innovation in DeFi
                        and enterprise blockchain solutions.</p>
                    <Button variant='outlined' className='rounded-full bg-[#E7E1FF] text-[#6F03E0] text-base !border-1 !border-[#6F03E0] capitalize font-bold px-7 py-2 shadow-md'>Know More</Button>
                </div>
                <img alt='first section image 2' src={FirstSectionImage2} />
            </div>
        </section>
    )
}

export default FirstSection