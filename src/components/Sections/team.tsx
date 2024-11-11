import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Team: React.FC = () => {
  const team = useStaticQuery(graphql`
    query {
      Clark: file(relativePath: {eq: "team/Clark.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Misai: file(relativePath: {eq: "team/Misai.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      RJ: file(relativePath: {eq: "team/RJ.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Tan: file(relativePath: {eq: "team/Tan.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Kief: file(relativePath: {eq: "team/Kief.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Kath: file(relativePath: {eq: "team/Kath.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Rico: file(relativePath: {eq: "team/Rico.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Chow: file(relativePath: {eq: "team/Chow.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Windz: file(relativePath: {eq: "team/Windz.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Kenjie: file(relativePath: {eq: "team/Kenjie.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Ivan: file(relativePath: {eq: "team/Ivan.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Lex: file(relativePath: {eq: "team/Lex.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Matt: file(relativePath: {eq: "team/Matthew.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Cait: file(relativePath: {eq: "team/Caitlin.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
    }
  `);

  const teamMembers = [
    {
      name: "Clark Alesna",
      role: "CEO & Software Engineer",
      profileImg: getImage(team.Clark),
      linkedIn: "https://www.linkedin.com/in/clarkalesna",
      X: "https://x.com/clarkalesna"
    },
    {
      name: "Misai Legara",
      role: "Head of Administration",
      profileImg: getImage(team.Misai),
      linkedIn: "https://www.linkedin.com/in/misai-legara/",
      X: "https://x.com/iammisai"
    },
    {
      name: "Reza Jhay Lacanlale",
      role: "Senior Software Engineer",
      profileImg: getImage(team.RJ),
      linkedIn: "https://www.linkedin.com/in/reza-jhay-lacanlale-6b8b62107/",
      X: "https://x.com/rjlacanlale"
    },
    {
      name: "Christian Gantuangco",
      role: "Developer",
      profileImg: getImage(team.Tan),
      linkedIn: "https://www.linkedin.com/in/christan-gantuangco/",
    },
    {
      name: "Kiefer Gallego",
      role: "Developer",
      profileImg: getImage(team.Kief),
      linkedIn: "https://www.linkedin.com/in/kiefer-gallego/",
    },
    {
      name: "Kathea Mayol",
      role: "Developer",
      profileImg: getImage(team.Kath),
      linkedIn: "https://www.linkedin.com/in/kathea-mayol/",
    },
    {
      name: "Rico Quiblat",
      role: "Developer",
      profileImg: getImage(team.Rico),
      linkedIn: "https://www.linkedin.com/in/rico-miles-quiblat-34a6b7298/",
    },
    {
      name: "John Taboada",
      role: "Developer",
      profileImg: getImage(team.Chow),
      linkedIn: "https://www.linkedin.com/in/john-quinnvic-taboada-8801b9275/",
    },
    {
      name: "Wendell Tamayo",
      role: "Developer",
      profileImg: getImage(team.Windz),
      linkedIn: "https://www.linkedin.com/in/wendell-mor-tamayo-41388b298/",
    },
    {
      name: "Ivanne Bayer",
      role: "Developer",
      profileImg: getImage(team.Ivan),
      linkedIn: "https://www.linkedin.com/in/ivanne-bayer-a23b30302/",
    },
    {
      name: "John Alexis Buot",
      role: "Developer",
      profileImg: getImage(team.Lex),
      linkedIn: "https://www.linkedin.com/in/laplace-xd/",
    },
    {
      name: "Caitlin Lindsay",
      role: "Developer",
      profileImg: getImage(team.Cait),
      linkedIn: "https://www.linkedin.com/in/caitlin-mariel-lindsay-7341a3323/",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[45px] md:mt-[75px] xl:mt-16">
      {teamMembers.map((member, index) => {
        const profileImg = member.profileImg;

        return (
          <div key={index} className="flex flex-col items-center gap-3 py-[48px] px-[24px] bg-white-tint backdrop-blur-md border border-[#232323] rounded-xl h-[380px]">
            <div className="w-[123px] rounded-full overflow-hidden grayscale">
              {profileImg ? (
                <GatsbyImage image={profileImg} alt={member.name} />
              ) : (
                <div className="bg-gray-200 w-[123px] h-[123px] rounded-full flex items-center justify-center rounded-full">
                  <span>No Image</span>
                </div>
              )}
            </div>
            <div className='grow'>
              <h3 className="text-[24px] font-bold text-center">{member.name}</h3>
              <p className="text-[14px] mt-2 text-center">{member.role}</p>
            </div>
            <div className="flex gap-2">
              {member.X &&
                <a href={member.X} target="_blank" rel="noopener noreferrer">
                  <XIcon className='w-[32px] h-[32px]' />
                </a>
              }
              <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className='w-[32px] h-[32px]' />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
