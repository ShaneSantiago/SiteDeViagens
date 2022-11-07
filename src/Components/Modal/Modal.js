import { Modal, Box, Button, Typography } from "@mui/material"
import React, { useState } from "react"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 6,
  };

const ModalComponent = (props) => {
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);


    return(
        <div>
            <Button onClick={handleOpen}>Candidatos Aprovados</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        
        <Box sx={style}>
         <Typography>Candidatos Aprovados</Typography>
          {props.details.approved && props.details.approved.length > 0 ? props.details.approved.map((item) => {
            return <div>
                <p>{item.name}</p>
            </div>
          }) : <p>Nenhum Candidato aprovado</p>}

        </Box>
      </Modal>
        </div>
    )
}
export default ModalComponent