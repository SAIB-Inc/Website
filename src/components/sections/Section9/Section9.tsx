import React from "react";
import { Box, Card, Chip, Typography } from "@mui/material";
import SaibButton from "../../common/SaibButton";
import { useTheme } from "@mui/material/styles";
import SaibIcon from "../../../images/icons/SaibIcon";
import CardanoFoundation from "../../../images/collaborations/cardano-foundation.webp";
import DcSpark from "../../../images/collaborations/dc-spark.webp";
import ScaleProject from "../../../images/sections/section9/scale-project.webp";
import BackgroundDark from "../../../images/background/background-dark.webp";
import BackgroundLight from "../../../images/background/background-light.webp";

const Section9: React.FC = () => {
    const theme = useTheme();

    return(
      <>
        <Box
          sx={{
            bgcolor: "background.dark",
            backgroundImage: `url(${BackgroundDark})`,
            backgroundRepeat: "repeat",
          }}
          className="h-313.75 relative"
        >
          <div>
            <div className="absolute h-10 left-0 w-[86%]" style={{ backgroundColor: theme.palette.background.default }}/>
            <div className="absolute h-21 left-14 w-14" style={{ backgroundColor: theme.palette.background.default }}/>
            <div className="absolute h-10 left-0 top-21 w-14" style={{ backgroundColor: theme.palette.background.default }}/>
          </div>
          <div>
            <div className="absolute h-16 left-0 top-31 w-7" style={{ backgroundColor: theme.palette.primary.main }}/>
            <div className="absolute h-6 left-7 top-36 w-6" style={{ backgroundColor: theme.palette.primary.main }}/>
            <div className="absolute h-5 left-13 top-42 w-6" style={{ backgroundColor: theme.palette.primary.main }}/>
          </div>
          <div className="absolute h-16 right-0 w-30" style={{ backgroundColor: theme.palette.background.default }}/>
          <div className="absolute h-23 right-0 w-10" style={{ backgroundColor: theme.palette.background.default }}/>
          <div className="absolute h-7 right-10 top-16 w-20" style={{ backgroundColor: theme.palette.primary.main }}/>
          <div className="absolute h-7 right-0 top-21 w-20" style={{ backgroundColor: theme.palette.primary.main }}/>
          <div className="absolute h-5 right-0 top-28 w-10" style={{ backgroundColor: theme.palette.primary.main }}/>
          <div className=""/>
          <div className="container mx-auto py-32 px-9 flex flex-col gap-16 items-center">
            <div className="flex flex-col items-center gap-6">
                  <Chip label="Trusted by" sx={{ borderColor: theme.palette.brand.lightText, color: theme.palette.brand.lightText }} className="py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                  <Typography className="text-[32px]! sm:text-[48px]! lg:text-[60px]! leading-[1.1]! text-center!">
                      <span style={{ color: theme.palette.brand.lightText }}>History of  </span>
                      <span style={{ color: theme.palette.primary.main }}>Collaboration </span>
                  </Typography>
              </div>
              <div className="max-lg:flex-col w-full flex items-center justify-center gap-2 lg:gap-10">
                <Card
                  sx={{
                    bgcolor: "text.primary",
                    clipPath: "polygon(0 20px, 20px 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                  }}
                  className="shadow-none! relative! w-full flex py-6! px-11 h-71.75 lg:h-107! lg:items-center lg:p-12!"
                >
                  <div className="flex flex-col gap-3 lg:gap-8">
                    <div>
                      <img src={CardanoFoundation} alt="Cardano Foundation" className="w-64 lg:w-88.75" />
                    </div>
                    <div>
                      <Typography sx={{ color: theme.palette.brand.lightText, fontWeight: 300 }} className="max-lg:text-center! max-w-86.5! text-sm! md:text-md! lg:text-xl!">
                        Collaborated with the Swiss foundation overseeing the evolution of the Cardano protocol.
                      </Typography>
                    </div>
                  </div>
                  <div className="absolute max-lg:-bottom-27 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:-right-55">
                    <SaibIcon sx={{ color: "primary.main" }} className="text-[204px]! lg:text-[433px]!"/>
                  </div>
                </Card>
                <Card
                  sx={{
                    bgcolor: "text.primary",
                    clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
                  }}
                  className="shadow-none! relative! w-full flex py-6! px-11 h-71.75 lg:h-107! lg:items-center lg:justify-end lg:p-12!"
                >
                  <div className="max-lg:items-center max-lg:justify-end flex flex-col gap-3 lg:gap-8">
                    <div>
                      <img src={DcSpark} alt="DC Spark" className="w-57.25 lg:w-88.75"/>
                    </div>
                    <div>
                      <Typography sx={{ color: theme.palette.brand.lightText, fontWeight: 300 }} className="max-lg:text-center! max-w-86.5! text-sm! md:text-md! lg:text-xl! lg:text-right!">
                        Partnered to build high-quality crypto products that unify blockchain user experiences.
                      </Typography>
                    </div>
                  </div>
                  <div className="absolute max-lg:-top-27 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:-left-55">
                    <SaibIcon sx={{ color: "primary.main" }} className="text-[204px]! lg:text-[433px]!" />
                  </div>
                </Card>
              </div>
          </div>
          <div className="absolute left-23 right-13 h-14 bottom-0" style={{ backgroundColor: theme.palette.background.default }}/>
          <div className="absolute bottom-0 left-0 w-10 h-60" style={{ backgroundColor: theme.palette.background.default }}/>
        </Box>
        <Box
          sx={{
            bgcolor: "background.default",
            backgroundImage: `url(${BackgroundLight})`,
            backgroundRepeat: "repeat",
          }}
          className="max-lg:mb-15! relative"
        >
          <div className="relative container mx-auto py-32 px-9 flex flex-col gap-16 items-center z-10">
            <Card sx={{ bgcolor: "primary.main", clipPath: "polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }} className="absolute p-8 flex justify-between h-141.25! left-9 right-9 -top-80 lg:items-center">
              <div className="max-w-208.75 flex flex-col gap-4! lg:gap-12!">
                <div className="flex flex-col gap-4!">
                  <Typography sx={{ fontWeight: 500, color: theme.palette.brand.lightText }} className="text-xl! md:text-2xl! lg:text-[32px]!">
                    Let&apos;s build something great.
                  </Typography>
                  <Typography sx={{ fontWeight: 600, color: "primary.contrastText" }} className="text-[36px]! leading-12! md:text-[42px]! lg:leading-19! lg:text-[72px]!">
                    Ready to scale your project?
                  </Typography>
                  <Typography sx={{ color: "primary.contrastText", fontWeight: 300 }} className="text-sm! md:text-base! lg:text-xl!">
                    Whether you need a custom dApp, a smart contract audit, or a full development <br/> team—we deliver code that works.
                  </Typography>
                </div>
                <div>
                  <SaibButton variant="dark" className="px-4! h-10!">
                    Book your discovery call
                  </SaibButton>
                </div>
              </div>
              <div className="max-lg:-bottom-14 absolute -right-25">
                <img src={ScaleProject} alt="Scale your project" className="w-96 lg:w-216.5" />
              </div>
            </Card>
          </div>
        </Box>
      </>
    );
};

export default Section9;
