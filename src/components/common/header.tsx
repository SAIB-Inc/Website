import React, { useState } from "react";
import { Close, EastRounded, Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, Typography, useTheme } from "@mui/material";
import { Facebook, LinkedIn, X, Github } from "../../images/socials";
import Logo from "../../images/saib-logo.svg";
import SaibButton from "./saib-button";

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
  ];

  const menuItems = [
    {
      name: "Home",
      link: "home"
    },
    {
      name: "About",
      link: "about"
    },
    {
      name: "Services",
      link: "services"
    },
    {
      name: "Our Team",
      link: "our-team"
    },
    {
      name: "Our Work",
      link: "our-work"
    }
  ];

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (openState: boolean) => () => {
    setOpen(openState);
  }

  const scrollToNextSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const nextSection = document.getElementById(id);
    if (nextSection) {
      setTimeout(() => {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

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
          <a onClick={(e) => scrollToNextSection(e, "home")} className="cursor-pointer">
            <img src={Logo} alt="saib-logo" />
          </a>
        </div>
        <div className="max-lg:hidden">
          <ul className="space-x-[46px]">
            {menuItems.map((item) => (
              <Box
                component="li"
                key={item.name}
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
                      content: `"${item.name}"`,
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
                  onClick={(e) => scrollToNextSection(e, item.link)}
                >
                  {item.name}
                </Typography>

              </Box>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-7 max-lg:hidden">
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
              href="https://calendly.com/saibdev"
              target="_blank"
            >
              Let&apos;s Talk
              <EastRounded fontSize="small" />
            </SaibButton>
          </div>
        </div>
        <div className="lg:hidden">
          <IconButton onClick={toggleDrawer(true)}>
            <Menu sx={{ color: theme.palette.secondary.main }} />
          </IconButton>
          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
          >
            <div className="p-6">
              <div className="flex items-center justify-end">
                <IconButton onClick={toggleDrawer(false)} sx={{ justifyContent: "end" }}>
                  <Close color="secondary" sx={{ fontSize: 30 }} />
                </IconButton>
              </div>
              <List sx={{ width: 272 }} className="space-y-5">
                {menuItems.map((datum, index) => (
                  <ListItem key={index} sx={{ paddingX: 1 }}>
                    <ListItemButton disableRipple sx={{ padding: 0 }}>
                      <Typography
                        component="a"
                        variant="body2"
                      >
                        {datum.name}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <div className="p-2 mt-8">
                <div>
                  <Typography
                    component="p"
                    variant="body2"
                    color="secondary"
                  >
                    Let&apos;s keep in touch
                  </Typography>
                </div>
                <div className="space-x-4! mt-4">
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
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </Box>
  );
};

export default Header
