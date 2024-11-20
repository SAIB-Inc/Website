import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "@mui/material"
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-[1200px] m-auto flex flex-col items-center gap-[54px] text-white pt-[120px] pb-[120px] px-6">
      <div className="md:w-fit">
        <StaticImage
          src="../images/saib-logo.svg"
          alt="SAIB logo"
          placeholder="none"
        />
      </div>
      <p className="text-[18px] max-sm:text-[14px]">&copy; 2024 SAIB Inc. All Rights Reserved.</p>
      <Button
        href="https://calendly.com/saibdev"
        target="_blank"
        variant="contained"
        className="!rounded-[50px] !py-[16px] !px-[32px] !text-[18px] !normal-case !font-poppins !font-normal !m-auto"
      >
        Learn More
      </Button>
      <ul className="flex gap-4 items-center justify-center">
        <li>
          <a href="https://twitter.com/saibdev" target="_blank">
            <XIcon fontSize="large" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/saibllc" target="_blank">
            <LinkedInIcon fontSize="large" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/saibllc" target="_blank">
            <FacebookIcon fontSize="large" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer