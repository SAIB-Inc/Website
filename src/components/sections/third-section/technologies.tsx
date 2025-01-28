import { Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import TechnologiesRow from "./technologies-row";

interface TechnologyImage {
    name: string;
    gatsbyImageData: any;
}

interface GraphQLQueryResponse {
    allFile: {
        edges: {
            node: {
                name: string;
                childImageSharp: {
                    gatsbyImageData: any;
                };
            };
        }[];
    };
}

const Technologies: React.FC = () => {
    const technologyImages = useStaticQuery<GraphQLQueryResponse>(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "technologies" }}) {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData(width: 150)
                        }
                    }
                }
            }
        }
    `);

    const technologies = technologyImages.allFile.edges.map(({ node }) => ({
        name: node.name,
        gatsbyImageData: node.childImageSharp?.gatsbyImageData,
    }));

    function generateRandomizedRow(technologies: TechnologyImage[]): TechnologyImage[] {
        const allTechnologies = [...technologies];

        for (let i = allTechnologies.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allTechnologies[i], allTechnologies[j]] = [allTechnologies[j], allTechnologies[i]];
        }

        return [...allTechnologies, ...allTechnologies];
    }

    const row1 = generateRandomizedRow(technologies);
    const row2 = generateRandomizedRow(technologies);
    const row3 = generateRandomizedRow(technologies);

    return (
        <div className="text-center py-6 min-h-screen flex flex-col items-center justify-center">
            <div className="w-full">
                <Typography component="h6" variant="h6" color="secondary">
                    What we are good at...
                </Typography>
                <Typography component="h3" variant="h3">
                    Technologies
                </Typography>
            </div>
            <div className="w-full max-w-630 overflow-hidden mx-auto mt-14 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)]">
                <TechnologiesRow items={row1} />
                <TechnologiesRow items={row2} direction="reverse" />
                <TechnologiesRow items={row3} />
            </div>
        </div>
    );
};

export default Technologies;
