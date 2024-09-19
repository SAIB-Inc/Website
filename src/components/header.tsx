import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "@mui/material"
import MainLayout from '../components/main-layout'
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from "@mui/icons-material"

const Header: React.FC = () =>{
    return(
      <header className="flex justify-between text-white p-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent rounded-[24px] backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
        <div className="w-[100px] md:w-fit">
          <StaticImage src="../images/saib-logo.svg" alt="SAIB logo" placeholder="none" quality={100} />
        </div>
        <ul className="flex gap-2 md:gap-6 items-center text-[18px]">
          <li>
            <a href="https://www.facebook.com/saibllc" target="_blank">
              About
            </a>
          </li>
          <li>
            <a href="https://twitter.com/saibdev" target="_blank">
              Blog
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/saibllc" target="_blank">
              Integrations
            </a>
          </li>
        </ul>
        <Button href="https://calendly.com/saibdev" target="_blank" variant="contained" className="!rounded-[50px] !hidden xl:!block !py-[12px] !px-[24px] h-fit !text-[18px] !normal-case !font-poppins !font-normal">Let's Talk!</Button>
      </header>
    )
}

export default Header