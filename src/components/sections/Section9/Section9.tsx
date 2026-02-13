import React from "react";
import { Box, Button, Card, Chip, Typography } from "@mui/material";
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
            <div className="absolute h-10 bg-white left-0 w-[86%]"/>
            <div className="absolute h-21 bg-white left-14 w-14"/>
            <div className="absolute h-10 bg-white left-0 top-21 w-14"/>
          </div>
          <div>
            <div className="absolute h-16 left-0 top-31 w-7" style={{ backgroundColor: theme.palette.primary.main }}/>
            <div className="absolute h-6 left-7 top-36 w-6" style={{ backgroundColor: theme.palette.primary.main }}/>
            <div className="absolute h-5 left-13 top-42 w-6" style={{ backgroundColor: theme.palette.primary.main }}/>
          </div>
          <div className="absolute h-16 bg-white right-0 w-30"/>
          <div className="absolute h-23 bg-white right-0 w-10"/>
          <div className="absolute h-7 right-10 top-16 w-20" style={{ backgroundColor: theme.palette.primary.main }}/>
          <div className="absolute h-7 right-0 top-21 w-20" style={{ backgroundColor: theme.palette.primary.main }}/>
          <div className="absolute h-5 right-0 top-28 w-10" style={{ backgroundColor: theme.palette.primary.main }}/>
          <div></div>
          <div className=""/>
          <div className="container mx-auto py-32 px-9 flex flex-col gap-16 items-center">
            <div className="flex flex-col items-center gap-6">
                  <Chip label="Trusted by" sx={{ borderColor: theme.palette.brand.lightText, color: theme.palette.brand.lightText }} className="px-3! py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                  <Typography className="text-[60px]! leading-[1.1]!">
                      <span style={{ color: theme.palette.brand.lightText }}>History of  </span>
                      <span style={{ color: theme.palette.primary.main }}>Collaboration </span>
                  </Typography>
              </div>
              <div className="w-full flex items-center justify-center gap-10">
                <Card
                  sx={{
                    bgcolor: "text.primary",
                    clipPath: "polygon(0 20px, 20px 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                  }}
                  className="shadow-none! relative! h-107! w-full flex items-center p-12!"
                >
                  <div className="flex flex-col gap-8">
                    <div>
                      <img src={CardanoFoundation} alt="Cardano Foundation" className="w-88.75" />
                    </div>
                    <div>
                      <Typography sx={{ color: theme.palette.brand.lightText, fontWeight: 300 }} className="text-xl! max-w-86.5!">
                        Collaborated with the Swiss foundation overseeing the evolution of the Cardano protocol.
                      </Typography>
                    </div>
                  </div>
                  <div className="absolute -right-55">
                    <SaibIcon sx={{ fontSize: 431, color: "primary.main" }} />
                  </div>
                </Card>
                <Card
                  sx={{
                    bgcolor: "text.primary",
                    clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
                  }}
                  className="shadow-none! relative! h-107! w-full flex items-center justify-end p-12!"
                >
                  <div className="flex flex-col gap-8">
                    <div>
                      <img src={DcSpark} alt="DC Spark" className="w-88.75"/>
                    </div>
                    <div>
                      <Typography sx={{ color: theme.palette.brand.lightText, fontWeight: 300 }} className="text-xl! max-w-86.5! text-right!">
                        Partnered to build high-quality crypto products that unify blockchain user experiences.
                      </Typography>
                    </div>
                  </div>
                  <div className="absolute -left-55">
                    <SaibIcon sx={{ fontSize: 433, color: "primary.main" }} />
                  </div>
                </Card>
              </div>
          </div>
          <div className="absolute left-23 right-13 h-14 bg-white bottom-0"/>
          <div className="absolute bottom-0 left-0 w-10 h-60 bg-white"/>
        </Box>
        <Box
          sx={{
            bgcolor: "background.default",
            backgroundImage: `url(${BackgroundLight})`,
            backgroundRepeat: "repeat",
          }}
          className="relative"
        >
          <div className="relative container mx-auto py-32 px-9 flex flex-col gap-16 items-center z-10">
            <Card sx={{ bgcolor: "primary.main", clipPath: "polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }} className="absolute p-8 flex items-center justify-between h-141.25! left-9 right-9 -top-80">
              <div className="max-w-208.75 flex flex-col gap-12!">
                <div className="flex flex-col gap-4!">
                  <Typography sx={{ fontWeight: 500, color: theme.palette.brand.lightText }} className="text-[32px]!">
                    Let&apos;s build something great.
                  </Typography>
                  <Typography sx={{ fontWeight: 600, color: "#FFFFFF" }} className="text-[72px]! leading-19!">
                    Ready to scale your project?
                  </Typography>
                  <Typography sx={{ color: "#FFFFFF", fontWeight: 300 }} className="text-xl!">
                    Whether you need a custom dApp, a smart contract audit, or a full development <br/> team—we deliver code that works.
                  </Typography>
                </div>
                <div>
                  <Button sx={{ bgcolor: "primary.dark", color: "#FFFFFF", textTransform: "none", fontWeight: 500 }} className="rounded-lg! px-4! h-10!">
                    Book your discovery call
                  </Button>
                </div>
              </div>
              <div className="absolute -right-25">
                <img src={ScaleProject} alt="Scale your project" className="w-216.5" />
              </div>
            </Card>
          </div>
        </Box>
      </>
    );
};

export default Section9;
