import React, { useState } from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";

import AlertTitle from "@mui/material/AlertTitle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Alert, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

const Post = ({ post, deletePost, updateOne }) => {
  const { body, title, id } = post;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  //delete functionality start
  const [delopen, setDelOpen] = useState(false);
  const [confirmDel, setconfirmDel] = useState(false);

  if (confirmDel) {
    deletePost(id);
  }
  const handlDelClickOpen = () => {
    setDelOpen(true);
  };
  const handlDelClickClose = () => {
    setDelOpen(false);
  };
  //delete functionality end
  //Update functionality start

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInputChange = (e) => {
    const getText = e.target.value;
    if (e.target.value.length > 0) {
      updateOne(id, getText, body);
    } else {
      return console.log("Value must be grater than 0");
    }
  };
  //update functionality end

  return (
    //Single Post start
    <Box>
      <Card sx={{ maxWidth: "full", height: "320px", padding: "5px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Id: {id}
          </Typography>
          <Typography onDoubleClick={handleOpen} variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2">{body}</Typography>
        </CardContent>
        <CardActions>
          <Button
            color="error"
            variant="contained"
            onClick={handlDelClickOpen}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          {/*pop up for the delete Option*/}
          <Dialog
            open={delopen}
            onClose={handlDelClickClose}
            aria-describedby="alert-dialog-description"
          >
            <Alert severity="warning">
              <AlertTitle>Do you want to delete it?</AlertTitle>
              If it is deleted one time — <strong>it can be never back </strong>
            </Alert>

            <DialogActions>
              <Button onClick={handlDelClickClose}>Disagree</Button>
              <Button
                onClick={() => {
                  setconfirmDel(true);
                  setDelOpen(false);
                }}
                autoFocus
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
      {/*pop for the updating title*/}
      <Modal
        open={open}
        onClose={handleClose}
        a
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Write a title here for the post no. {id}</Typography>
          <TextField
            style={{ marginTop: "5px", width: "400px" }}
            onBlur={(e) => handleInputChange(e)}
            defaultValue={title}
          ></TextField>
        </Box>
      </Modal>
    </Box>
    //Single Post end
  );
};

export default Post;
