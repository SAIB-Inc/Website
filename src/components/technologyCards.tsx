import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface TechnologyNode {
  id: string;
  publicURL: string;
  name: string;
}

interface TechnologyData {
  allFile: {
    edges: {
      node: TechnologyNode;
    }[];
  };
}

const TechnologyCards: React.FC = () => {
  const technologies: TechnologyData = useStaticQuery(graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "technologies"}}) {
            edges {
                node {
                    id
                    publicURL
                    name
                }
            }
        }
    }`);

  const languages = ['C-Sharp', 'F-Sharp', 'Haskell', 'JavaScript', 'Python', 'Scala', 'TypeScript'];
  const cloud = ['Azure', 'Google Cloud', 'AWS'];
  const blockchain = ['Cardano', 'Demeter'];
  const os = ['Android', 'iOS', 'Linus', 'Windows', 'Mac'];
  const db = ['MS SQL', 'MongoDB', 'PostgreSQL', 'MySQL'];
  const cointainer = ['Docker', 'Kubernetes'];
  const webApp = ['Dotnet', 'NodeJS'];

  return (
    <div className='flex flex-wrap grid grid-cols-6 gap-[15px]'>
      {technologies.allFile.edges.map(({ node }) => (
          <div id={ node.id } className='text-[16px] w-full h-[126px] flex flex-col items-center justify-center rounded-xl font-bold gap-[8px] border border-[#D4D4D4] !text-[18px] bg-[#F3F3F3]/70 backdrop-blur-md shadow-md'>
            <img alt='' src={node.publicURL} className='w-[48px] h-[48px]'/>
            <p>{node.name}</p>
          </div>
      ))}
    </div>
  )
}

export default TechnologyCards