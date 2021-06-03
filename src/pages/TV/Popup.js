import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import EditIcon from '@material-ui/icons/Edit';
import firebase from '../../lib/firebase';
import {  useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({adminChoices}) {
  const [open, setOpen] = React.useState(false);
  const [adminChoice, setAdminChoice] = useState([]);
  const handleClickOpen = () => {setOpen(true)}
  const handleClose = () => {setOpen(false)}
// const Update={ data, dataArr}



    //Editing data from db.json================================
  
        // const handleUpdate = (key) => {
        //     firebase.firestore().collection('AdminChoices').doc(key).update({}).then(() => {
        //         console.log("Document successfully edited!");
                
        //     }).catch((error) => {
        //         console.error("Error removing document: ", error);
        //     });
        //         setAdminChoice(key)
            
        // }
        

  return ( 
    // onClick={() => {openPopup(true);
    //     handleUpdate(adminChoices.id) }}
    <div>
         <EditIcon  type="submit" onClick={handleClickOpen}/>
      
      
      {/* <Button variant="outlined" color="primary" >
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Validate your chages"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <input  type='text' defaultValue="" placeholder='title'/>
          <input  type='text' placeholder='vote_average'/>
          <input  type='text' placeholder='media_type'/>
          <input  type='text' placeholder='date'/>
          <input  type='text' placeholder='poster'/>
          
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Confirm
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

