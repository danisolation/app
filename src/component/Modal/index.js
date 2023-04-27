import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

function ConfirmationDialog(props) {
    const { open, onClose, onConfirm } = props;

    const handleClose = () => {
        onClose(false);
    };

    const handleConfirm = () => {
        onConfirm();
        onClose(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>Cảnh báo có người</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirm} color="secondary" autoFocus>
                        Xác nhận
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default ConfirmationDialog;
