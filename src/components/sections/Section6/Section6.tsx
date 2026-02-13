import { Box, Chip, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";

import Background from "../../../images/background/background-light.webp";
import SaibPageIndicator from "../../common/SaibPageIndicator";

import ClarkImg from "../../../images/team/clark.webp";
import BernImg from "../../../images/team/bern.webp";
import CaitlinImg from "../../../images/team/caitlin.webp";
import GaleImg from "../../../images/team/gale.webp";
import RicoImg from "../../../images/team/rico.webp";
import KieferImg from "../../../images/team/kiefer.webp";
import WindsImg from "../../../images/team/winds.webp";
import IrisImg from "../../../images/team/iris.webp";
import PerseImg from "../../../images/team/perse.webp";

const Section6: React.FC = () => {
    const theme = useTheme();
    const [activeGroup, setActiveGroup] = useState(0);
    const [activeMember, setActiveMember] = useState(0);

    const teamGroups = [
        {
            group: "The Helm",
            members: [
                { name: "Clark Alesna", role: "Founder & CEO", image: ClarkImg },
                { name: "Bern Vaillacura", role: "Chief of Staff", image: BernImg },
                { name: "Caitlin Lindsay", role: "Technical Administrator", image: CaitlinImg },
                { name: "Gale Jumao-As", role: "Assistant Administrator", image: GaleImg },
            ],
        },
        {
            group: "The Engine Room",
            members: [
                { name: "Rico Quiblat", role: "Head of Engineering", image: RicoImg },
                { name: "Kiefer Gallego", role: "Engineer", image: KieferImg },
                { name: "Wendell Tamayo", role: "Engineer", image: WindsImg },
            ],
        },
        {
            group: "The Command Deck",
            members: [
                { name: "Irish Paring", role: "UI/UX Designer", image: IrisImg },
                { name: "Perse Cantalan", role: "UI/UX Designer", image: PerseImg },
            ],
        },
    ];

    const allMembers = teamGroups.flatMap((g) =>
        g.members.map((m) => ({ ...m, group: g.group }))
    );

    return (
        <Box
            component="section"
            sx={{
                bgcolor: "background.default",
                backgroundImage: `url(${Background})`,
                backgroundRepeat: "repeat",
            }}
            className="h-screen"
        >
            {/* Mobile: individual carousel below lg */}
            <div className="lg:hidden container mx-auto h-full max-sm:py-16 py-30 px-4 lg:px-9 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-6">
                    <Chip label="The minds behind the code" sx={{ borderColor: "primary.dark", color: "primary.dark" }} className="py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                    <Typography className="text-[32px]! sm:text-[48px]! leading-[1.1]! text-center!">
                        <span style={{ color: theme.palette.text.primary }}>Meet </span>
                        <span style={{ color: theme.palette.primary.main }}>{allMembers[activeMember].group}</span>
                    </Typography>
                </div>
                <div
                    key={activeMember}
                    className="flex flex-col items-center gap-4 mt-10 animate-fade-in"
                >
                    <img
                        src={allMembers[activeMember].image}
                        alt={allMembers[activeMember].name}
                        className="w-60 h-72 sm:w-73 sm:h-84 rounded-[20px] object-cover"
                    />
                    <div className="flex flex-col items-center gap-2">
                        <Chip label={allMembers[activeMember].name} sx={{ fontWeight: 800, borderColor: "primary.dark", color: "primary.dark" }} className="w-max! py-0.5! border! bg-transparent! text-base! h-6! rounded-full!" />
                        <Typography sx={{ fontWeight: 300, color: "text.disabled" }} className="text-lg!">
                            {allMembers[activeMember].role}
                        </Typography>
                    </div>
                </div>
                <SaibPageIndicator
                    count={allMembers.length}
                    activeIndex={activeMember}
                    onSelect={setActiveMember}
                    className="mt-10"
                />
            </div>

            {/* Desktop: group carousel at lg and above */}
            <div className="hidden lg:flex container mx-auto h-full py-30 px-9 flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-6">
                    <Chip label="The minds behind the code" sx={{ borderColor: "primary.dark", color: "primary.dark" }} className="py-2.5 border! bg-transparent! text-base! h-10! rounded-full!" />
                    <Typography className="text-[60px]! leading-[1.1]!">
                        <span style={{ color: theme.palette.text.primary }}>Meet </span>
                        <span style={{ color: theme.palette.primary.main }}>{teamGroups[activeGroup].group}</span>
                    </Typography>
                </div>
                <div className="w-full relative flex items-center justify-center mt-16">
                    <div className="absolute left-0">
                        <IconButton
                            onClick={() => setActiveGroup((prev) => (prev - 1 + teamGroups.length) % teamGroups.length)}
                            sx={{ bgcolor: "primary.main", color: theme.palette.brand.lightText }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    </div>
                    <div
                        key={activeGroup}
                        className="flex items-center justify-center gap-6 animate-fade-in"
                    >
                        {teamGroups[activeGroup].members.map((member) => (
                            <div key={member.name} className="flex flex-col items-center gap-4">
                                <div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-73 h-84 rounded-[20px] object-cover"
                                    />
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <Chip label={member.name} sx={{ fontWeight: 800, borderColor: "primary.dark", color: "primary.dark" }} className="w-max! py-0.5! border! bg-transparent! text-base! h-6! rounded-full!" />
                                    <Typography sx={{ fontWeight: 300, color: "text.disabled" }} className="text-lg!">
                                        {member.role}
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute right-0">
                        <IconButton
                            onClick={() => setActiveGroup((prev) => (prev + 1) % teamGroups.length)}
                            sx={{ bgcolor: "primary.main", color: theme.palette.brand.lightText }}
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                    </div>
                </div>
                <SaibPageIndicator
                    count={teamGroups.length}
                    activeIndex={activeGroup}
                    onSelect={setActiveGroup}
                    className="mt-26"
                />
            </div>
        </Box>
    );
};

export default Section6;
