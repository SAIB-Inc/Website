import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "@mui/material"
import MainLayout from '../components/main-layout'
import Header from "../components/header"
import Team from "../components/Sections/team"
import Footer from "../components/footer"
import Technologies from "../components/Sections/technologies"
import Capabilities from "../components/Sections/capabilities"
import Partners from "../components/Sections/partners"
import Testimonials from "../components/Sections/testimonials"
import Offer from "../components/Sections/offer"
import Projects from "../components/Sections/projects"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <div className="backgroundImage pt-6">
        <div className="max-w-[1200px] m-auto px-6 md:h-[100vh] max-md:pb-[226px]">
          <Header />
          <div className="flex flex-col items-center justify-center mt-16 md:mt-[180px] xl:mt-[169px] m-auto max-w-[630px] text-center text-white">
            <h1 className="font-bold text-[50px] min-[360px]:text-[60px] min-[420px]:text-[70px] min-[520px]:text-[90px] min-[600px]:text-[105px] xl:text-[120px] leading-[55px] min-[360px]:leading-[65px] min-[520px]:leading-[90px] md:leading-[105px] xl:leading-[120px]">
              Softwarez, <span className="font-normal font-['Poppins']">at its</span> <span className="text-[#4F37EA]">best</span><span className="font-sans">.</span>
            </h1>
            <p className="mt-6 leading-[27px] text-[18px] px-4 text-center md:w-[700px]">
              We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for Cardano.
            </p>
            <Button
              href="https://calendly.com/saibdev"
              target="_blank"
              variant="contained"
              className="!rounded-[50px] !py-[12px] !px-[24px] !text-[18px] !normal-case !font-poppins !font-normal !m-auto !mt-6"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="bg-white w-full backgroundImage4">
          <div className="max-w-[1200px] m-auto relative p-6">
            <div className="absolute top-[-115px] p-[24px] py-[35px] sm:p-[40px] w-full left-1/2 right-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-md transparent rounded-3xl shadow-lg backgroundImage2 z-10">
              <div className="max-w-[600px] lg:max-w-[780px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-[15px]">
                <p className="text-[30px] md:text-[40px] lg:text-[52px] font-bold font-['Poppins'] tracking-tight max-sm:leading-[35px] leading-none">We make <span className="bg-gradient-to-br from-blue1 via-blue2 to-purple inline-block text-transparent bg-clip-text">Cardano</span> Software!</p>
                <p className="text-[#101010] text-[18px] mt-[26px]">We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for Cardano.</p>
                <Button
                  href="https://calendly.com/saibdev"
                  target="_blank"
                  variant="contained"
                  className="!rounded-[50px] !py-[12px] !px-[24px] !text-[18px] !normal-case !font-poppins !font-normal !m-auto !mt-6"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="max-w-[1200px] h-[115px] p-6 absolute top-[-115px] z-0 w-full left-1/2 right-1/2 transform -translate-x-1/2 rounded-t-3xl bg-gradient-to-l from-black via-purple to-blue1 backdrop-blur-md" />
          </div>
          <div className="max-w-[1200px] m-auto mb-[200px] p-6">
            <div className="max-[330px]:mt-[38rem] max-[420px]:mt-[33rem] max-lg:mt-[20rem] mt-[20rem] m-auto max-w-[500px] text-[28px] min-[390px]:text-[35px] min-[500px]:text-[52px] text-center !p-0 mb-[50px]">
              <p className="tracking-tighter">Empowering Your <span className="bg-gradient-to-r from-blue1 via-blue2 to-purple inline-block text-transparent bg-clip-text font-bold w-full">Digital Presence</span></p>
            </div>
            <Capabilities />
            <div className="flex items-center justify-center w-full mt-[24px]">
              <Button href="https://calendly.com/saibdev" target="_blank" variant="contained" className="!rounded-[50px] !py-[12px] !px-[24px] !text-[18px] !normal-case !font-poppins !font-normal !m-auto !mt-6">Explore More</Button>
            </div>
          </div>
          <div className="max-w-[1200px] xl:h-[100vh] m-auto mb-[180px]">
            <div className="mt-[10rem] m-auto max-w-[500px] text-[33px] sm:text-[64px] font-bold text-center !p-0 mb-[20px]">
              <p className="tracking-tighter bg-gradient-to-r from-blue1 via-blue2 to-purple text-transparent bg-clip-text">What We <span className="">Offer</span></p>
            </div>
            <Offer />
          </div>
          {/* <div className="max-w-[1200px] mb-[200px] overflow-hidden m-auto">
            <div className="mt-[10rem] m-auto max-w-[500px] text-[33px] sm:text-[64px] font-bold text-center !p-0 mb-[30px]">
              <p className="tracking-tighter bg-gradient-to-r from-blue1 via-blue2 to-purple text-transparent bg-clip-text">Testimonials</p>
            </div>
            <Testimonials />
          </div> */}
          <div className="max-w-[2500px] overflow-hidden m-auto mb-[200px]">
            <div className="mt-[2rem] m-auto max-w-[500px] text-[33px] sm:text-[64px] font-bold text-center !p-0 mb-[30px]">
              <p className="tracking-tighter bg-gradient-to-r from-blue1 via-blue2 to-purple text-transparent bg-clip-text">Technologies</p>
            </div>
            <Technologies />
          </div>
        </div>
        <div className="max-w-[1200px] m-auto mt-[130px] xl:mt-[100px] text-white max-sm:py-[80px] py-16 px-[30px] md:p-[60px] lg:p-[80px] max-xl:mx-[20px] backdrop-blur-md !text-black rounded-[24px]">
          <div className="m-auto max-w-[370px] text-[33px] sm:text-[64px] font-bold text-center !p-0 mb-[50px]">
            <h2 className="text-[36px] leading-[45px] sm:text-[52px] font-bold xl:leading-[62px] text-center text-white">Our Team</h2>
          </div>
          <Team />
        </div>
        <div className="max-w-[1200px] m-auto mt-[130px] xl:mt-[100px] text-white max-sm:py-[80px] py-16 px-[30px] md:p-[60px] lg:p-[80px] max-xl:mx-[20px] backdrop-blur-md !text-black rounded-[24px]">
          <div className="m-auto max-w-[450px] font-bold text-center !p-0 mb-[50px]">
            <h2 className="sm:h-[65px] text-[36px] leading-[45px] sm:text-[52px] font-bold xl:leading-[62px] text-center text-white">Building With</h2>
          </div>
          <Partners />
        </div>
        <div className="max-w-[1200px] m-auto mt-[130px] xl:mt-[100px] text-white max-sm:py-[80px] py-16 px-[30px] md:p-[60px] lg:p-[80px] max-xl:mx-[20px] backdrop-blur-md !text-black rounded-[24px]">
          <div className="m-auto max-w-[370px] text-[33px] sm:text-[64px] font-bold text-center !p-0 mb-[50px]">
            <h2 className="sm:h-[65px] text-[36px] leading-[45px] sm:text-[52px] font-bold xl:leading-[62px] text-center text-white">Projects</h2>
          </div>
          <Projects />
        </div>
        <div className="max-w-[1200px] m-auto mt-[130px] xl:mt-[100px] text-white max-sm:py-[80px] py-16 px-2 xl:p-[80px] max-xl:mx-[20px]">
          <h2 className="text-[36px] leading-[45px] sm:text-[52px] font-bold xl:leading-[62px] text-center">History</h2>
          <div className="max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-[40px] flex gap-[20px] justify-evenly mt-[55px] sm:mt-[45px]">
            <div className="flex flex-col items-center text-center gap-[15px] max-w-[500px]">
              <a href="https://cardanofoundation.org" target="_blank" rel="noopener noreferrer">
                <StaticImage
                  alt=""
                  src="../images/partners/Cardano Foundation.svg"
                  className="w-[200px] h-[50px] sm:w-[260px] sm:h-[70px]"
                />
              </a>
              <p>Swiss foundation supporting evolution of the Cardano cryptocurrency.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-[15px] max-w-[500px]">
              <a href="https://www.dcspark.io" target="_blank" rel="noopener noreferrer">
                <StaticImage
                  alt=""
                  src="../images/partners/dc-spark.svg"
                  className="w-[200px] h-[40px] sm:w-[350px] sm:h-[70px]"
                />
              </a>
              <p>Building high-quality crypto products that unify the user experience within blockchain ecosystems.</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[237px] relative backgroundImage3 mt-[130px]">
          <div className="max-w-[1200px] h-full flex justify-between items-center m-auto max-[855px]:flex-col max-[855px]:items-center max-[855px]:justify-center max-md:text-center max-[855px]:gap-[20px] max-[855px]:text-white max-xl:px-6">
            <p className="text-[30px] xs:text-[40px] md:text-[46px] lg:text-[55px] font-bold tracking-tight">Start Working with us!</p>
            <Button
              href="https://calendly.com/saibdev"
              target="_blank"
              variant="contained"
              className="!rounded-[50px] !py-[12px] !px-[24px] text-[18px] sm:!text-[23px] !normal-case !font-poppins !font-bold !bg-white !text-purple tracking-tight"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <Footer />
      </div>
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
      <meta property="og:description" content="We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for Cardano." />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:url" content="https://twitter.com/saibdev" />
      <meta name="twitter:site" content="@saibdev" />
      <meta name="twitter:creator" content="@saibdev" />
    </>
  )
}
