import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Post = ({ post }) => {
  const { body, title, id, subject } = post;
  const deletePost = (id) => {
    if (id === post.id) {
      fetch(`http://127.0.0.1:3005/posts/${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Id: {id}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h5" component="div">
            {subject}
          </Typography>

          <Typography variant="body2">{body}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={deletePost(id)} size="small">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
