import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Alert, Snackbar } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ modalOpen, handleClose, category, setCategory, render, setRender, isNew }) {
  const createCat = async () => {
    try {
      const result = await axios.post(`http://localhost:8000/categories`, category);
      console.log(result.data.category);
      setRender(!render);
    } catch (err) {
      console.log('ERR', err);
    }
    handleClose();
  };

  const updateCat = async () => {
    console.log('category._id', category._id);
    try {
      const result = await axios.put(`http://localhost:8000/categories/${category._id}`, category);
      console.log(result.data.category);
      setRender(!render);
    } catch (err) {
      console.log('ERR', err);
    }
    handleClose();
  };
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {isNew ? (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update Category
            </Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Нэр"
                name="title"
                variant="standard"
                defaultValue={category.title}
                onChange={(e) => {
                  setCategory({ ...category, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Тайлбар"
                name="description"
                variant="standard"
                defaultValue={category.description}
                onChange={(e) => {
                  setCategory({ ...category, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Зураг"
                name="categoryImg"
                variant="standard"
                defaultValue={category.categoryImg}
                onChange={(e) => {
                  setCategory({ ...category, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Үнэлгээ"
                name="categoryRating"
                variant="standard"
                defaultValue={category.categoryRating}
                onChange={(e) => {
                  setCategory({ ...category, [e.target.name]: e.target.value });
                }}
              />
            </Box>
            <Button onClick={updateCat}>Save</Button>
          </Box>
        ) : (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              New Category
            </Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Нэр"
                name="title"
                variant="standard"
                onChange={(e) => {
                  setCategory({ ...category, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Тайлбар"
                name="description"
                variant="standard"
                onChange={(e) => {
                  setCategory({ ...category, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Зураг"
                type="link"
                name="categoryImg"
                variant="standard"
                onChange={(e) => {
                  setCategory({ ...category, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Үнэлгээ"
                name="categoryRating"
                variant="standard"
                onChange={(e) => {
                  setCategory({ ...category, [e.target.name]: e.target.value });
                }}
              />
            </Box>
            <Button onClick={createCat}>Save</Button>
          </Box>
        )}
      </Modal>
    </div>
  );
}
