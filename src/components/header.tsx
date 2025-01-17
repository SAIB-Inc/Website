import { EastRounded } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Facebook from "../images/socials/facebook.svg"
import LinkdIn from "../images/socials/linkedIn.svg"
import X from "../images/socials/x.svg"
import Github from "../images/socials/github.svg"

const Header: React.FC = () => {

  const socials = [
    {
      label: "Facebook",
      icon: Facebook,
      link: ""
    },
    {
      label: "LinkedIn",
      icon: LinkdIn,
      link: ""
    },
    {
      label: "X",
      icon: X,
      link: ""
    },
    {
      label: "Github",
      icon: Github,
      link: ""
    }
  ]

  return (
    <header className='bg-[#F9F7FFE5] p-6 flex shadow-md fixed w-full backdrop-blur-md'>
      <div className='w-[1139px] mx-auto flex justify-between items-center'>
        <div>
          <StaticImage src='../images/saib-logo.svg' alt='saib-logo' placeholder='none' quality={100} />
        </div>
        <ul className='flex gap-[48px] text-[15px] text-  '>
          <li>
            <a className='hover:text-[#6F03E0] cursor-pointer'>
              Home
            </a>
          </li>
          <li>
            <a className='hover:text-[#6F03E0] cursor-pointer'>
              About
            </a>
          </li>
          <li>
            <a className='hover:text-[#6F03E0] cursor-pointer'>
              Services
            </a>
          </li>
          <li>
            <a className='hover:text-[#6F03E0] cursor-pointer'>
              Our Work
            </a>
          </li>
          <li>
            <a className='hover:text-[#6F03E0] cursor-pointer'>
              Our Team
            </a>
          </li>
        </ul>
        <div className='flex items-center gap-4'>
          {socials.map((datum, index) => (
            <IconButton
              key={index}
              href={datum.link}
              target='_blank'
              className='!text-white !p-0'
            >
              <img src={datum.icon} alt={datum.label || 'Icon'}/>
            </IconButton>
          ))}
          <Button
            variant='outlined'
            className='!rounded-full !border-2'
          >
            <p className='font-bold capitalize'>Let's Talk</p>
            <EastRounded />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
