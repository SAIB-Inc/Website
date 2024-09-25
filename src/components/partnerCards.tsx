import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import XIcon from '@mui/icons-material/X';

const PartnerCards: React.FC = () => {

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
          Levvy: file(relativePath: {eq: "partners/levvy.svg"}) {
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
      webLink: "https://demeter.run",
      xLink: "https://x.com/DemeterRun"
    },
    {
      name: "TxPipe",
      title: "Open-source software for a decentralized world.",
      image: partnerImages.TxPipe.publicURL,
      className: 'w-[70px]',
      webLink: "https://txpipe.io",
      xLink: "https://x.com/txpipe_tools"
    },
    {
      name: "UTxORPC",
      title: "Interact with UTxO-based blockchains using a shared specification with focus on developer experience and performance.",
      image: partnerImages.UtxoRPC.publicURL,
      className: 'w-[230px]',
      webLink: "https://utxorpc.org",
      xLink: "https://x.com/txpipe_tools"
    },
    {
      name: "Coinecta",
      title: "Coinecta is a next-generation Cardano-based token launch platform, striving to be the platform of choice for innovative blockchain projects.",
      image: partnerImages.Coinecta.publicURL,
      className: 'w-[80px]',
      webLink: "https://coinecta.fi",
      xLink: "https://x.com/CoinectaFinance"
    },
    {
      name: "Crashr",
      title: "Crashr bridges traders and users on one unified platform. We call it web3 commerce.",
      image: partnerImages.Crashr.publicURL,
      className: 'w-[200px]',
      webLink: "https://beta.crashr.io",
      xLink: "https://x.com/crashr_io"
    },
    {
      name: "Levvy",
      title: "Effortless lending, instant liquidity. Maximize liquidity & earnings lending and borrowing tokens or NFTs.",
      image: partnerImages.Levvy.publicURL,
      className: 'w-[200px]',
      webLink: "https://levvy.fi",
      xLink: "https://x.com/levvyfinance"
    }
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[45px] md:mt-[75px] xl:mt-16">
      {partnersData.map((datum, index) => {
        return (
          <div key={index} className="flex flex-col items-center gap-[20px] py-[48px] px-[24px] w-full bg-[#151515] border border-[#232323] rounded-xl h-[420px] bg-white-tint backdrop-blur-md">
            <div className='min-h-[100px] flex items-center justify-center'>
              <a href={datum.webLink} target="_blank" rel="noopener noreferrer">
                <img src={datum.image} className={datum.className} />
              </a>
            </div>
            <div className='h-[150px]'>
              <h3 className="text-[24px] font-bold text-center">{datum.name}</h3>
              <p className="text-[12px] sm:text-[14px] mt-2 text-center">{datum.title}</p>
            </div>
            <div className="">
              <a href={datum.xLink} target="_blank" rel="noopener noreferrer">
                <XIcon className='w-[32px] h-[32px]' />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PartnerCards;
