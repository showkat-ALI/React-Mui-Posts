import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await fetch("http://127.0.0.1:3005/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={6}>
        {posts.map((post, idx) => (
          <Grid key={idx} item xs={4}>
            <Item>
              <Post post={post} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
