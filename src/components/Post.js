import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { get } from "react-hook-form";

const Post = ({ post, setPosts, posts, updateOne }) => {
  const navigate = useNavigate();

  const { body, title, id, subject } = post;

  const showTitle = (id) => {
    console.log(id);
  };
  // const showLooseFoc = (id) => {
  //   console.log(id);
  // };
  // console.log(getEvent);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInputChange = (e) => {
    const getText = e.target.value;
    updateOne(id, getText, subject, body);
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Id: {id}
          </Typography>
          <Typography
            onDoubleClick={handleOpen}
            // onBlur={() => showLooseFoc(post.id)}
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="h5" component="div">
            {subject}
          </Typography>

          <Typography variant="body2">{body}</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            onBlur={(e) => handleInputChange(e)}
            defaultValue={title}
          ></TextField>
        </Box>
      </Modal>
    </Box>
  );
};

export default Post;
