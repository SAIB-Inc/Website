import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import MainLayout from '../components/main-layout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <div className="px-6">
        <div className="max-w-[1200px] m-auto mt-[24px]">
          <header className="flex justify-between text-white p-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent rounded-[24px] backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
            <div className="flex gap-2 items-center">
              <div className="w-[40px] md:w-max">
                <StaticImage src="../images/saib-logo.png" alt="SAIB logo" placeholder="none" />
              </div>
              <div className="hidden md:block">
                <StaticImage src="../images/saib.png" alt="SAIB text" placeholder="none" />
              </div>
            </div>
            <ul className="flex gap-6 items-center text-[18px] hidden xl:flex">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
            </ul>
            <Button variant="contained" className="!rounded-[50px] !hidden xl:!block !py-[12px] !px-[24px] !text-[18px] !normal-case !font-poppins !font-normal">Get Started</Button>
            <div className="xl:hidden">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </header>

          <main className="mt-16 md:mt-[180px] xl:mt-[169px]">
            <div className="max-w-[630px] m-auto text-center text-white">
              <h1 className="font-bold text-[55px] md:text-[105px] xl:text-[120px] leading-[55px] md:leading-[105px] xl:leading-[120px]">Softwarez, <span className="font-normal font-['Poppins']">at its</span> <span className="text-[#4F37EA]">best</span><span className="font-sans">.</span></h1>
              <p className="mt-6 leading-[27px] text-[18px] px-4">We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for Cardano.</p>
              <Button variant="contained" className="!rounded-[50px] !hidden xl:!block !py-[12px] !px-[24px] !text-[18px] !normal-case !font-poppins !font-normal !m-auto !mt-6">Let's talk</Button>
            </div>

            <div className="mt-[130px] xl:mt-[226px] text-white py-16 px-2 xl:p-[80px] rounded-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
              <h2 className="text-[36px] leading-[45px] md:text-[52px] font-bold xl:leading-[62px] text-center">What we can do for you</h2>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-[45px] md:mt-[75px] xl:mt-16">
                <div className="flex items-center gap-3 px-4">
                  <div className="w-[64px]">
                    <StaticImage placeholder="none" src="../images/frontend.png" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold">Frontend Development</h3>
                    <p className="text-[14px] mt-2">Crafting user-centric, responsive, and visually appealing web interfaces.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4">
                  <div className="w-[64px]">
                    <StaticImage placeholder="none" src="../images/backend.png" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold">Backend Development</h3>
                    <p className="text-[14px] mt-2">Building robust, scalable, and secure server-side applications.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4">
                  <div className="w-[64px]">
                    <StaticImage placeholder="none" src="../images/software-development.png" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold">Software Development</h3>
                    <p className="text-[14px] mt-2">Building interactive and dynamic web-based applications.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4">
                  <div className="w-[64px]">
                    <StaticImage placeholder="none" src="../images/blockchain.png" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold">Blockchain Development</h3>
                    <p className="text-[14px] mt-1">Implementing decentralized and secure blockchain applications.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4">
                  <div className="w-[64px]">
                    <StaticImage placeholder="none" src="../images/smart-contract.png" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold">Smart Contract Solutions</h3>
                    <p className="text-[14px] mt-2">Embrace secure and automated transactions.</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>SAIB | Softwarez, At It's Best</title>
