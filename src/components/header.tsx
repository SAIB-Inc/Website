import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header className="flex justify-between text-white p-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent rounded-[24px] backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
      <div className="w-[100px] md:w-fit flex items-center">
        <StaticImage src="../images/saib-logo.svg" alt="SAIB logo" placeholder="none" quality={100} />
      </div>
      <ul className="!hidden md:!flex gap-2 md:gap-6 items-center text-[18px]">
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
      <Button href="https://calendly.com/saibdev" target="_blank" variant="contained" className="!rounded-[50px] !hidden md:!block !py-[12px] !px-[24px] h-fit !text-[18px] !normal-case !font-poppins !font-normal">Let's Talk!</Button>
      <div className="!hidden max-md:!block">
        <IconButton onClick={toggleDrawer(true)} color="inherit" size="large"><MenuIcon/></IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          <div className="w-[350px] sm:w-[400px] p-6 !text-[24px] menuImage !bg-white h-full">
            <ul className="flex flex-col gap-6 mt-[30px]">
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
            <div className="flex justify-center mt-[40px]">
              <Button href="https://calendly.com/saibdev" target="_blank" variant="contained" className="!rounded-[50px] !py-[12px] !px-[24px] h-fit !text-[18px] !normal-case !font-poppins !font-normal">Let's Talk!</Button>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
