import { Box, Typography, Button, Modal  } from '@mui/material';
import * as React from 'react';
const summaryModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function SummaryModal({content}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color='secondary' sx={{fontSize: "12px", margin: "2px", padding: "5px"}}>Summarise This</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
      >
        <Box sx={summaryModalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Short Summary
          </Typography>
          <Typography id="modal-modal-description" sx={{padding: "10px", maxHeight: "250px", overflowX: "hidden", overflowY:"scroll", margin: "10px", mt: 2}}>
            {content}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}


function ExplainModal({content}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color='success' sx={{fontSize: "12px", margin: "2px", padding: "5px"}}>Explain This</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={summaryModalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Simple Explaination
          </Typography>
          <Typography id="modal-modal-description" sx={{padding: "10px", maxHeight: "250px", overflowX: "hidden", overflowY:"scroll", margin: "10px", mt: 2}}>
            {content}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

const ViewBlock = ({ blockData, num }) => {
    return ( 
        <Box sx={{ padding: "20px", width: "100%", margin:"20px", border: "1px solid white", borderRadius: "10px" }}>
            <Typography variant='h5'>Example {num+1}</Typography><br></br>
            <audio controls style={{width: "100%"}}>
                <source src={blockData.fileUrl} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <Box sx={{padding: "10px", maxHeight: "300px", overflowX: "hidden", overflowY:"scroll", margin: "10px"}}>
                <Typography variant='h5' sx={{textAlign: "center", color: "cyan"}}>Full Transcript</Typography><br></br>
                <Typography variant='body1' sx={{textAlign: "justify"}}>{blockData.transcript}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent: "space-around"}}>
                <SummaryModal content={blockData.shortSummary} />
                <ExplainModal content={blockData.explaination} />
            </Box>
        </Box>
     );
}

export default ViewBlock