import { Button } from '@mui/material';
import React from 'react'

import FirstSectionImage from "../../images/first-section-image.svg";
import FirstSectionImage2 from "../../images/first-section-image2.png";
import WaveLine from "../../images/waveLine1.svg"
import Cursor from "../../images/saib-cursor.svg"

const FirstSection: React.FC = () => {
    return (
        <section className='bg-gradient-to-b from-[#EBE9F8] to-[#D3CDF3]'>
            <div className='container mx-auto flex items-center justify-between max-w-[1139px] pt-60'>
                <div className='w-[779px]'>
                    <p className='text-[66px] leading-10 tracking-wide font-medium text-[#3A376A]'>
                        We are...<br />
                        <span className='font-bold'>Softwarez,</span> at its
                        <span className='font-bold text-[#6F03E0]'> Best</span>.
                    </p>
                    <p className='!text-lg mt-4 tracking-[0.07em] leading-relaxed'>We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for
                        <span className='!text-[#3A376A] font-bold'> Cardano.</span>
                    </p>
                    <div className='relative'>
                        <button
                            className='text-base !border-1 bg-[#6F03E0] rounded-full text-white capitalize !mt-9 font-bold font-poppins !px-7 !py-[10px] shadow-md'
                        >
                            Build With Us
                        </button>
                        <img src={Cursor} alt='Saib Cursor' className='absolute left-[155px] top-14' />
                    </div>
                </div>
                <img alt='first section image' src={FirstSectionImage} />
            </div>

            <div
                style={{
                    backgroundImage: `url(${WaveLine})`
                }}
                className='bg-no-repeat bg-center bg-[length:100%_auto] w-full h-56 md:h-72 2xl:h-[20vh] mt-20'
            />

            <div className='container mx-auto flex items-center justify-between max-w-[1139px] py-52 relative'>
                <div className='space-y-4 w-[715px]'>
                    <div>
                        <p className='text-[#6F03E0] font-bold'>What we do best...</p>
                        <h1 className='font-extrabold text-5xl tracking-normal '>We make <span className='text-[#6F03E0] font-extrabold'>Cardano</span> Software</h1>
                    </div>
                    <p className='text-lg !mt-1 tracking-[0.06em] leading-relaxed'>
                        We specialize in decentralized applications built on the
                        <span className='font-bold text-[#3A376A]'> Cardano</span> blockchain. We focus on creating
                        <span className='font-bold text-[#3A376A]'> secure, scalable,</span> and
                        <span className='font-bold text-[#3A376A]'> sustainable </span>
                        solutions that leverage Cardano's proof-of-stake protocol to drive innovation in DeFi
                        and enterprise blockchain solutions.
                    </p>
                    <button
                        className='text-base !border-1 bg-[#E7E1FF] rounded-full text-[#6F03E0] border !border-[#6F03E0] capitalize !mt-6 font-bold font-poppins !px-[35px] !py-[9px] shadow-md'
                    >
                        Know More
                    </button>
                </div>
                <img alt='first section image 2' src={FirstSectionImage2} className='absolute -right-72 w-[706px] h-[512px] rounded-sm' />
            </div>
        </section>
    )
}

export default FirstSection