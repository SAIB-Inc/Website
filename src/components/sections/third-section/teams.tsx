import React from "react";
import TeamCard from "./team-card";
import SaibChip from "../../common/saib-chip";
import { Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { Blockchain, Ceo, Command, Engine, Helm } from "../../../images/icons";

const Teams: React.FC = () => {
    const teamsImage = useStaticQuery(graphql`
        query {
            Clark: file(relativePath: {eq: "team/clark.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Bern: file(relativePath: {eq: "team/bern.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Cait: file(relativePath: {eq: "team/cait.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Kathea: file(relativePath: {eq: "team/kathea.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Rj: file(relativePath: {eq: "team/rj.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Kim: file(relativePath: {eq: "team/kim.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Kiefer: file(relativePath: {eq: "team/kiefer.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Wendell: file(relativePath: {eq: "team/wendell.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Tan: file(relativePath: {eq: "team/tan.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Rico: file(relativePath: {eq: "team/rico.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
        }
    `);

    const teamsData = [
        {
            name: "Clark Alesna",
            position: "Chief Executive Officer",
            imageSrc: teamsImage.Clark.childImageSharp.gatsbyImageData,
            group: "The Helm",
            tags: [
                Ceo,
                Helm,
                Command,
                Engine,
                Blockchain
            ]
        },
        {
            name: "Bern Villacura",
            position: "Chief of Staff",
            imageSrc: teamsImage.Bern.childImageSharp.gatsbyImageData,
            group: "The Helm",
            tags: [
                Ceo,
                Helm,
            ]
        },
        {
            name: "Ben Jules Dico",
            position: "Chief Marketing Officer",
            imageSrc: null,
            group: "The Helm",
            tags: [
                Ceo,
                Helm,
            ]
        },
        {
            name: "Caitlin Lindsay",
            position: "Engineer",
            imageSrc: teamsImage.Cait.childImageSharp.gatsbyImageData,
            group: "The Engine Room",
            tags: [
                Ceo,
                Engine
            ]
        },
        {
            name: "Kathea Mayol",
            position: "Engineer",
            imageSrc: teamsImage.Kathea.childImageSharp.gatsbyImageData,
            group: "The Engine Room",
            tags: [
                Ceo,
                Engine
            ]
        },
        {
            name: "RJ Lacanlale",
            position: "Head of Software Engineering",
            imageSrc: teamsImage.Rj.childImageSharp.gatsbyImageData,
            group: "The Helm",
            tags: [
                Ceo,
                Helm,
                Engine,
                Blockchain
            ]
        },
        {
            name: "Kim Javier",
            position: "Designer",
            imageSrc: teamsImage.Kim.childImageSharp.gatsbyImageData,
            group: "The Command Deck",
            tags: [
                Command
            ]
        },
        {
            name: "Kiefer Gallego",
            position: "Engineer",
            imageSrc: teamsImage.Kiefer.childImageSharp.gatsbyImageData,
            group: "The Command Deck",
            tags: [
                Command
            ]
        },
        {
            name: "Wendell Tamayo",
            position: "Engineer",
            imageSrc: teamsImage.Wendell.childImageSharp.gatsbyImageData,
            group: "The Engine Room",
            tags: [
                Engine
            ]
        },
        {
            name: "Tan Gantuangco",
            position: "Engineer",
            imageSrc: teamsImage.Tan.childImageSharp.gatsbyImageData,
            group: "The Blockchain Lab",
            tags: [
                Blockchain
            ]
        },
        {
            name: "Rico Quiblat",
            position: "Engineer",
            imageSrc: teamsImage.Rico.childImageSharp.gatsbyImageData,
            group: "The Blockchain Lab",
            tags: [
                Blockchain
            ]
        }
    ];

    return (
        <div className="text-center py-25">
            <div className="w-full">
                <Typography
                    component="h6"
                    variant="h6"
                    color="secondary"
                >
                    Who makes it happen...
                </Typography>
                <Typography
                    component="h3"
                    variant="h3"
                >
                    Meet the team
                </Typography>
            </div>
            <div className="overflow-hidden max-w-630 mx-auto px-6 space-y-6 mt-14">
                <SaibChip icon={Command} content="The Command Deck" />
                <TeamCard items={teamsData} />
            </div>
        </div>
    );
};

export default Teams;