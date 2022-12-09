import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    //Navigation Start
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "MenuText" }} position="static">
        <Toolbar>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/post/add">
              Add Post
            </Button>
          </Box>
          <Typography variant="h6" sx={{ marginLeft: "auto" }}>
            Post app
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    //Navigation end
  );
}
