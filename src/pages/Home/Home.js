import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Navigation from "../../commonComp/navigation/Navigation";
import Footer from "../../commonComp/footer/Footer";
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
  const deletePost = async (id) => {
    await fetch(`http://127.0.0.1:3005/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => fetchData())

      .then((err) => console.log(err));
  };
  const updateOne = async (id, getText, subject, body) => {
    await fetch(`http://127.0.0.1:3005/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: getText,
        subject: subject,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => fetchData())
      .then((err) => console.log(err));
  };

  return (
    <>
      <Navigation />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6}>
          {posts.map((post, idx) => (
            <Grid key={idx} item xs={4}>
              <Item>
                <Post
                  updateOne={updateOne}
                  posts={posts}
                  setPosts={setPosts}
                  post={post}
                />
                <Button onClick={() => deletePost(post.id)} size="small">
                  Delete
                </Button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
