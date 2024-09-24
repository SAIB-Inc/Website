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
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[45px] md:mt-[75px] xl:mt-16">
      {teamMembers.map((member, index) => {
        const profileImg = member.profileImg;

        return (
          <div key={index} className="flex flex-col items-center gap-3 p-[48px] w-full bg-[#151515] border border-[#232323] rounded-xl">
            <div className="w-[123px] rounded-full overflow-hidden">
              {profileImg ? (
                <GatsbyImage image={profileImg} alt={member.name} />
              ) : (
                <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded-full">
                  <span>No Image</span>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-[24px] font-bold text-center">{member.name}</h3>
              <p className="text-[14px] mt-2 text-center">{member.role}</p>
            </div>
            <div className="flex gap-2">
              <a href="" target="_blank" rel="noopener noreferrer">
                <XIcon className='w-[32px] h-[32px]'/>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className='w-[32px] h-[32px]'/>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team;