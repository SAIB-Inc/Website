import React from "react";
import { Box, Typography } from "@mui/material";
import SaibButton from "../../common/SaibButton";
import { useTheme } from "@mui/material/styles";

import PixelGroup1 from "../../../images/background/pixel-group1.svg";
import PixelGroup2 from "../../../images/background/pixel-group2.svg";

const Section1: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
        component="section"
        sx={{
            bgcolor: "background.dark",
        }}
        className="h-screen relative"
    >
        <div className="container mx-auto flex items-center justify-center h-full relative px-4!">
            <div className="absolute w-full h-371.75 transform -translate-y-1/2 flex items-center justify-center">
                <div className="w-full rounded-full h-full flex items-center justify-center" style={{ backgroundColor: `${theme.palette.background.default}0D` }}>
                    <div className="w-[80%] rounded-full h-[80%] flex items-center justify-center" style={{ backgroundColor: `${theme.palette.background.default}0D` }}>
                        <div className="w-[80%] rounded-full h-[80%]" style={{ backgroundColor: `${theme.palette.background.default}0D` }}/>
                    </div>
                </div>
            </div>

            <div className="text-center max-w-192.5 space-y-6! z-1" style={{ color: theme.palette.primary.contrastText }}>
                <Typography className="max-[375px]:text-[28px]! font-bold! text-[36px]! leading-[1.3]! sm:text-[48px]! md:leading-[1.1]! md:text-[60px]!">
                    <span>Architecting the </span><span style={{ color: theme.palette.primary.main }}>Future </span><br className="max-sm:hidden"/>
                    <span>of Digital Enterprise</span>
                </Typography>
                <Typography className="font-light! text-sm! sm:text-base! lg:text-xl!">
                    <span>We are </span><span className="font-extrabold">SAIB Inc.</span> <span> — a premier software development firm turning complex ideas into scalable B2B products. From cutting-edge AI research to cross-platform mobile apps and decentralized infrastructure, we build the technology that powers tomorrow&apos;s businesses.</span>
                </Typography>
                <div className="max-[375px]:flex-col flex items-center justify-center gap-3">
                    <SaibButton className="w-full px-4! h-12 sm:w-47">
                        Build with us
                    </SaibButton>
                    <SaibButton variant="outlined" className="w-full px-4! h-12 sm:w-47">
                        View our portfolio
                    </SaibButton>
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 w-full flex items-end justify-between">
            <img src={PixelGroup2} alt="pixel-group-2" className="max-sm:w-[40%]! max-md:w-50! max-xl:w-60!"/>
            <img src={PixelGroup1} alt="pixel-group-1" className="max-sm:w-[40%]! max-md:w-80! max-xl:w-100!"/>
        </div>
    </Box>
  );
};

export default Section1;
