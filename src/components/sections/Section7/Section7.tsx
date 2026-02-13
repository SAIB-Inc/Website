import React, { useState } from "react";
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
import SaibPageIndicator from "../../common/SaibPageIndicator";


const Section7: React.FC = () => {
    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

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
            className="lg:h-screen"
        >
            {/* Mobile carousel below lg */}
            <div className="lg:hidden container mx-auto max-sm:py-16 py-30 flex flex-col items-center justify-center h-full px-4 lg:px-9">
                <div className="flex flex-col items-center gap-6">
                    <Chip label="Integration partners" sx={{ borderColor: "primary.dark", color: "primary.dark" }} className="py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                    <Typography className="text-[32px]! sm:text-[48px]! leading-[1.1]! text-center!">
                        <span style={{ color: theme.palette.text.primary }}>Building with the </span>
                        <span style={{ color: theme.palette.primary.main }}>Giants</span>
                    </Typography>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <div
                        className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: theme.palette.secondary.main }}
                    >
                        <SaibIcon sx={{ fontSize: 64, color: theme.palette.brand.softPurple }} />
                    </div>
                </div>
                <div
                    className="w-0.5 h-20"
                    style={{
                        backgroundImage: `repeating-linear-gradient(to bottom, ${theme.palette.brand.line} 0px, ${theme.palette.brand.line} 6px, transparent 6px, transparent 12px)`,
                    }}
                />
                <Card
                    key={activeIndex}
                    sx={{ bgcolor: "background.default" }}
                    className="max-lg:h-62.25 rounded-2xl! p-6! w-full gap-3! flex flex-col text-center! items-center justify-center animate-fade-in"
                >
                    <div>
                        <img src={partnerItems[activeIndex].logo} alt={partnerItems[activeIndex].title} className={partnerItems[activeIndex].logoHeight} />
                    </div>
                    <div>
                        <Typography sx={{ color: "text.primary" }} className="font-light! text-base! mt-4!">
                            {partnerItems[activeIndex].desciption}
                        </Typography>
                    </div>
                </Card>
                <SaibPageIndicator
                    count={partnerItems.length}
                    activeIndex={activeIndex}
                    onSelect={setActiveIndex}
                    className="mt-10"
                />
            </div>

            {/* Desktop layout at lg and above */}
            <div className="hidden lg:flex container mx-auto py-30 px-9 flex-col gap-16 items-center">
                <div className="flex flex-col items-center gap-6">
                    <Chip label="Integration partners" sx={{ borderColor: "primary.dark", color: "primary.dark" }} className="py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
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
                                <Card sx={{ bgcolor: "background.default" }} className={`rounded-2xl! p-4! w-[282px] h-[261px]! gap-3! flex flex-col text-center! items-center justify-center ${item.cardClassName}`}>
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
