import React from "react";
import { EastRounded } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

import Logo from "../images/saib-logo.svg";
import Facebook from "../images/socials/facebook";
import LinkdIn from "../images/socials/linkedIn";
import X from "../images/socials/x";
import Github from "../images/socials/github";

const Header: React.FC = () => {

  const socials = [
    {
      label: "Facebook",
      icon: Facebook,
      link: "https://www.facebook.com/saibllc"
    },
    {
      label: "LinkedIn",
      icon: LinkdIn,
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

      }}
      className="!shadow-md !backdrop-blur-md">
      <div className="w-[1139px] mx-auto flex justify-between items-center">
        <img src={Logo} alt="saib-logo" />
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
        <div className="flex items-center gap-7">
          <div className="space-x-4">
            {socials.map((datum, index) => (
              <IconButton
                key={index}
                href={datum.link}
                target="_blank"
                className="!text-white !p-0 shadow-md"
              >
                {React.createElement(datum.icon, {
                  sx: { fontSize: 32 },
                })}
              </IconButton>
            ))}
          </div>
          <Button
            variant="outlined"
            sx={{
              borderColor: theme.palette.secondary.main,
              color: theme.palette.text.secondary,
              fontSize: "14px",
              width: 143,
              height: 39,
              padding: "7px 1.5rem",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "9999px"
            }}
            className="!border-1 !shadow-md"
          >
            <p className="font-bold capitalize">Let's Talk</p>
            <EastRounded className="!text-xl" />
          </Button>
        </div>
      </div>
    </Box>
  )
}

export default Header
