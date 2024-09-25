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
  const cloud = ['Azure', 'Google Cloud', 'AWS'];
  const blockchain = ['Cardano', 'Demeter'];
  const os = ['Android', 'iOS', 'Linux', 'Windows', 'Mac'];
  const db = ['MS SQL', 'MongoDB', 'PostgreSQL', 'MySQL'];
  const container = ['Docker', 'Kubernetes'];
  const webApp = ['Dotnet', 'NodeJS'];

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

  return (
    <div className="overflow-hidden flex">
      <div className='flex items-center gap-10 '>
        {[...categorizedTechnologies.languages, ...categorizedTechnologies.languages].map((tech) => (
          <div key={tech.id} className='text-[16px] min-w-[150px] h-[126px] flex flex-col items-center justify-center rounded-xl font-bold gap-[8px] border border-[#D4D4D4] !text-[18px] bg-[#F3F3F3]/70 backdrop-blur-md shadow-md'>
            <img alt='' src={tech.publicURL} className='w-[48px] h-[48px]'/>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyCards;
