import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <div className="max-w-[1200px] m-auto mt-[24px]">
        <header className="flex justify-between text-white p-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent rounded-[24px] backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
          <div className="flex gap-2 items-center">
            <div>
              <StaticImage src="../images/saib-logo.png" alt="SAIB logo" />
            </div>
            <div>
              <StaticImage src="../images/saib.png" alt="SAIB text" />
            </div>
          </div>
          <ul className="flex gap-6 items-center text-[18px]">
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
          <button className="text-[18px] bg-[#4F37EA] py-[12px] px-[24px] rounded-[50px] border-[1px] border-solid border-transparent">Get Started</button>
        </header>

        <main>
          <div className="w-[630px] m-auto mt-[169px] text-center text-white">
            <h1 className="font-bold text-[120px] leading-[120px]">Softwarez, <span className="font-normal font-['Poppins']">at its</span> <span className="text-[#4F37EA]">best</span><span className="font-sans">.</span></h1>
            <p className="mt-6 leading-[27px] text-[18px] px-4">We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for Cardano.</p>
            <button className="text-[18px] bg-[#4F37EA] py-[12px] px-[24px] rounded-[50px] border-[1px] border-solid border-transparent mt-6">Let's talk</button>
          </div>

          <div className="mt-[226px] text-white p-[80px] rounded-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
            <h2 className="text-[52px] font-bold leading-[62px] text-center">What we can do for you</h2>

            <div className="grid grid-cols-3 gap-10 mt-16">
              <div className="flex items-center gap-3">
                <div className="w-[64px]">
                  <StaticImage src="../images/frontend.png" alt="" />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold">Frontend Development</h3>
                  <p className="text-[14px] mt-2">Crafting user-centric, responsive, and visually appealing web interfaces.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-[64px]">
                  <StaticImage src="../images/backend.png" alt="" />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold">Backend Development</h3>
                  <p className="text-[14px] mt-2">Building robust, scalable, and secure server-side applications.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-[64px]">
                  <StaticImage src="../images/software-development.png" alt="" />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold">Software Development</h3>
                  <p className="text-[14px] mt-2">Building interactive and dynamic web-based applications.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-[64px]">
                  <StaticImage src="../images/blockchain.png" alt="" />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold">Blockchain Development</h3>
                  <p className="text-[14px] mt-1">Implementing decentralized and secure blockchain applications.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-[64px]">
                  <StaticImage src="../images/smart-contract.png" alt="" />
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
    
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
