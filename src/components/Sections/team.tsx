import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Card } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface memberType {
  name: string,
  role: string,
  profileImage: any,
  linkedIn?: string,
  X?: string | null
}

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
      Ben: file(relativePath: {eq: "team/Ben.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Bern: file(relativePath: {eq: "team/Bern.png"}) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      Clarisse: file(relativePath: {eq: "team/Clarisse.png"}) {
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

  const KeyTeam: memberType[] = [
    {
      name: "Clark Alesna",
      role: "CEO & Software Engineer",
      profileImage: getImage(team.Clark),
      linkedIn: "https://www.linkedin.com/in/clarkalesna",
      X: "https://x.com/clarkalesna"
    },
    {
      name: "Misai Legara",
      role: "Head of Administration",
      profileImage: getImage(team.Misai),
      linkedIn: "https://www.linkedin.com/in/misai-legara/",
      X: "https://x.com/iammisai"
    },
    {
      name: "Reza Jhay Lacanlale",
      role: "Senior Software Engineer",
      profileImage: getImage(team.RJ),
      linkedIn: "https://www.linkedin.com/in/reza-jhay-lacanlale-6b8b62107/",
      X: "https://x.com/rjlacanlale"
    },
    {
      name: "Ben Jules Dico",
      role: "Chief Marketing Officer",
      profileImage: getImage(team.Ben),
      X: "https://x.com/Benjdico"
    },
    {
      name: "Bern Villacura",
      role: "Chief of Staff",
      profileImage: getImage(team.Bern),
      linkedIn: "https://www.linkedin.com/in/barbiebern/"
    },
    {
      name: "Roxanne Alesna",
      role: "Administrative Assistant",
      profileImage: getImage(team.Clarisse),
      linkedIn: "https://www.linkedin.com/in/roxanne-alesna-33a10b331"
    },
  ]

  const frontendDevs: memberType[] = [
    {
      name: "Ivanne Bayer",
      role: "Developer",
      profileImage: getImage(team.Ivan),
      linkedIn: "https://www.linkedin.com/in/ivanne-bayer-a23b30302/",
    },
    {
      name: "Kiefer Gallego",
      role: "Developer",
      profileImage: getImage(team.Kief),
      linkedIn: "https://www.linkedin.com/in/kiefer-gallego/",
    }
  ]

  const backendDevs: memberType[] = [
    {
      name: "John Alexis Buot",
      role: "Developer",
      profileImage: getImage(team.Lex),
      linkedIn: "https://www.linkedin.com/in/laplace-xd/",
    },
    {
      name: "Caitlin Lindsay",
      role: "Developer",
      profileImage: getImage(team.Cait),
      linkedIn: "https://www.linkedin.com/in/caitlin-mariel-lindsay-7341a3323/",
    },
    {
      name: "Kathea Mayol",
      role: "Developer",
      profileImage: getImage(team.Kath),
      linkedIn: "https://www.linkedin.com/in/kathea-mayol/",
    },
    {
      name: "Wendell Tamayo",
      role: "Developer",
      profileImage: getImage(team.Windz),
      linkedIn: "https://www.linkedin.com/in/wendell-mor-tamayo-41388b298/",
    },
  ]

  const blockchainDevs: memberType[] = [
    {
      name: "Christian Gantuangco",
      role: "Developer",
      profileImage: getImage(team.Tan),
      linkedIn: "https://www.linkedin.com/in/christan-gantuangco/",
    },
    {
      name: "Rico Quiblat",
      role: "Developer",
      profileImage: getImage(team.Rico),
      linkedIn: "https://www.linkedin.com/in/rico-miles-quiblat-34a6b7298/",
    },
    {
      name: "John Taboada",
      role: "Developer",
      profileImage: getImage(team.Chow),
      linkedIn: "https://www.linkedin.com/in/john-quinnvic-taboada-8801b9275/",
    },
  ];

  const memberCard = (
    index: number,
    profileImg: any,
    name: string,
    role: string,
    linkedIn?: string | null,
    X?: string | null
  ) => {
    return (
      <Card key={index} sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: '24px',
        backgroundColor: 'rgba(243, 243, 243, 0.7)',
        backdropFilter: 'blur(8px)',
        borderRadius: '12px'
      }}>
        <div className="w-[123px] max-h-[123px] rounded-full overflow-hidden grayscale">
          {profileImg ? (
            <GatsbyImage image={profileImg} alt={name} className="h-[123px]" />
          ) : (
            <div className="bg-gray-200 w-[123px] h-[123px] rounded-full flex items-center justify-center rounded-full">
              <span>No Image</span>
            </div>
          )}
        </div>
        <div className='grow'>
          <h3 className="text-[18px] font-bold text-center">{name}</h3>
          <p className="text-[14px] mt-2 text-center">{role}</p>
        </div>
        <div className="flex gap-2">
          {X &&
            <a href={X} target="_blank" rel="noopener noreferrer">
              <XIcon className='w-[24px] h-[24px] hover:text-gray-500 transition-colors duration-500 ease-in-out' />
            </a>
          }
          {linkedIn &&
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className='w-[24px] h-[24px] hover:text-gray-500 transition-colors duration-500 ease-in-out' />
            </a>
          }
        </div>
      </Card>
    )
  }

  return (
    <div className=''>
      <p className='text-[24px] sm:text-[30px] md mt-[30px] mb-[20px] text-[#4F37EA] max-md:text-center'>Executives</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {KeyTeam.map((member, index) => {
          const profileImg = member.profileImage;
          const name = member.name;
          const role = member.role;
          const linkedin = member.linkedIn ?? null;
          const X = member.X ?? null;

          return (
            memberCard(index, profileImg, name, role, linkedin, X)
          );
        })}
      </div>
      <p className='text-[24px] sm:text-[30px] md mt-[30px] mb-[20px] text-[#4F37EA] max-md:text-center'>Frontend Developers</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {frontendDevs.map((member, index) => {
          const profileImg = member.profileImage;
          const name = member.name;
          const role = member.role;
          const linkedin = member.linkedIn;
          const X = member.X ?? null;

          return (
            memberCard(index, profileImg, name, role, linkedin, X)
          );
        })}
      </div>
      <p className='text-[24px] sm:text-[30px] md mt-[30px] mb-[20px] text-[#4F37EA] max-md:text-center'>Backend Developers</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {backendDevs.map((member, index) => {
          const profileImg = member.profileImage;
          const name = member.name;
          const role = member.role;
          const linkedin = member.linkedIn;
          const X = member.X ?? null;

          return (
            memberCard(index, profileImg, name, role, linkedin, X)
          );
        })}
      </div>
      <p className='text-[24px] sm:text-[28px] md mt-[30px] mb-[20px] text-[#4F37EA] max-md:text-center'>Blockchain Developers</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {blockchainDevs.map((member, index) => {
          const profileImg = member.profileImage;
          const name = member.name;
          const role = member.role;
          const linkedin = member.linkedIn;
          const X = member.X ?? null;

          return (
            memberCard(index, profileImg, name, role, linkedin, X)
          );
        })}
      </div>
    </div>
  );
};

export default Team;
