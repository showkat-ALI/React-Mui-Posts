import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Navigation from "../../commonComp/navigation/Navigation";
import Footer from "../../commonComp/footer/Footer";
import Pagination from "@mui/material/Pagination";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);
  //all data according to pagination option
  const fetchData = async () => {
    await fetch(`http://127.0.0.1:3005/posts?_page=${page}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  //deleting a post function
  const deletePost = async (id) => {
    await fetch(`http://127.0.0.1:3005/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => fetchData())

      .then((err) => console.log(err));
  };
  //Updating a post function
  const updateOne = async (id, getText, body) => {
    await fetch(`http://127.0.0.1:3005/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: getText,
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
      <Container>
        {/* Showing all post */}

        <Grid style={{ minHeight: "100vh" }} container spacing={6}>
          {posts.map((post, idx) => (
            <Grid key={idx} item xs={4}>
              <Post updateOne={updateOne} deletePost={deletePost} post={post} />
            </Grid>
          ))}
        </Grid>
        {/*Pagination start*/}

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "30px",
            padding: "20px",
            backgroundColor: "cornsilk",
            color: "white",
          }}
        >
          <Pagination
            style={{
              color: "white",
            }}
            onChange={(e, value) => setPage(value)}
            page={page}
            count={11}
            size="large"
            color="secondary"
          />
        </Box>
        {/*pagination end */}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
