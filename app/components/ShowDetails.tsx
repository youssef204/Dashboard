"use client";
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IServer } from '@/types/server';
import Stack from '@mui/material/Stack';

interface serverDetailsProps{
    server: IServer
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ShowDetails: React.FC<serverDetailsProps>  = ({server}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className='justify-end ml-auto' onClick={handleOpen}>Show Server Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <h1 className='font-bold text-red-500 items-center justify-center'> {server.name.toUpperCase()} </h1> 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Stack spacing={2}>
            <h2> IP address: {server.ip}</h2>
            <h2> Current State: {server.states.charAt(server.states.length-1) === '1' ? "up" : "down"}</h2>
            <h2> Response Time: {server.response} seconds</h2>
          </Stack>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ShowDetails;