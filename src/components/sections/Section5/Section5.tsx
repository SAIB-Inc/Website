import { Chip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React, { useState, useEffect, useCallback } from "react";
import { graphql, useStaticQuery } from "gatsby";

const Section5: React.FC = () => {
    const theme = useTheme();

    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "technologies" } }) {
                nodes {
                    name
                    publicURL
                }
            }
        }
    `);

    const technologies: { name: string; publicURL: string }[] = data.allFile.nodes;

    // Staggered grid — 14 icons in top/bottom bands, avoiding decorative blocks and center text
    const techConfig: Record<string, { position: string; smPosition: string; size: number }> = {
        // Top band — 3 staggered rows at 8%, 20%, 26%
        scala:        { position: "sm:top-[2%] sm:left-[24%]",   smPosition: "top-[8%] left-[2%]",     size: 175 },
        cSharp:       { position: "sm:top-[10%] sm:right-[38%]", smPosition: "top-[6%] left-[42%]",    size: 200 },
        dotnet:       { position: "sm:top-[10%] sm:right-[1%]",  smPosition: "top-[8%] right-[2%]",    size: 170 },
        macOS:        { position: "sm:top-[28%] sm:left-[17%]",  smPosition: "top-[20%] left-[22%]",   size: 200 },
        cardano:      { position: "sm:top-[24%] sm:right-[12%]", smPosition: "top-[20%] right-[22%]",  size: 155 },
        docker:       { position: "sm:top-[15%] sm:left-[12%]",  smPosition: "top-[26%] left-[2%]",    size: 130 },
        azure:        { position: "sm:top-[12%] sm:right-[16%]", smPosition: "top-[26%] right-[2%]",   size: 100 },
        // Bottom band — 3 staggered rows at bottom 26%, 18%, 10%
        linux:        { position: "sm:bottom-[24%] sm:left-[12%]", smPosition: "bottom-[26%] left-[2%]",    size: 140 },
        aws:          { position: "sm:bottom-[14%] sm:left-[2%]",  smPosition: "bottom-[26%] left-[42%]",   size: 160 },
        kubernetes:   { position: "sm:bottom-[26%] sm:right-[2%]", smPosition: "bottom-[26%] right-[2%]",   size: 200 },
        windows:      { position: "sm:top-[5%] sm:right-[28%]",    smPosition: "bottom-[18%] left-[22%]",   size: 110 },
        android:      { position: "sm:bottom-[12%] sm:right-[24%]",smPosition: "bottom-[18%] right-[22%]",  size: 185 },
        postgresql:   { position: "sm:bottom-[10%] sm:right-[12%]",smPosition: "bottom-[10%] left-[2%]",    size: 105 },
        demeter:      { position: "sm:bottom-[10%] sm:right-[38%]",smPosition: "bottom-[10%] right-[2%]",   size: 145 },
    };

    const techItems = technologies
        .filter((tech) => tech.name in techConfig)
        .map((tech) => ({
            ...tech,
            ...techConfig[tech.name],
        }));

    const pickRandom = useCallback((names: string[], count: number) => {
        const shuffled = [...names].sort(() => Math.random() - 0.5);
        return new Set(shuffled.slice(0, count));
    }, []);

    const allNames = techItems.map((t) => t.name);
    const [activeSet, setActiveSet] = useState<Set<string>>(() => pickRandom(allNames, 4));

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSet(pickRandom(allNames, 4));
        }, 2000);
        return () => clearInterval(interval);
    }, [allNames.join(","), pickRandom]);

    return(
        <Box
            component="section"
            sx={{
                bgcolor: "background.dark"
            }}
            className="h-screen relative overflow-hidden"
        >
            <div>
                <div className="absolute w-41 h-15 z-20" style={{ backgroundColor: theme.palette.brand.decorative }}/>
                <div className="absolute w-20 h-15 top-15 z-20" style={{ backgroundColor: theme.palette.brand.decorative }}/>
                <div className="absolute w-41 h-15 right-0 z-20" style={{ backgroundColor: theme.palette.brand.decorative }}/>
            </div>
            <div>
                {techItems.map((tech) => (
                    <img
                        key={tech.name}
                        src={tech.publicURL}
                        alt={tech.name}
                        className={`absolute pointer-events-none max-sm:max-w-20 max-sm:max-h-20 ${tech.smPosition} ${tech.position}`}
                        style={{
                            width: tech.size,
                            height: tech.size,
                            filter: activeSet.has(tech.name) ? "blur(0px)" : "blur(10px)",
                            opacity: activeSet.has(tech.name) ? 1 : 0.4,
                            transition: "filter 0.6s ease, opacity 0.6s ease",
                        }}
                    />
                ))}
            </div>
            <div className="container h-full mx-auto max-sm:py-16 py-30 flex flex-col gap-6 items-center justify-center relative z-10 px-4 lg:px-9">
                <Chip label="Our Aresenal" sx={{ borderColor: theme.palette.brand.lightText, color: theme.palette.brand.lightText }} className="py-2.5 border! bg-transparent! text-base! h-10! w-max! rounded-full!" />
                <Typography className="text-[36px]! sm:text-[48px]! lg:text-[60px] leading-[1.1]! text-center!">
                    <span style={{ color: theme.palette.brand.lightText }}>Powered by </span><br className="max-lg:hidden"/>
                    <span style={{ color: theme.palette.primary.main }}>Best-in-Class </span>
                    <span style={{ color: theme.palette.brand.lightText }}>Technology </span>
                </Typography>
            </div>
            <div className="z-20">
                <div className="absolute left-33 right-43 h-16 bottom-0 z-20" style={{ backgroundColor: theme.palette.brand.decorative }}/>
                <div className="absolute w-20 h-8 bottom-0 right-23 z-20" style={{ background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.brand.accent})` }}/>
                <div className="absolute w-10 h-8 bottom-8 right-33 z-20" style={{ background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.brand.accent})` }}/>
                <div className="absolute w-10 h-8 bottom-16 right-23 z-20" style={{ background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.brand.accent})` }}/>
                <div className="absolute w-10 h-8 bottom-8 right-5 z-20" style={{ backgroundColor: theme.palette.primary.dark }}/>
                <div className="absolute w-10 h-16 bottom-16 right-5 z-20" style={{ backgroundColor: theme.palette.brand.decorative }}/>
                <div className="absolute w-10 h-8 bottom-24 right-0 z-20" style={{ backgroundColor: theme.palette.brand.decorative }}/>
                <div className="absolute w-5 h-8 bottom-16 right-0 z-20" style={{ backgroundColor: theme.palette.primary.dark }}/>
            </div>
        </Box>
    );
};

export default Section5;
