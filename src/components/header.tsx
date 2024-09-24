import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header className="flex justify-between text-white p-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent rounded-[24px] backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
      <div className="w-[100px] md:w-fit">
        <StaticImage src="../images/saib-logo.svg" alt="SAIB logo" placeholder="none" quality={100} />
      </div>
      <ul className="flex gap-2 md:gap-6 items-center">
        <li>
          <a href="https://www.facebook.com/saibllc" target="_blank">
            <FacebookIcon className="md:!hidden" />
            <FacebookIcon className="!hidden md:!block" fontSize="large" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/saibdev" target="_blank">
            <XIcon className="md:!hidden" />
            <XIcon className="!hidden md:!block" fontSize="large" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/saibllc" target="_blank">
            <LinkedInIcon className="md:!hidden" />
            <LinkedInIcon className="!hidden md:!block" fontSize="large" />
          </a>
        </li>
      </ul>
      <Button href="https://calendly.com/saibdev" target="_blank" variant="contained" className="!rounded-[50px] !hidden xl:!block !py-[12px] !px-[24px] h-fit !text-[18px] !normal-case !font-poppins !font-normal">Let's Talk!</Button>
    </header>
  );
};

export default Header;
