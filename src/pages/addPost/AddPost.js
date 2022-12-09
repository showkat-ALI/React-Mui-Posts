import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from "../../commonComp/footer/Footer";
import Navigation from "../../commonComp/navigation/Navigation";
import { Container } from "@mui/system";
const AddPost = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://127.0.0.1:3005/posts", {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        body: data.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    navigate("/");
    // When data is added then move user to the home page
  };

  return (
    <>
      <Navigation></Navigation>
      <Container
        style={{
          minHeight: "100vh",
        }}
      >
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Typography variant="subtitle1">Title</Typography>
              <br />
              <TextField
                id="title"
                required
                label="Write a title"
                style={{
                  minWidth: "400px",
                }}
                variant="filled"
                {...register("title", { required: true })}
                type={"text"}
              />
            </Box>
            <Box style={{ marginTop: "40px" }}>
              <Typography variant="subtitle1">Body</Typography>
              <br />

              <TextField
                style={{ minWidth: "400px" }}
                id="body"
                required
                label="Write a description"
                variant="filled"
                {...register("body", { required: true })}
                type={"text"}
              />
            </Box>
            <Button
              style={{ marginTop: "30px" }}
              type="submit"
              variant="contained"
              color="success"
              startIcon={<FileUploadIcon />}
            >
              Add post
            </Button>
          </form>
          {errors.exampleRequired && <span>This field is required</span>}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AddPost;
