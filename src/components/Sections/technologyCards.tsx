import * as React from 'react';
import { graphql, useStaticQuery } from "gatsby";

interface TechnologyNode {
  id: string;
  publicURL: string;
  name: string;
}

interface TechnologyEdge {
  node: TechnologyNode;
}

interface TechnologyData {
  allFile: {
    edges: TechnologyEdge[];
  };
}

const TechnologyCards: React.FC = () => {
  const technologies: TechnologyData = useStaticQuery(graphql`
    query {
        allFile(filter: { relativeDirectory: { eq: "technologies" } }) {
            edges {
                node {
                    id
                    publicURL
                    name
                }
            }
        }
    }
  `);

  const languages = ['C-Sharp', 'F-Sharp', 'Haskell', 'JavaScript', 'Python', 'Scala', 'TypeScript'];
  const webApp = ['Dotnet', 'NodeJS'];
  const os = ['Android', 'iOS', 'Linux', 'Windows', 'Mac'];
  const cloud = ['Azure', 'Google Cloud', 'AWS'];
  const db = ['MS SQL', 'MongoDB', 'PostgreSQL', 'MySQL'];
  const blockchain = ['Cardano', 'Demeter'];
  const container = ['Docker', 'Kubernetes'];

  const categorizeTech = (edges: TechnologyEdge[]) => {
    const categories = {
      languages: [] as TechnologyNode[],
      cloud: [] as TechnologyNode[],
      blockchain: [] as TechnologyNode[],
      os: [] as TechnologyNode[],
      db: [] as TechnologyNode[],
      container: [] as TechnologyNode[],
      webApp: [] as TechnologyNode[],
    };

    edges.forEach(({ node }) => {
      if (languages.includes(node.name)) {
        categories.languages.push(node);
      } else if (cloud.includes(node.name)) {
        categories.cloud.push(node);
      } else if (blockchain.includes(node.name)) {
        categories.blockchain.push(node);
      } else if (os.includes(node.name)) {
        categories.os.push(node);
      } else if (db.includes(node.name)) {
        categories.db.push(node);
      } else if (container.includes(node.name)) {
        categories.container.push(node);
      } else if (webApp.includes(node.name)) {
        categories.webApp.push(node);
      }
    });

    return categories;
  };

  const categorizedTechnologies = categorizeTech(technologies.allFile.edges);

  const row1 = [
    ...categorizedTechnologies.languages,
    ...categorizedTechnologies.webApp,
    ...categorizedTechnologies.blockchain,
    ...categorizedTechnologies.container
  ];

  const row2 = [
    ...categorizedTechnologies.os,
    ...categorizedTechnologies.cloud,
    ...categorizedTechnologies.webApp,
    ...categorizedTechnologies.db,
  ]

  const row3 = [
    ...categorizedTechnologies.blockchain,
    ...categorizedTechnologies.languages,
    ...categorizedTechnologies.container,
    ...categorizedTechnologies.webApp,
  ]

  const row4 = [
    ...categorizedTechnologies.db,
    ...categorizedTechnologies.cloud,
    ...categorizedTechnologies.blockchain,
    ...categorizedTechnologies.os,
  ]


  return (
    <div className="overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)] pb-[150px]">
      <div className='flex'>
        <div className='flex items-center space-x-16 animate-infinite-scroll'>
          {[...row1, ...row1].map((tech) => (
            <div key={tech.id} className='text-[16px] min-w-[200px] h-[126px] flex flex-col items-center justify-center rounded-xl font-bold gap-[8px] border border-[#D4D4D4] !text-[18px] bg-[#F3F3F3]/70 backdrop-blur-md shadow-md'>
              <img alt='' src={tech.publicURL} className='w-[48px] h-[48px]' />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex mt-[30px]'>
        <div className='flex items-center space-x-16 animate-infinite-scroll-reverse'>
          {[...row2, ...row2].map((tech) => (
            <div key={tech.id} className='text-[16px] min-w-[200px] h-[126px] flex flex-col items-center justify-center rounded-xl font-bold gap-[8px] border border-[#D4D4D4] !text-[18px] bg-[#F3F3F3]/70 backdrop-blur-md shadow-md'>
              <img alt='' src={tech.publicURL} className='w-[48px] h-[48px]' />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex mt-[30px]'>
        <div className='flex items-center space-x-16 animate-infinite-scroll'>
          {[...row3, ...row3].map((tech) => (
            <div key={tech.id} className='text-[16px] min-w-[200px] h-[126px] flex flex-col items-center justify-center rounded-xl font-bold gap-[8px] border border-[#D4D4D4] !text-[18px] bg-[#F3F3F3]/70 backdrop-blur-md shadow-md'>
              <img alt='' src={tech.publicURL} className='w-[48px] h-[48px]' />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex mt-[30px]'>
        <div className='flex items-center space-x-16 animate-infinite-scroll-reverse'>
          {[...row4, ...row4].map((tech) => (
            <div key={tech.id} className='text-[16px] min-w-[200px] h-[126px] flex flex-col items-center justify-center rounded-xl font-bold gap-[8px] border border-[#D4D4D4] !text-[18px] bg-[#F3F3F3]/70 backdrop-blur-md shadow-md'>
              <img alt='' src={tech.publicURL} className='w-[48px] h-[48px]' />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCards;
