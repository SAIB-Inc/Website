import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "@mui/material"
import MainLayout from '../components/main-layout'
import Header from "../components/header"
import Team from "../components/team"
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from "@mui/icons-material"
import Footer from "../components/footer"
import TechnologyCards from "../components/technologyCards"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <section className="backgroundImage pt-6">
        <div className="max-w-[1200px] m-auto pb-[226px]">
          <Header/>
          <div className="mt-16 md:mt-[180px] xl:mt-[169px] m-auto max-w-[630px] text-center text-white">
            <h1 className="font-bold text-[55px] md:text-[105px] xl:text-[120px] leading-[55px] md:leading-[105px] xl:leading-[120px]">Softwarez, <span className="font-normal font-['Poppins']">at its</span> <span className="text-[#4F37EA]">best</span><span className="font-sans">.</span></h1>
            <p className="mt-6 leading-[27px] text-[18px] px-4 text-justify">We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for Cardano..</p>
            <Button href="https://calendly.com/saibdev" target="_blank" variant="contained" className="!rounded-[50px] !py-[12px] !px-[24px] !text-[18px] !normal-case !font-poppins !font-normal !m-auto !mt-6">Get Started</Button>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] m-auto relative p-6 bg-white pb-[120px]">
            <div className="absolute top-[-100px] p-[48px] w-full bg-white/70 backdrop-blur-md transparent rounded-3xl shadow-lg backgroundImage2">
              <div className="max-w-[780px]">
                <p className="text-[52px] font-bold font-['Poppins'] tracking-tight">We make <span className="bg-gradient-to-br from-blue1 via-blue2 to-purple inline-block text-transparent bg-clip-text">Cardano</span> Software!</p>
                <p className="text-[#101010] text-[18px]">We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for Cardano.</p>
                <Button href="https://calendly.com/saibdev" target="_blank" variant="contained" className="!rounded-[50px] !py-[12px] !px-[24px] !text-[18px] !normal-case !font-poppins !font-normal !m-auto !mt-6">Get Started</Button>
              </div>
            </div>
            <div className="mt-[20rem] m-auto max-w-[500px] text-[52px] text-center !p-0 mb-[50px]">
              <p className="tracking-tighter">Empowering Your <span className="bg-gradient-to-r from-blue1 via-blue2 to-purple inline-block text-transparent bg-clip-text font-bold w-full">Digital Presence</span></p>
            </div>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-3 rounded-[24px] p-[48px] border-[1px] border-gray-tint flex flex-col gap-y-[10px]">
                <StaticImage height={64} width={64} placeholder="none" className="!max-w-[64px]" src="../images/icons/frontend.svg" alt="" />
                <p className="text-[45px] tracking-tighter font-bold">Frontened Excellence</p>
                <p className="text-[18px]">Transforming ideas into stunning, intuitive web experiences that captivate and engage.</p>
              </div>
              <div className="col-span-3 rounded-[24px] p-[48px] border-[1px] border-gray-tint flex flex-col gap-y-[10px]">
                <StaticImage height={64} width={64} placeholder="none" className="!max-w-[64px]" src="../images/icons/backend.svg" alt="" /> 
                <p className="text-[45px] tracking-tighter font-bold">Backend Reliability</p>
                <p className="text-[18px]">Powering your platforms with secure, efficient, and scalable server solutions.</p>
              </div>
              
              <div className="col-span-2 rounded-[24px] p-[48px] border-[1px] border-gray-tint flex flex-col gap-y-[10px]">
                <StaticImage height={64} width={64} placeholder="none" className="!max-w-[64px]" src="../images/icons/software.svg" alt="" />
                <p className="text-[45px] tracking-tighter font-bold leading-tight">Software Innovation</p>
                <p className="text-[18px]">Developing bespoke software solutions that drive growth and enhance productivity.</p>
              </div>
              <div className="col-span-2 rounded-[24px] p-[48px] border-[1px] border-gray-tint flex flex-col gap-y-[10px]">
                <StaticImage height={64} width={64} placeholder="none" className="!max-w-[64px]" src="../images/icons/blockchain.svg" alt="" />
                <p className="text-[45px] tracking-tighter font-bold leading-tight">Blockchain Mastery</p>
                <p className="text-[18px]">Leveraging blockchain technology to deliver decentralized, transparent, secure applications.</p>
              </div>
              <div className="col-span-2 rounded-[24px] p-[48px] border-[1px] border-gray-tint flex flex-col gap-y-[10px]">
                <StaticImage height={64} width={64} placeholder="none" className="!max-w-[64px]" src="../images/icons/contract.svg" alt="" />
                <p className="text-[45px] tracking-tighter font-bold leading-tight">Smart Contracts</p>
                <p className="text-[18px]">Creating decentralized smart contracts for secure, trustless efficiency.</p>
              </div>
            </div>
            <div className="mt-[10rem] m-auto max-w-[500px] text-[64px] font-bold text-center !p-0 mb-[50px]">
              <p className="tracking-tighter">Technologies</p>
            </div>
            <TechnologyCards/>
          </div>
        </div>
        <div className="max-w-[1200px] m-auto pb-[226px] mt-[130px] xl:mt-[226px] text-white py-16 px-2 xl:p-[80px] rounded-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
              <h2 className="text-[36px] leading-[45px] md:text-[52px] font-bold xl:leading-[62px] text-center">Our Team</h2>
              <Team/>
        </div>
        <div className="max-w-[1200px] m-auto pb-[226px] mt-[130px] xl:mt-[100px] text-white py-16 px-2 xl:p-[80px] rounded-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
              <h2 className="text-[36px] leading-[45px] md:text-[52px] font-bold xl:leading-[62px] text-center">Building With:</h2>
              <div className="flex gap-[20px] justify-between mt-[45px]">
                <StaticImage alt="" src="../images/partners/demeter.svg" className="w-[180px] h-[48px]"/>
                <StaticImage alt="" src="../images/partners/txpipe.svg" className="w-[72px] h-[48px]"/>
                <StaticImage alt="" src="../images/partners/utxo-rpc-logo.svg" className="w-[282px] h-[48px]"/>
                <StaticImage alt="" src="../images/partners/coinecta.svg" className="w-[48px] h-[48px]"/>
                <StaticImage alt="" src="../images/partners/crashr.svg" className="w-[200px] h-[48px]"/>
              </div>
        </div>
        <div className="bg-white h-[237px] relative backgroundImage3 mt-[130px]">
          <div className="max-w-[1200px] h-full flex justify-between items-center m-auto">
            <p className="text-[64px] font-bold tracking-tight">Start Working with us!</p>
            <Button href="https://calendly.com/saibdev" target="_blank" variant="contained" className="!rounded-[50px] !py-[12px] !px-[24px] !text-[23px] !normal-case !font-poppins !font-bold !bg-white !text-purple tracking-tight">Get Started</Button>
          </div>
        </div>
        <Footer/>
      </section>
    </MainLayout>
  );
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>SAIB · Softwarez, At It's Best - Where Software Meets Perfection</title>
      <meta name="description" content="" />
      <meta property="og:title" content="SAIB | Softwarez, At It's Best - Where Software Meets Perfection" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://saib.dev/" />
      <meta property="og:image" content="https://raw.githubusercontent.com/SAIB-Inc/Assets/main/saib-mission.png" />
      <meta property="og:image:alt" content="Softwarez, At It's Best" />
      <meta property="og:description" content="SAIB Website" />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:url" content="https://twitter.com/saibdev" />
      <meta name="twitter:site" content="@saibdev" />
      <meta name="twitter:creator" content="@saibdev" />
    </>
  )
}
