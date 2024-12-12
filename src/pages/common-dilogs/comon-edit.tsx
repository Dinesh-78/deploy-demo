// import React from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import CommonInputField from 'pages/common-components/common-input';
// import CommonSelectField from 'pages/common-components/common-select';

// interface CommonDialogProps {
//   open: boolean;
//   formData: any;
//   handleSubmit: (event: React.FormEvent) => void;
//   handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   handleSelectChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
//   handlePopupClose: () => void;
//   options: { teams: string[]; status: string[] };
// }

// const CommonEdit: React.FC<CommonDialogProps> = ({
//   open,
//   formData = {},  // Provide a default empty object if formData is not passed
//   handleSubmit,
//   handleInputChange,
//   handleSelectChange,
//   handlePopupClose,
// //   options,
// }) => {
//   return (
//     <Dialog open={open}>
//       <DialogTitle>Edit Teams</DialogTitle>
//       <Container>
//         <form onSubmit={handleSubmit} noValidate>
//           <DialogContent>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <CommonInputField
//                   inputProps={formData?.introducername || ''}  // Same as above
//                   onChange={handleInputChange}
//                 //   label="Introducer Name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <CommonSelectField
//                   inputProps={formData?.teams || ''}  // Same as above
//                   onSelectChange={() => handleSelectChange}
//                 //   label="Teams"
//                 //   options={options.teams}
//                 />
//               </Grid>
//             </Grid>
//           </DialogContent>
//           <DialogActions>
//             <Button variant="contained" onClick={handlePopupClose} color="error">
//               Cancel
//             </Button>
//             <Button variant="contained" color="primary" type="submit">
//               Update
//             </Button>
//           </DialogActions>
//         </form>
//       </Container>
//     </Dialog>
//   );
// };

// export default CommonEdit;


import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

interface CommonDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  onSave: () => void;
  content: React.ReactNode;
}

const CommonEdit: React.FC<CommonDialogProps> = ({ open, onClose, title, onSave, content }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button variant="contained" onClick={onSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonEdit;
