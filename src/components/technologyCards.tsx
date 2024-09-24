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
  const container = ['Docker', 'Kubernetes'];
  const webApp = ['Dotnet', 'NodeJS'];

  return (
    <div className='flex justify-center'>
      <div className='w-[300px] text-center p-6 rounded-xl bg-[#F3F3F3] border border-1 border-[#D4D4D4] shadow-md'>
        <h2 className='!text-xl mb-4 font-bold'>Languages</h2>
        <div className='flex flex-col gap-2'>
          {technologies.allFile.edges.filter(({ node }) => languages.includes(node.name)).map(({ node }) => (
            <div id={ node.id } className='flex items-center gap-[15px] font-bold'>
              <img alt='' src={node.publicURL} className='w-[40px] h-[40px]'/>
              <p>{node.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechnologyCards