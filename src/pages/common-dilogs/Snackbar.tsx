import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface CommonSnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
  severity: 'success' | 'error' | 'info' | 'warning'; // To customize alert severity
}

const CommonSnackbar: React.FC<CommonSnackbarProps> = ({ open, message, onClose, severity }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Show snackbar at the top-center
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CommonSnackbar;
