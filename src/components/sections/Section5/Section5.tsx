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

    // Four corner groups avoiding decorative blocks and center text
    const techConfig: Record<string, { position: string; size: number }> = {
        // Top-left group (clear of L-shape: w-41 h-15 + w-20 h-30)
        ios:          { position: "top-[30%] left-[3%]", size: 95 },
        scala:        { position: "top-[2%] left-[24%]", size: 175 },
        fsharp:       { position: "top-[10%] left-[38%]", size: 60 },
        docker:       { position: "top-[15%] left-[12%]", size: 130 },
        macOS:        { position: "top-[28%] left-[17%]", size: 200 },
        typescript:   { position: "top-[24%] left-[32%]", size: 70 },
        // Top-right group (clear of w-41 h-15 top-right block)
        dotnet:       { position: "top-[10%] right-[1%]", size: 170 },
        azure:        { position: "top-[12%] right-[16%]", size: 100 },
        windows:      { position: "top-[5%] right-[28%]", size: 110 },
        cardano:      { position: "top-[24%] right-[12%]", size: 155 },
        haskell:      { position: "top-[26%] right-[30%]", size: 60 },
        cSharp:       { position: "top-[10%] right-[38%]", size: 200 },
        // Bottom-left group (clear of bottom bar at left-33)
        linux:        { position: "bottom-[24%] left-[12%]", size: 140 },
        aws:          { position: "bottom-[14%] left-[2%]", size: 160 },
        mongoDB:      { position: "bottom-[24%] left-[32%]", size: 75 },
        gcloud:       { position: "bottom-[40%] left-[6%]", size: 120 },
        python:       { position: "bottom-[12%] left-[24%]", size: 65 },
        aiken:        { position: "bottom-[10%] left-[38%]", size: 65 },
        // Bottom-right group (clear of staircase blocks at bottom-right)
        javascript:   { position: "bottom-[50%] right-[5%]", size: 60 },
        kubernetes:   { position: "bottom-[26%] right-[2%]", size: 200 },
        mysql:        { position: "bottom-[44%] right-[18%]", size: 100 },
        postgresql:   { position: "bottom-[10%] right-[12%]", size: 105 },
        android:      { position: "bottom-[12%] right-[24%]", size: 185 },
        demeter:      { position: "bottom-[10%] right-[38%]", size: 145 },
    };

    const techItems = technologies.map((tech) => ({
        ...tech,
        ...(techConfig[tech.name] ?? { position: "", size: 80 }),
    }));

    const pickRandom = useCallback((names: string[], count: number) => {
        const shuffled = [...names].sort(() => Math.random() - 0.5);
        return new Set(shuffled.slice(0, count));
    }, []);

    const allNames = techItems.map((t) => t.name);
    const [activeSet, setActiveSet] = useState<Set<string>>(() => pickRandom(allNames, 6));

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSet(pickRandom(allNames, 6));
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
                <div className="absolute w-41 h-15" style={{ backgroundColor: theme.palette.brand.decorative }}/>
                <div className="absolute w-20 h-15 top-15" style={{ backgroundColor: theme.palette.brand.decorative }}/>
                <div className="absolute w-41 h-15 right-0" style={{ backgroundColor: theme.palette.brand.decorative }}/>
            </div>
            <div>
                {techItems.map((tech) => (
                    <img
                        key={tech.name}
                        src={tech.publicURL}
                        alt={tech.name}
                        className={`absolute pointer-events-none ${tech.position}`}
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
            <div className="container h-full mx-auto py-30 px-9 flex flex-col gap-6 items-center justify-center relative z-10">
                <Chip label="Our Aresenal" sx={{ borderColor: theme.palette.brand.lightText, color: theme.palette.brand.lightText }} className="py-2.5 border! bg-transparent! text-base! h-10! w-max! rounded-full!" />
                <Typography className="text-[60px]! leading-[1.1]! text-center!">
                    <span style={{ color: theme.palette.brand.lightText }}>Powered by </span><br/>
                    <span style={{ color: theme.palette.primary.main }}>Best-in-Class </span>
                    <span style={{ color: theme.palette.brand.lightText }}>Technology </span>
                </Typography>
            </div>
            <div>
                <div className="absolute left-33 right-43 h-16 bottom-0" style={{ backgroundColor: theme.palette.brand.decorative }}/>
                <div className="absolute w-20 h-8 bottom-0 right-23" style={{ background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.brand.accent})` }}/>
                <div className="absolute w-10 h-8 bottom-8 right-33" style={{ background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.brand.accent})` }}/>
                <div className="absolute w-10 h-8 bottom-16 right-23" style={{ background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.brand.accent})` }}/>
                <div className="absolute w-10 h-8 bottom-8 right-5" style={{ backgroundColor: theme.palette.primary.dark }}/>
                <div className="absolute w-10 h-16 bottom-16 right-5" style={{ backgroundColor: theme.palette.brand.decorative }}/>
                <div className="absolute w-10 h-8 bottom-24 right-0" style={{ backgroundColor: theme.palette.brand.decorative }}/>
                <div className="absolute w-5 h-8 bottom-16 right-0" style={{ backgroundColor: theme.palette.primary.dark }}/>
            </div>
        </Box>
    );
};

export default Section5;
