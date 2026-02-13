import React from "react";
import { Box, Card, Chip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SaibIcon from "../../../images/icons/SaibIcon";
import DemeterLogo from "../../../images/partners/demeter.webp";
import TxPipeLogo from "../../../images/partners/txpipe.webp";
import UtxoRpcLogo from "../../../images/partners/utxorpc.webp";
import LevvyLogo from "../../../images/partners/levvy.webp";
import Background from "../../../images/background/background-light.webp";
import Line1 from "../../../images/sections/section7/line-1.svg";
import Line2 from "../../../images/sections/section7/line-2.svg";


const Section7: React.FC = () => {
    const theme = useTheme();

    const partnerItems = [
        {
            title: "demeter",
            logo: DemeterLogo,
            logoHeight: "h-11!",
            cardClassName: "relative -top-30 rotate-[6.37deg]!",
            lineClassName: "w-114 -top-62 -right-90",
            line: Line1,
            desciption: "Cloud-based environments for rapid scaling and deployment."
        },
        {
            title: "TxPipe",
            logo: TxPipeLogo,
            logoHeight: "h-10!",
            cardClassName: "rotate-[2.54deg]!",
            lineClassName: "h-100 -top-48 right-0",
            line: Line2,
            desciption: "Cloud-based environments for rapid scaling and deployment."
        },
        {
            title: "utxoRpc",
            logo: UtxoRpcLogo,
            logoHeight: "h-[34px]!",
            cardClassName: "rotate-[-2.54deg]!",
            lineClassName: "h-100 -top-48 left-4 -scale-x-100",
            line: Line2,
            desciption: "Optimizing blockchain interaction for superior developer experience and performance."
        },
        {
            title: "levvy",
            logo: LevvyLogo,
            logoHeight: "h-[41px]!",
            cardClassName: "relative -top-30 rotate-[-6.37deg]!",
            lineClassName: "w-114 -top-62 -left-90 -scale-x-100",
            line: Line1,
            desciption: "Leading protocol for instant liquidity and NFT lending performance."
        }
    ]

    return(
        <Box
            component="section"
            sx={{
                bgcolor: "background.default",
                backgroundImage: `url(${Background})`,
                backgroundRepeat: "repeat",
            }}
            className="h-screen"
        >
            <div className="container mx-auto py-30 px-9 flex flex-col gap-16 items-center">
                <div className="flex flex-col items-center gap-6">
                    <Chip label="Integration partners" sx={{ borderColor: "primary.dark", color: "primary.dark" }} className="px-3! py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                    <Typography className="text-[60px]! leading-[1.1]!">
                        <span style={{ color: theme.palette.text.primary }}>Building with the </span>
                        <span style={{ color: theme.palette.primary.main }}>Giants</span>
                    </Typography>
                </div>
                <div className="relative flex flex-col gap-40">
                    <div className="w-full flex items-center justify-center relative z-10">
                        <div
                            className="w-[169px] h-[169px] rounded-full flex items-center justify-center"
                            style={{ backgroundColor: theme.palette.secondary.main }}
                        >
                            <SaibIcon sx={{ fontSize: 91, color: theme.palette.brand.softPurple }} />
                        </div>
                    </div>
                    <div className="flex items-center gap-20!">
                        {partnerItems.map((item) => (
                            <div key={item.title} className="relative flex flex-col items-center">
                                <div className={`absolute ${item.lineClassName}`}>
                                    <img src={item.line} alt="w-full h-full object-cover" />
                                </div>
                                <Card className={`bg-white! rounded-2xl! p-4! w-[282px] h-[261px]! gap-3! flex flex-col text-center! items-center justify-center ${item.cardClassName}`}>
                                    <div>
                                        <img src={item.logo} alt={item.title} className={item.logoHeight} />
                                    </div>
                                    <div>
                                        <Typography sx={{ color: "text.primary" }} className="font-light! text-base! mt-4!">
                                            {item.desciption}
                                        </Typography>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Section7;
