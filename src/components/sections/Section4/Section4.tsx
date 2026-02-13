import React from "react";
import { Box, Card, Chip, Typography } from "@mui/material";
import SaibButton from "../../common/SaibButton";
import { useTheme } from "@mui/material/styles";

import Background from "../../../images/background/background-light.webp"
import BlockchainSolutionsImg from "../../../images/sections/section4/Blockchain Solutions.webp";
import AIDevelopmentImg from "../../../images/sections/section4/AI Development.webp";
import MobileArchitectureImg from "../../../images/sections/section4/Mobile Architecture.webp";
import ProductStrategyImg from "../../../images/sections/section4/Product Strategy.webp";
import TokenomicsImg from "../../../images/sections/section4/Tokenomics.webp";
import Filler1Img from "../../../images/sections/section4/Filler1.webp";
import Filler2Img from "../../../images/sections/section4/Filler2.webp";
import Filler3Img from "../../../images/sections/section4/Filler3.webp";

const Section4: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                bgcolor: "background.default",
                backgroundImage: `url(${Background})`,
                backgroundRepeat: "repeat",
            }}
        >
            <div className="container mx-auto py-32 px-9 flex flex-col gap-16 items-center">
                <div className="flex flex-col items-center gap-6">
                    <Chip label="Our Expertise" sx={{ borderColor: "primary.dark", color: "primary.dark" }} className="py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                    <Typography className="text-[60px]! leading-[1.1]!">
                        <span style={{ color: theme.palette.text.primary }}>The </span>
                        <span style={{ color: theme.palette.primary.main }}>Innovation </span>
                        <span style={{ color: theme.palette.text.primary }}>Suite </span>
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 300,
                            color: "text.primary",
                        }}
                        className="text-xl! text-center! max-w-167!"
                    >
                        Whether leveraging the transparency of blockchain or the predictive power of AI, our specialized teams provide end-to-end development tailored to your sector.
                    </Typography>
                </div>
                <div className="flex flex-col gap-[21.33px]!">
                    <div className="w-full grid grid-cols-4 grid-rows-6 gap-[21.33px]! h-167">
                        {/* Advanced Blockchain Solutions */}
                        <Card
                            sx={{
                                bgcolor: "background.paper",
                            }}
                            className="row-span-3 col-span-2! rounded-[28px]! overflow-hidden! relative!"
                        >
                            <div className="p-8! flex flex-col h-full justify-between relative z-10 max-w-102.5">
                                <div className="flex flex-col flex-1 justify-between">
                                    <Typography sx={{ fontWeight: 600, color: "text.primary" }} className="text-2xl!">
                                        Advanced Blockchain Solutions
                                    </Typography>
                                    <Typography sx={{ fontWeight: 300, color: "text.primary" }} className="text-base!">
                                        Chain-agnostic development for DeFi, dApps, and Layer 1/2 infrastructure for your security.
                                    </Typography>
                                </div>
                                <div className="flex-1 flex items-end">
                                    <SaibButton variant="text" className="text-base! w-max!">
                                        Explore Web3
                                    </SaibButton>
                                </div>
                            </div>
                            <div className="absolute -top-23 -right-8">
                                <img src={BlockchainSolutionsImg} alt="" className="w-78.25 object-cover" />
                            </div>
                        </Card>
                        {/* AI Development & Research */}
                        <Card
                            sx={{
                                bgcolor: "background.paper",
                            }}
                            className="row-span-6 p-8! rounded-[28px]! overflow-hidden! relative!"
                        >
                            <div className="flex flex-col gap-4 relative z-10">
                                <div className="flex flex-col flex-1 justify-between gap-4">
                                    <Typography sx={{ fontWeight: 600, color: "text.primary" }} className="text-2xl!">
                                        AI Development & Research
                                    </Typography>
                                    <Typography sx={{ fontWeight: 300, color: "text.primary" }} className="text-base!">
                                        From Natural Language Processing (NLP) to predictive analytics, we integrate smart technologies that evolve with your business.
                                    </Typography>
                                </div>
                                <div className="flex-1 flex items-end">
                                    <SaibButton variant="text" className="text-base! w-max!">
                                        Automate now
                                    </SaibButton>
                                </div>
                            </div>
                            <div className="absolute -bottom-30 right-0 ">
                                <img src={AIDevelopmentImg} alt="" className="h-92! object-cover" />
                            </div>
                        </Card>
                        {/* Mobile App Architecture */}
                        <Card
                            sx={{
                                bgcolor: "background.paper",
                            }}
                            className="row-span-4 p-8! rounded-[28px]! overflow-hidden! relative!"
                        >
                            <div className="flex flex-col h-full justify-between relative z-10">
                                <div className="flex flex-col gap-4">
                                    <Typography sx={{ fontWeight: 600, color: "text.primary" }} className="text-2xl!">
                                        Mobile App Architecture
                                    </Typography>
                                    <Typography sx={{ fontWeight: 300, color: "text.primary" }} className="text-base!">
                                        High-performance iOS and Android applications built with modern frameworks for speed and reliability.
                                    </Typography>
                                </div>
                                <div>
                                    <SaibButton variant="text" className="text-base! w-max!">
                                        Launch app
                                    </SaibButton>
                                </div>
                            </div>
                            <div className="absolute -bottom-20 -right-4">
                                <img src={MobileArchitectureImg} alt="" className="w-48 object-cover" />
                            </div>
                        </Card>

                        {/* Filler */}
                        <Card
                            sx={{
                                bgcolor: "background.paper",
                            }}
                            className="row-span-3 p-0! rounded-[28px]! overflow-hidden!"
                        >
                            <img src={Filler1Img} alt="" className="w-71 object-cover" />
                        </Card>
                        {/* Smart Contract Development */}
                        <Card
                            sx={{
                                bgcolor: "background.paper",
                            }}
                            className="row-span-3 p-8! rounded-[28px]! overflow-hidden! relative!"
                        >
                            <div className="flex flex-col items-center text-center gap-6">
                                <div>
                                    <Typography sx={{ fontWeight: 600, color: "text.primary" }} className="text-2xl!">
                                        Smart Contract Development
                                    </Typography>
                                </div>
                                <div>
                                    <SaibButton variant="text" className="text-base! w-max!">
                                        Secure your code
                                    </SaibButton>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-3.5 mt-7">
                                <div className="flex items-center gap-3.5 -ml-10">
                                    <Chip label="Gas Optimization" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                    <Chip label="Ethereum Virtual Machine" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                    <Chip label="Immutability" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                    <Chip label="State Variables" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                </div>
                                <div className="flex items-center gap-3.5 -ml-6">
                                    <Chip label="Solidity" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                    <Chip label="Plutus" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                    <Chip label="Formal Verification" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                    <Chip label="Aiken" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                    <Chip label="Proxy Patterns" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                </div>
                                <div className="flex items-center gap-3.5 -ml-14">
                                    <Chip label="Reentrancy Guards" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                    <Chip label="Oracles" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                    <Chip label="Token Standards" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                    <Chip label="Access Control" sx={{ bgcolor: "background.default", borderColor: "divider" }} className="border text-sm! font-semibold!"/>
                                </div>
                            </div>
                            <div className="absolute left-0 top-0 h-full w-12 backdrop-blur-sm z-10" style={{ background: `linear-gradient(to right, ${theme.palette.background.paper}, transparent)`, maskImage: "linear-gradient(to right, black, transparent)" }}/>
                            <div className="absolute right-0 top-0 h-full w-12 backdrop-blur-sm z-10" style={{ background: `linear-gradient(to left, ${theme.palette.background.paper}, transparent)`, maskImage: "linear-gradient(to left, black, transparent)" }}/>
                        </Card>
                        {/* Filler 3*/}
                        <Card
                            sx={{
                                bgcolor: "background.paper",
                            }}
                            className="row-span-2 p-0! rounded-[28px]! overflow-hidden! relative"
                        >
                            <div className="absolute -right-4 -bottom-38">
                                <img src={Filler2Img} alt="" className="w-80 object-cover" />
                            </div>
                        </Card>
                    </div>
                    <div className="w-full grid grid-cols-7 gap-[21.33px]! h-94">
                        {/* Product Strategy & Design */}
                        <Card
                            sx={{
                                bgcolor: "background.paper",
                            }}
                            className="col-span-4 p-8! rounded-[28px]! overflow-hidden! relative!"
                        >
                            <div className="flex flex-col h-full justify-between relative z-10">
                                <div className="flex flex-col gap-4 max-w-99">
                                    <Typography sx={{ fontWeight: 600, color: "text.primary" }} className="text-2xl!">
                                        Product Strategy & Design
                                    </Typography>
                                    <Typography sx={{ fontWeight: 300, color: "text.primary" }} className="text-base!">
                                        We validate your product from wireframing to high-fidelity prototyping before coding.
                                    </Typography>
                                </div>
                                <div>
                                    <SaibButton variant="text" className="text-base! w-max!">
                                        Start designing
                                    </SaibButton>
                                </div>
                            </div>
                            <div className="absolute -bottom-40 -right-10 z-10">
                                <img src={ProductStrategyImg} alt="" className="w-130 object-cover" />
                            </div>
                            <div className="absolute left-0 top-0 h-full w-[70%] backdrop-blur-sm" style={{ background: `linear-gradient(to top right, ${theme.palette.brand.gradient.strategy}, transparent)`, maskImage: "linear-gradient(to right, black 40%, transparent)" }}/>
                        </Card>
                        {/* Filler 4 */}
                        <Card
                            sx={{
                                bgcolor: "secondary.light",
                            }}
                            className="p-0! rounded-[28px]! overflow-hidden!"
                        >
                            <img src={Filler3Img} alt="" className="w-full h-full object-cover" />
                        </Card>
                        {/* Tokenomics & Asset Management */}
                        <Card
                            sx={{
                                bgcolor: "background.paper",
                            }}
                            className="col-span-2 p-8! rounded-[28px]! overflow-hidden! relative!"
                        >
                            <div className="flex flex-col h-full justify-between relative z-10">
                                <div className="flex flex-col gap-4">
                                    <Typography sx={{ fontWeight: 600, color: "text.primary" }} className="text-2xl!">
                                        Tokenomics & Asset Management
                                    </Typography>
                                    <Typography sx={{ fontWeight: 300, color: "text.primary" }} className="text-base!">
                                        Create digital assets, NFTs, and tokens for strong economic models.
                                    </Typography>
                                </div>
                                <div>
                                    <SaibButton variant="text" className="text-base! w-max!">
                                        Design economy
                                    </SaibButton>
                                </div>
                            </div>
                            <div className="absolute -bottom-1 -right-8">
                                <img src={TokenomicsImg} alt="" className="w-66 object-cover" />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Section4;
