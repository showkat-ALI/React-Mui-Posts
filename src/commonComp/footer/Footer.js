import { BottomNavigation, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const Footer = () => {
  return (
    //footer Start
    <BottomNavigation
      sx={{
        width: "full",
        backgroundColor: "mediumaquamarine",
        border: "2px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "12px ",
      }}
    >
      <Box>
        <Typography style={{ color: "HighlightText", fontSize: "20px" }}>
          Made by Showkat ali
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <IconButton component="a" href="#as-link">
          <FacebookIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/showkat-ali/"
        >
          <LinkedInIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton component="a" href="https://github.com/showkat-ALI">
          <GitHubIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </BottomNavigation>
    //footer end
  );
};

export default Footer;
