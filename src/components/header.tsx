import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center text-white p-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent rounded-[24px] backdrop-blur-md shadow-[0_4px_21px_0_#00000040] gap-3">
      <div className="max-[360px]:w-[60px] w-[100px] md:w-fit flex items-center">
        <StaticImage src="../images/saib-logo.svg" alt="SAIB logo" placeholder="none" quality={100} />
      </div>
      <ul className="flex gap-[5px] min-[450px]:gap-2 md:gap-6 items-center">
        <li>
          <a href="https://www.facebook.com/saibllc" target="_blank">
            <FacebookIcon className="max-[390px]:text-[16px] min-[460px]:text-[35px]" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/saibdev" target="_blank">
            <XIcon className="max-[390px]:text-[16px] min-[460px]:text-[35px]" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/saibllc" target="_blank">
            <LinkedInIcon className="max-[390px]:text-[16px] min-[460px]:text-[35px]" />
          </a>
        </li>
      </ul>
      <Button 
        href="https://calendly.com/saibdev" 
        target="_blank" 
        variant="contained" 
        className=" sm:!rounded-[24px] md:!rounded-[50px] sm:!py-[12px] sm:!px-[24px] sm:h-fit max-[360px]:!text-[8px] !text-[10px] min-[460px]:!text-[14px] md:!text-[18px] !normal-case !font-poppins !font-normal text-center"
        >
          Let's Talk!
        </Button>
    </header>
  );
};

export default Header;
