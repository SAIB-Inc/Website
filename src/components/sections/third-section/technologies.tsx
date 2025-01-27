import { Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import TechnologiesRow from "./technologies-row";

const TechCategories = { 
    languages: ['c#', 'f#', 'haskell', 'javascript', 'python', 'scala', 'typescript'],
    webApp: ['dotnet', 'nodejs'],
    os: ['android', 'ios', 'linux', 'windows', 'mac'],
    cloud: ['azure', 'google-cloud', 'aws'],
    db: ['MS SQL', 'mongodb', 'postgresql', 'mysqL'],
    blockchain: ['cardano', 'demeter'],
    container: ['docker', 'kubernetes']
};

const Technologies: React.FC = () => {
    const technologyImages = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "technologies" }}) {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData(
                                width: 150
                                placeholder: NONE
                                formats: [AUTO, WEBP]
                            )
                        }
                    }
                }
            }
        }
    `);

    const technologies = technologyImages.allFile.edges;

    const categorizedTechnologies = Object.entries(TechCategories).reduce((acc, [category, names]) => {
        acc[category] = technologies.filter(({ node }) => names.includes(node.name));
        return acc;
    }, {} as Record<string, typeof technologies>);

    const row1 = [
        ...categorizedTechnologies.languages, ...categorizedTechnologies.webApp, ...categorizedTechnologies.os,
        ...categorizedTechnologies.cloud, ...categorizedTechnologies.db, ...categorizedTechnologies.blockchain,
        ...categorizedTechnologies.container
    ];
    const row2 = [
        ...categorizedTechnologies.container, ...categorizedTechnologies.db, ...categorizedTechnologies.languages,
        ...categorizedTechnologies.blockchain, ...categorizedTechnologies.os, ...categorizedTechnologies.webApp,
        ...categorizedTechnologies.cloud
    ];
    const row3 = [
        ...categorizedTechnologies.os, ...categorizedTechnologies.blockchain, ...categorizedTechnologies.container,
        ...categorizedTechnologies.webApp, ...categorizedTechnologies.languages, ...categorizedTechnologies.os,
        ...categorizedTechnologies.db
    ];

    console.log(technologies)

    const infiniteScrollRow1 = [...row1, ...row1];
    const infiniteScrollRow2 = [...row2, ...row2];
    const infiniteScrollRow3 = [...row3, ...row3];

    return (
        <section className="text-center py-25 h-screen flex flex-col items-center justify-center">
            <div className="w-full">
                <Typography
                    component="h6"
                    variant="h6"
                    color="secondary"
                >
                    What we are good at...
                </Typography>
                <Typography
                    component="h3"
                    variant="h3"
                >
                    Technologies
                </Typography>
            </div>
            <div className="max-w-630 overflow-hidden mx-auto mt-14 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)]">
                <TechnologiesRow items={infiniteScrollRow1} />
                <TechnologiesRow items={infiniteScrollRow2} direction="reverse" />
                <TechnologiesRow items={infiniteScrollRow3} />
            </div>
        </section>
    );
};

export default Technologies;
