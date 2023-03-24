import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Iconify from '../iconify';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Iconify icon="eva:plus-fill" onclick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            new category
          </Typography>
          <TextField id="title" label="Нэр" variant="standard" />
          <TextField id="description" label="Тайлбар" variant="standard" />
          <TextField id="categoryImage" label="Зураг" variant="standard" />
          <TextField id="categoryRating" label="Үнэлгээ" variant="standard" />
        </Box>
        <Button>Send</Button>
      </Modal>
    </Box>
  );
}
