


import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialogPassword() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>


            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Change your password
  </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change password</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Change you passward
      </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="currentPassword"
                        label="Current Password"
                        type="password"

                    />
                    <br></br>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="newPassword"
                        label="New Password"
                        type="password"

                    />

                    <br></br>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="verifyPassword"
                        label="Verify Password"
                        type="password"

                    />
                    <br></br>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
      </Button>
                    <Button onClick={handleClose} color="primary">
                        submit
      </Button>
                </DialogActions>
            </Dialog>
        </div>






    );
}





























