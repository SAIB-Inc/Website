import { Typography, useTheme } from "@mui/material";
import React from "react";
import SaibChip from "../../common/saib-chip";
import { Blockchain, Ceo, Command, Engine, Helm } from "../../../images/icons";
import { graphql, useStaticQuery } from "gatsby";




import TeamCard from "./teamCard";

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
            Misai: file(relativePath: {eq: "team/misai.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Kim: file(relativePath: {eq: "team/kim.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Ivanne: file(relativePath: {eq: "team/ivanne.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Kiefer: file(relativePath: {eq: "team/kiefer.webp"}) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
            Lex: file(relativePath: {eq: "team/lex.webp"}) {
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
            imageSrc: teamsImage.Clark,
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
            imageSrc: teamsImage.Bern,
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
            name: "RJ Lacanlale",
            position: "Head of Software Engineering",
            imageSrc: null,
            group: "The Helm",
            tags: [
                Ceo,
                Helm,
                Engine,
                Blockchain
            ]
        },
        {
            name: "Misai Legara",
            position: "Head of Administration",
            imageSrc: teamsImage.Misai,
            group: "The Helm",
            tags: [
                Ceo,
                Helm,
            ]
        },
        {
            name: "Kim Javier",
            position: "Designer",
            imageSrc: teamsImage.Kim,
            group: "The Command Deck",
            tags: [
                Ceo,
                Command
            ]
        },
        {
            name: "Ivanne Bayer",
            position: "Engineer",
            imageSrc: teamsImage.Ivanne,
            group: "The Command Deck",
            tags: [
                Ceo,
                Command
            ]
        },
        {
            name: "Kiefer Gallego",
            position: "Engineer",
            imageSrc: teamsImage.Kiefer,
            group: "The Command Deck",
            tags: [
                Ceo,
                Command
            ]
        },
        {
            name: "Jonh Alexis Buot",
            position: "Engineer",
            imageSrc: teamsImage.Lex,
            group: "The Engine Room",
            tags: [
                Ceo,
                Engine
            ]
        },
        {
            name: "Caitlin Lindsay",
            position: "Engineer",
            imageSrc: teamsImage.Cait,
            group: "The Engine Room",
            tags: [
                Ceo,
                Engine
            ]
        },
        {
            name: "Kathea Mayol",
            position: "Engineer",
            imageSrc: teamsImage.Kathea,
            group: "The Engine Room",
            tags: [
                Ceo,
                Engine
            ]
        },
        {
            name: "Wendell Tamayo",
            position: "Engineer",
            imageSrc: teamsImage.Wendell,
            group: "The Engine Room",
            tags: [
                Ceo,
                Engine
            ]
        },
        {
            name: "Tan Gantuangco",
            position: "Engineer",
            imageSrc: teamsImage.Tan,
            group: "The Blockchain Lab",
            tags: [
                Ceo,
                Blockchain
            ]
        },
        {
            name: "Rico Quiblat",
            position: "Engineer",
            imageSrc: teamsImage.Rico,
            group: "The Blockchain Lab",
            tags: [
                Ceo,
                Blockchain
            ]
        }
    ]

    return (
        <section className="text-center py-25">
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
            <div className="overflow-hidden max-w-[2500px] mx-auto px-6 space-y-6 mt-14">
                <SaibChip icon={Command} content="The Command Deck" />
                <TeamCard items={teamsData}/>
            </div>
        </section>
    )
}

export default Teams