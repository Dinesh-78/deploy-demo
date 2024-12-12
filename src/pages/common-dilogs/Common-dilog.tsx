import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

interface CommonDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  messagee: string;
  confirmText: string;
  cancelText: string;
}

const CommonDialog: React.FC<CommonDialogProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
  messagee,
  confirmText,
  cancelText
}) => {
  return (
    <Dialog 
      open={open} 
      sx={{
        '& .MuiDialog-container': {
          alignItems: 'flex-start', 
        },
        '& .MuiDialog-paper': {
          top: '0%',
          width: 'auto',
        }
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{display:"flex", flexDirection: "row", justifyContent: "space-between", alignItems:"center"}}>
        <Typography variant="body2">{message}</Typography>
        <Typography variant="body2">{messagee}</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose} color="error">
          {cancelText}
        </Button>
        <Button variant="contained" onClick={onConfirm} color="success">
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
