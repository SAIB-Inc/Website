import React from "react";
import { EastRounded } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Facebook, LinkedIn, X, Github } from "../images/socials"
import Logo from "../images/saib-logo.svg";
import SaibButton from "./common/saib-button";

const Header: React.FC = () => {

  const socials = [
    {
      label: "Facebook",
      icon: Facebook,
      link: "https://www.facebook.com/saibllc"
    },
    {
      label: "LinkedIn",
      icon: LinkedIn,
      link: "https://www.linkedin.com/company/saibllc/"
    },
    {
      label: "X",
      icon: X,
      link: "https://x.com/saibdev"
    },
    {
      label: "Github",
      icon: Github,
      link: "https://github.com/SAIB-Inc"
    }
  ]

  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: theme.palette.background.default,
        position: "fixed",
        display: "flex",
        width: "100%",
        zIndex: 50,
        padding: 3,
        boxShadow: theme.shadows[1]
      }}
      className="backdrop-blur-md!">
      <div className="container max-w-(--breakpoint-xl) mx-auto flex justify-between items-center">
        <div>
          <img src={Logo} alt="saib-logo" />
        </div>
        <div>
          <ul className="space-x-[46px]">
            {["Home", "About", "Services", "Our Work", "Our Team"].map((item) => (
              <Box
                component="li"
                key={item}
                sx={{
                  display: "inline-block",
                  cursor: "pointer",
                  color: theme.palette.text.primary,
                  "& a": {
                    display: "inline-block",
                    textAlign: "center",
                    position: "relative",
                    transition: "color 0.15s ease, font-weight 0.15s ease",
                    "&:before": {
                      content: `"${item}"`,
                      fontWeight: "bold",
                      height: 0,
                      overflow: "hidden",
                      visibility: "hidden",
                      display: "block",
                    },
                    "&:hover": {
                      color: theme.palette.text.secondary,
                      fontWeight: "bold",
                    },
                  },
                }}
              >
                <Typography
                  component="a"
                  variant="body2"
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-7">
          <div className="space-x-4!">
            {socials.map((datum, index) => (
              <IconButton
                key={index}
                href={datum.link}
                aria-label={datum.label}
                target="_blank"
                sx={{
                  border: `1px solid ${theme.palette.button.default}`,
                  height: 32,
                  width: 32,
                  boxShadow: theme.shadows[0],
                  '&:hover': {
                    borderColor: theme.palette.button.hover 
                  }
                }}
              >
                {React.createElement(datum.icon)}
              </IconButton>
            ))}
          </div>
          <div>
            <SaibButton
              variant="outlined"
              size="small"
              className="gap-1.5"
            >
              Let's Talk
              <EastRounded fontSize="small" />
            </SaibButton>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Header
