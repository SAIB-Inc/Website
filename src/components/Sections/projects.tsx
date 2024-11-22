import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Card } from '@mui/material';
import { OpenInNew } from '@mui/icons-material'

const Projects: React.FC = () => {
  const partnerImages = useStaticQuery(graphql`
        query {
          Aegis: file(relativePath: {eq: "partners/aegis.svg"}) {
            publicURL
          }
          Argus: file(relativePath: {eq: "partners/argus.svg"}) {
            publicURL
          }
        }
    `);

  const projects = [
    {
      name: "Aegis",
      title: "Automated stake pool manager. Effortlessly collect rewards while supporting pools you care for with hassle-free pool selection.",
      image: partnerImages.Aegis.publicURL,
      webLink: '',
      className: 'w-[200px]',
      backgroundGradient: 'bg-[#000F33]',
      webLinks: [
        {
          linkLogo: OpenInNew,
          link: 'https://cardano.ideascale.com/c/cardano/idea/128406'
        }
      ]
    },
    {
      name: "Argus",
      title: "A .NET library that simplifies interactions with the Cardano blockchain by providing an efficient indexing framework.",
      image: partnerImages.Argus.publicURL,
      webLink: '',
      className: 'w-[200px]',
      backgroundGradient: 'bg-gradient-to-br from-[#160033] to-[#4B00AD]',
      webLinks: [
        {
          linkLogo: OpenInNew,
          link: 'https://projectcatalyst.io/funds/12/f12-cardano-open-developers/cardanosync-or-a-netc-indexing-framework-for-cardano'
        }
      ]
    }
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[45px] md:mt-[75px] xl:mt-16">
      {projects.map((datum, index) => {
        return (
          <Card
            key={index}
            className='backdrop-blur-md'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '100%',
              bgcolor: 'rgba(243, 243, 243, 0.85)',
              backdropFilter: 'blur(8px)',
              borderRadius: '12px',
              height: '380px',
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={datum.webLinks[0].link}
              className={`min-h-[100px] h-[150px] flex items-center justify-center w-full py-[48px] px-[24px] rounded-t-xl ${datum.backgroundGradient}`}>
              <img src={datum.image} className={datum.className} />
            </a>
            <div className='h-[150px] px-[24px] '>
              <h3 className="text-[24px] font-bold text-center">{datum.name}</h3>
              <p className="text-[12px] sm:text-[14px] mt-2 text-center">{datum.title}</p>
            </div>
            {datum.webLinks.map((links, index) => {
              return (
                <div
                  key={index}
                  className='flex px-6 py-4 gap-3'
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={links.link}
                  >
                    {React.createElement(links.linkLogo, { className: '!text-[22px] hover:text-gray-500 transition-colors duration-500 ease-in-out' })}
                  </a>
                </div>
              )
            })}
          </Card>
        );
      })}
    </div>
  );
};

export default Projects