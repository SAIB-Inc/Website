import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Card } from '@mui/material';
import Levvy from '../../images/partners/Levvy';
import { Language, X, GitHub } from '@mui/icons-material';

const Partners: React.FC = () => {

  const partnerImages = useStaticQuery(graphql`
      query {
        Demeter: file(relativePath: {eq: "partners/demeter.svg"}) {
          publicURL
        }
        TxPipe: file(relativePath: {eq: "partners/txpipe.svg"}) {
          publicURL
        }
        UtxoRPC: file(relativePath: {eq: "partners/utxo-rpc.svg"}) {
          publicURL
        }
        Coinecta: file(relativePath: {eq: "partners/coinecta.svg"}) {
          publicURL   
        }
        Crashr: file(relativePath: {eq: "partners/crashr.svg"}) {
          publicURL
        }
      }
  `);

  const partnersData = [
    {
      name: "Demeter",
      title: "Build and deploy dApps on a single platform with Demeter - effortlessly scale to support millions of users.",
      image: partnerImages.Demeter.publicURL,
      className: 'w-[200px]',
      backgroundGradient: 'bg-gradient-to-tl from-gray-800 to-[#c23461]',
      webLinks: [
        {
          link: "https://demeter.run",
          linkLogo: Language,

        },
        {
          link: "https://x.com/DemeterRun",
          linkLogo: X
        }
      ]
    },
    {
      name: "TxPipe",
      title: "Open-source software for a decentralized world.",
      image: partnerImages.TxPipe.publicURL,
      className: 'w-[200px]',
      backgroundGradient: 'bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500',
      webLinks: [
        {
          link: "https://txpipe.io",
          linkLogo: Language,

        },
        {
          link: "https://github.com/txpipe",
          linkLogo: GitHub
        },
        {
          link: "https://x.com/txpipe_tools",
          linkLogo: X
        }
      ]
    },
    {
      name: "UTxORPC",
      title: "Interact with UTxO-based blockchains using a shared specification with focus on developer experience and performance.",
      image: partnerImages.UtxoRPC.publicURL,
      className: 'w-[230px]',
      backgroundGradient: 'bg-gradient-to-r from-[#0d4d65] to-[#146b54]',
      webLinks: [
        {
          link: "https://utxorpc.org",
          linkLogo: Language,

        },
        {
          link: "https://github.com/utxorpc",
          linkLogo: GitHub,

        }
      ]
    },
    {
      name: "Coinecta",
      title: "A next-generation Cardano-based token launch platform, striving to be the platform of choice for innovative blockchain projects.",
      image: partnerImages.Coinecta.publicURL,
      className: 'w-[200px]',
      backgroundGradient: 'bg-gradient-to-tl from-[#F2994A] to-[#FDE7C6] to-70%',
      webLinks: [
        {
          link: "https://coinecta.fi",
          linkLogo: Language,

        },
        {
          link: "https://github.com/coinecta",
          linkLogo: GitHub,

        },
        {
          link: "https://x.com/CoinectaFinance",
          linkLogo: X
        }
      ]
    },
    {
      name: "Crashr",
      title: "Crashr bridges traders and users on one unified platform. We call it web3 commerce.",
      image: partnerImages.Crashr.publicURL,
      className: 'w-[200px]',
      backgroundGradient: 'bg-gradient-to-tr from-[#0A0E2E] from-1% to-[#2E3A82]',
      webLinks: [
        {
          link: "https://www.crashr.io",
          linkLogo: Language,

        },
        {
          link: "https://x.com/crashr_io",
          linkLogo: X
        }
      ]
    },
    {
      name: "Levvy",
      title: "Effortless lending, instant liquidity. Maximize liquidity & earnings lending and borrowing tokens or NFTs.",
      className: 'w-[200px]',
      backgroundGradient: 'bg-gradient-to-br from-orange-100 via-lime-200 to-emerald-300',
      webLinks: [
        {
          link: "https://levvy.fi",
          linkLogo: Language,

        },
        {
          link: "https://x.com/levvyfinance",
          linkLogo: X
        }
      ]
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[45px] md:mt-[75px] xl:mt-16">
      {partnersData.map((datum, index) => {
        return (
          <Card 
            key={index}
            className='backdrop-blur-md shadow-xl'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '100%',
              bgcolor: 'rgba(243, 243, 243, 0.85)',
              borderRadius: '12px',
              height: '380px',
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={datum.webLinks[0].link}
              className={`min-h-[100px] h-[150px] flex items-center justify-center w-full py-[48px] px-[24px] rounded-t-xl ${datum.backgroundGradient}`}
            >
              {datum.name === 'Levvy' ?
                <Levvy />
                : <img src={datum.image} className={datum.className} />
              }
            </a>
            <div className='h-[150px] px-[24px]'>
              <h3 className="text-[24px] font-bold text-center">{datum.name}</h3>
              <p className="text-[12px] sm:text-[14px] mt-2 text-center">{datum.title}</p>
            </div>
            <div className='flex px-6 py-4 gap-3'>
              {datum.webLinks.map((links, index) => {
                return (
                  <a
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={links.link}
                  >
                    {React.createElement(links.linkLogo, { 
                      className: '!text-[22px] hover:text-gray-500 transition-colors duration-500 ease-in-out' 
                    })}
                  </a>
                )
              })}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Partners;