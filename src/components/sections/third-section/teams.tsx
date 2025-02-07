import React from "react";
import TeamCard from "./team-card";
import { Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { Blockchain, Ceo, Command, Engine, Helm } from "../../../images/icons";
import { LinkedIn, X } from "../../../images/socials";

const Teams: React.FC = () => {
    const teamsImage = useStaticQuery(graphql`
        query {
            Clark: file(relativePath: { eq: "team/clark.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            ClarkModal: file(relativePath: { eq: "team/modal/clark-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            Bern: file(relativePath: { eq: "team/bern.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            BernModal: file(relativePath: { eq: "team/modal/bern-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            Cait: file(relativePath: { eq: "team/cait.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            CaitModal: file(relativePath: { eq: "team/modal/cait-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            Kathea: file(relativePath: { eq: "team/kathea.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            KatheaModal: file(relativePath: { eq: "team/modal/kathea-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            Rj: file(relativePath: { eq: "team/rj.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            RjModal: file(relativePath: { eq: "team/modal/rj-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            Kim: file(relativePath: { eq: "team/kim.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            KimModal: file(relativePath: { eq: "team/modal/kim-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            Kiefer: file(relativePath: { eq: "team/kiefer.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            KieferModal: file(relativePath: { eq: "team/modal/kiefer-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            Wendell: file(relativePath: { eq: "team/wendell.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            WendellModal: file(relativePath: { eq: "team/modal/wendell-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            Tan: file(relativePath: { eq: "team/tan.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            TanModal: file(relativePath: { eq: "team/modal/tan-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            Rico: file(relativePath: { eq: "team/rico.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            RicoModal: file(relativePath: { eq: "team/modal/rico-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            Lance: file(relativePath: { eq: "team/lance.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            LanceModal: file(relativePath: { eq: "team/modal/lance-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
            PlaceholderModal: file(relativePath: { eq: "team/modal/placeholder-modal.webp" }) {
                childImageSharp {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
        }
    `)

    const teamsData = [
        {
            name: "Clark Alesna",
            position: "Chief Executive Officer",
            imageSrc: teamsImage.Clark.childImageSharp.gatsbyImageData,
            modalImageSrc: teamsImage.ClarkModal.childImageSharp.gatsbyImageData,
            group: "The Helm",
            description: "",
            skills: [
                "Leadership",
                "Cardano",
                "Backend"
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/clarkalesna"
                },
            ],
            tags: [
                Ceo,
                Helm,
                Command,
                Engine,
                Blockchain
            ],
        },
        {
            name: "Bern Villacura",
            position: "Chief of Staff",
            imageSrc: teamsImage.Bern.childImageSharp.gatsbyImageData,
            modalImageSrc: teamsImage.BernModal.childImageSharp.gatsbyImageData,
            group: "The Helm",
            description: "",
            skills: [
                "Management"
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/itsBarbieBern"
                },
            ],
            tags: [
                Helm,
            ]
        },
        {
            name: "Ben Jules Dico",
            position: "Chief Marketing Officer",
            imageSrc: null,
            modalImageSrc: teamsImage.PlaceholderModal.childImageSharp.gatsbyImageData,
            group: "The Helm",
            description: "",
            skills: [
                "Marketing"
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/Benjdico"
                }
            ],
            tags: [
                Helm,
            ]
        },
        {
            name: "Caitlin Lindsay",
            position: "Technical Administrator",
            imageSrc: teamsImage.Cait.childImageSharp.gatsbyImageData,
            modalImageSrc: teamsImage.CaitModal.childImageSharp.gatsbyImageData,
            group: "The Helm",
            description: "Hi! I'm Caitlin. I enjoy learning and working in various discplines, from front-end engineering to back-end development. I've developed a newfound interest in blockchain technology, and am always eager to learn and improve myself.",
            skills: [
                "Presentation",
                "Documentation",
                "Backend"
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/Caitlin44753320"
                },
                {
                    label: "LinkedIn",
                    icon: LinkedIn,
                    link: "https://www.linkedin.com/in/caitlin-mariel-lindsay-7341a3323/"
                }
            ],
            tags: [
                Helm,
            ]
        },
        {
            name: "Kathea Mayol",
            position: "Technical Administrator",
            imageSrc: teamsImage.Kathea.childImageSharp.gatsbyImageData,
            modalImageSrc: teamsImage.KatheaModal.childImageSharp.gatsbyImageData,
            group: "The Helm",
            description: "Good Day! I'm Kathea Mari, and I have a passion for technology and software solutions, particularly in web development and blockchain technologies. I thrive in collaborative environments where I can learn, contribute, and create meaningful value through innovation and teamwork.",
            skills: [
                "Frontend",
                "Backend",
                "Media Editing"
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/aoikatteunari"
                },
                {
                    label: "LinkedIn",
                    icon: LinkedIn,
                    link: "https://www.linkedin.com/in/kathea-mayol/"
                }
            ],
            tags: [
                Helm
            ]
        },
        {
            name: "RJ Lacanlale",
            position: "Head of Software Engineering",
            imageSrc: teamsImage.Rj.childImageSharp.gatsbyImageData,
            modalImageSrc: teamsImage.RjModal.childImageSharp.gatsbyImageData,
            group: "The Helm",
            description: "Hi, I'm RJ. I build innovative blockchain applications and design scalable backend systems. I love working with cutting-edge tech to create solutions that push boundaries, while driving engineering excellence through knowledge sharing and mentorship.",
            skills: [
                "Blockchain",
                "Backend",
                "Mentorship"
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/rjlacanlale"
                },
                {
                    label: "LinkedIn",
                    icon: LinkedIn,
                    link: "https://www.linkedin.com/in/reza-jhay-lacanlale-6b8b62107/"
                }
            ],
            tags: [
                Helm,
            ]
        },
        {
            name: "Kim Javier",
            position: "Designer",
            imageSrc: teamsImage.Kim.childImageSharp.gatsbyImageData,
            modalImageSrc: teamsImage.KimModal.childImageSharp.gatsbyImageData,
            group: "The Command Deck",
            description: "Hey there! I'm Kim and I'm a creative designer with a background of graphic design, UI/UX and project management. I help businesses to their success by creating quality and well-thought and user-centric designs and is always up to challenge to whatever is brought to the table.",
            skills: [
                "Creative Direction",
                "Web UI/UX Design",
                "Branding"
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/mikimoto_kem"
                },
                {
                    label: "LinkedIn",
                    icon: LinkedIn,
                    link: "https://www.linkedin.com/in/kimberlyjavier98/"
                }
            ],
            tags: [
                Command
            ]
        },
        {
            name: "Kiefer Gallego",
            position: "Engineer",
            imageSrc: teamsImage.Kiefer.childImageSharp.gatsbyImageData,
            modalImageSrc: teamsImage.KieferModal.childImageSharp.gatsbyImageData,
            group: "The Command Deck",
            description: "Hi! I'm Kief, a passionate frontend developer with experience in creating intuitive, user-friendly interfaces. I enjoy working with modern web technologies and continuously exploring new frameworks to improve my skill set. I'm always looking for new challenges and opportunities to grow both personally and professionally.",
            skills: [
                "Frontend",
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/keeeefG"
                },
                {
                    label: "LinkedIn",
                    icon: LinkedIn,
                    link: "https://www.linkedin.com/in/kiefer-gallego/"
                }
            ],
            tags: [
                Command
            ]
        },
        {
            name: "Wendell Tamayo",
            position: "Engineer",
            imageSrc: teamsImage.Wendell.childImageSharp.gatsbyImageData,
            modalImageSrc: teamsImage.WendellModal.childImageSharp.gatsbyImageData,
            group: "The Engine Room",
            description: "I'm Wendell, and I'm driven by how technology can transform challenges into opportunities. Constantly seeking new ways to innovate, I thrive on creating solutions that turn bold ideas into reality.",
            skills: [
                "Backend",
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/windss0501"
                },
                {
                    label: "LinkedIn",
                    icon: LinkedIn,
                    link: "https://www.linkedin.com/in/wendell-mor-tamayo-41388b298"
                }
            ],
            tags: [
                Engine
            ]
        },
        {
            name: "Rico Quiblat",
            position: "Engineer",
            imageSrc: teamsImage.Rico.childImageSharp.gatsbyImageData,
            modalImageSrc: teamsImage.RicoModal.childImageSharp.gatsbyImageData,
            group: "The Engine Room",
            description: "I'm Rico, and I have a deep passion for technology and solving problems. I enjoy tackling challenges and finding solutions. Bringing ideas to life through technology excites me every day.",
            skills: [
                "Backend Development"
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/rcmls18"
                },
                {
                    label: "LinkedIn",
                    icon: LinkedIn,
                    link: "https://www.linkedin.com/in/rico-miles-quiblat-34a6b7298/"
                }
            ],
            tags: [
                Blockchain
            ]
        },
        {
            name: "Tan Gantuangco",
            position: "Engineer",
            imageSrc: teamsImage.Tan.childImageSharp.gatsbyImageData,
            modalImageSrc: teamsImage.TanModal.childImageSharp.gatsbyImageData,
            group: "The Blockchain Lab",
            description: "I'm Tan, and I develop software solutions with a focus on backend development, database design, web technologies, and blockchain systems. I thrive on creating efficient, scalable solutions tailored to modern technological needs.",
            skills: [
                "Backend",
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/krstng02k"
                },
                {
                    label: "LinkedIn",
                    icon: LinkedIn,
                    link: "https://www.linkedin.com/in/christian-gantuangco/"
                }
            ],
            tags: [
                Blockchain
            ]
        },
        {
            name: "Lance Salera",
            position: "Engineer",
            imageSrc: teamsImage.Lance.childImageSharp.gatsbyImageData,
            modalImageSrc: teamsImage.LanceModal.childImageSharp.gatsbyImageData,
            group: "The Blockchain Lab",
            description: "Nice to meet you, I'm Lance! I find fulfillment in sharing my knowledge to other people and I enjoy dealing with problems that require logic and critical thinking. Currently, I am immersing myself with blockchain technology, aiming to confidently showcase this as one of my key technical skills.",
            skills: [
                "Mentoring",
                "Backend"
            ],
            socials: [
                {
                    label: "X",
                    icon: X,
                    link: "https://x.com/smerlux"
                },
                {
                    label: "LinkedIn",
                    icon: LinkedIn,
                    link: "https://www.linkedin.com/in/lance-vincent-salera-4a99b62bb/"
                }
            ],
            tags: [
                Blockchain
            ]
        }
    ];

    return (
        <div id="our-team" className="text-center py-25">
            <div className="w-full">
                <Typography
                    component="h6"
                    variant="h6"
                    color="secondary"
                    className="max-sm:!text-sm"
                >
                    Who makes it happen...
                </Typography>
                <Typography
                    component="h3"
                    variant="h3"
                    className="max-sm:!text-4xl"
                >
                    Meet the team
                </Typography>
            </div>
            <div className="overflow-auto max-w-630 mx-auto px-6 space-y-6 mt-10">
                <TeamCard items={teamsData} />
            </div>
        </div>
    );
};

export default Teams;