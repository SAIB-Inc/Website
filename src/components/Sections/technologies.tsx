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

interface CategoryData {
  languages: TechnologyNode[];
  cloud: TechnologyNode[];
  blockchain: TechnologyNode[];
  os: TechnologyNode[];
  db: TechnologyNode[];
  container: TechnologyNode[];
  webApp: TechnologyNode[];
}

const Technologies: React.FC = () => {
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

  const TECH_CATEGORIES = {
    languages: ['C-Sharp', 'F-Sharp', 'Haskell', 'JavaScript', 'Python', 'Scala', 'TypeScript'],
    webApp: ['Dotnet', 'NodeJS'],
    os: ['Android', 'iOS', 'Linux', 'Windows', 'Mac'],
    cloud: ['Azure', 'Google Cloud', 'AWS'],
    db: ['MS SQL', 'MongoDB', 'PostgreSQL', 'MySQL'],
    blockchain: ['Cardano', 'Demeter'],
    container: ['Docker', 'Kubernetes']
  };

  const getDisplayName = (name: string): string => {
    return name === 'Dotnet' ? '.NET' : name;
  };

  const categorizeTech = (edges: TechnologyEdge[]): CategoryData => {
    const categories: CategoryData = {
      languages: [],
      cloud: [],
      blockchain: [],
      os: [],
      db: [],
      container: [],
      webApp: []
    };

    edges.forEach(({ node }) => {
      Object.entries(TECH_CATEGORIES).forEach(([category, techList]) => {
        if (techList.includes(node.name)) {
          categories[category as keyof CategoryData].push(node);
        }
      });
    });

    return categories;
  };

  const TechCard: React.FC<{ tech: TechnologyNode; index: number }> = React.memo(({ tech, index }) => (
    <div 
      key={`${tech.id}-${index}`} 
      className="text-[16px] min-w-[200px] h-[126px] flex flex-col items-center justify-center rounded-xl font-bold gap-[8px] border border-[#D4D4D4] !text-[18px] bg-[#F3F3F3]/70 backdrop-blur-md shadow-md"
    >
      <img 
        alt={`${tech.name} logo`} 
        src={tech.publicURL} 
        className="w-[48px] h-[48px]" 
      />
      <p>{getDisplayName(tech.name)}</p>
    </div>
  ));

  const ScrollingRow: React.FC<{ 
    technologies: TechnologyNode[]; 
    reverse?: boolean;
    className?: string;
  }> = React.memo(({ technologies, reverse = false, className = '' }) => (
    <div className={`flex mt-[30px] ${className}`}>
      <div className={`flex items-center space-x-16 ${reverse ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'}`}>
        {technologies.concat(technologies).map((tech, index) => (
          <TechCard 
            key={`${tech.id}-${index}`} 
            tech={tech} 
            index={index}
          />
        ))}
      </div>
    </div>
  ));

  const categorizedTechnologies = categorizeTech(technologies.allFile.edges);

  const rows = [
    [...categorizedTechnologies.languages, ...categorizedTechnologies.webApp, 
     ...categorizedTechnologies.blockchain, ...categorizedTechnologies.container],
    [...categorizedTechnologies.os, ...categorizedTechnologies.cloud, 
     ...categorizedTechnologies.webApp, ...categorizedTechnologies.db],
    [...categorizedTechnologies.blockchain, ...categorizedTechnologies.languages, 
     ...categorizedTechnologies.container, ...categorizedTechnologies.webApp],
    [...categorizedTechnologies.db, ...categorizedTechnologies.cloud, 
     ...categorizedTechnologies.blockchain, ...categorizedTechnologies.os]
  ];

  return (
    <div className="overflow-hidden sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)] pb-[150px]">
      {rows.map((row, index) => (
        <ScrollingRow
          key={`row-${index}`}
          technologies={row}
          reverse={index % 2 === 1}
          className={index > 0 ? 'mt-[30px]' : ''}
        />
      ))}
    </div>
  );
};

export default Technologies;