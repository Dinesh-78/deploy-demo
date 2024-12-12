// import React from 'react';
// import { Button, TextField } from '@mui/material';

// interface InputProps {
//   inputProps: {
//     label: string;
//     id: string;
//     name: string;
//     type?: string;
//     value: any;
//     error?: boolean;
//     helperText?: string;
//     mandatory?: boolean;
//   };
//   onChange: (name: string, value: any) => void;
// }

// const CommonInputFileField: React.FC<InputProps> = ({ inputProps, onChange }) => {
//   const { label, id, name, type = 'text', value, error, helperText, mandatory } = inputProps;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files;
//     if (file) {
//       // Update the value with the selected file
//       onChange(name, file[0]);
//     }
//   };

//   return (
//     <>
//       {type === 'file' ? (
//         <>
//           <Button
//             variant="outlined"
//             component="label"
//             fullWidth
//             style={{ marginBottom: '10px' , height:"50px", border:"1px solid #CCC", color:"#4a4948"}}
//           >
//             {label}
//             <input
//               id={id}
//               name={name}
//               type="file"
//               hidden
//               onChange={handleChange}
//               required={mandatory}
//             />
//           </Button>
//           {value && value.name && <p>Uploaded File: {value.name}</p>} {/* Display the uploaded file name */}
//           {error && <p style={{ color: 'red' }}>{helperText}</p>} {/* Show error message */}
//         </>
//       ) : (
//         <TextField
//           label={label}
//           id={id}
//           name={name}
//           type={type}
//           value={value}
//           onChange={handleChange}
//           fullWidth
//           required={mandatory}
//           error={error}
//           helperText={error ? helperText : ''}
//         />
//       )}
//     </>
//   );
// };

// export default CommonInputFileField;

// import React from 'react';
// import { Button, Box, Typography } from '@mui/material';

// interface InputProps {
//   inputProps: {
//     label: string;
//     id: string;
//     name: string;
//     type?: string;
//     value: any;
//     error?: boolean;
//     helperText?: string;
//     mandatory?: boolean;
//   };
//   onChange: (name: string, value: any) => void;
// }

// const CommonInputFileField: React.FC<InputProps> = ({ inputProps, onChange }) => {
//   const { label, id, name, type = 'file', value, error, helperText, mandatory } = inputProps;

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files && files.length > 0) {
//       onChange(name, files[0]); // Pass the selected file to the parent
//     }
//   };

//   const handleClear = () => {
//     onChange(name, null); // Clear the file
//   };

//   return (
//     <Box>
//       <Button
//         variant="outlined"
//         component="label"
//         fullWidth
//         style={{
//           marginBottom: '10px',
//           height: '50px',
//           border: '1px solid #CCC',
//           color: '#4a4948',
//           textTransform: 'none'
//         }}
//       >
//         <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
//           <Typography variant="body2" sx={{fontSize:"0.9rem"}}>{value?.name ? `File: ${value.name}` : label}</Typography>
//         </Box>
//         <input id={id} name={name} type="file" hidden onChange={handleFileChange} required={mandatory} />
//       </Button>

//       {value?.name && (
//         <Box mt={2} display="flex" alignItems="center">
//           <Typography variant="body2" style={{ marginRight: '10px' , fontSize:"0.8rem"}}>
//              {label} : <strong>{value.name}</strong>
//           </Typography>
//           <Button variant="contained" color="secondary" size="small" onClick={handleClear} style={{ textTransform: 'none' }}>
//             Clear
//           </Button>
//         </Box>
//       )}
//       {error && (
//         <Typography variant="body2" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
//           {helperText}
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default CommonInputFileField;

import React from 'react';
import { Button, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { MdOutlineClear } from 'react-icons/md';

interface InputProps {
  inputProps: {
    label: string;
    id: string;
    name: string;
    type?: string;
    value: any[];
    error?: boolean;
    helperText?: string;
    mandatory?: boolean;
  };
  onChange: (name: string, value: any[]) => void;
}

const CommonInputFileField: React.FC<InputProps> = ({ inputProps, onChange }) => {
  const { label, id, name, type = 'file', value = [], error, helperText, mandatory } = inputProps;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files); // Convert FileList to an array
      onChange(name, [...value, ...fileArray]); // Append new files to the existing list
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = value.filter((_, i) => i !== index); // Remove the selected file
    onChange(name, updatedFiles);
  };

  const handleClearAll = () => {
    onChange(name, []); // Clear all files
  };

  return (
    <Box>
      {/* Upload Button */}
      <Button
        variant="outlined"
        component="label"
        fullWidth
        style={{
          marginBottom: '10px',
          height: '50px',
          border: '1px solid #CCC',
          color: '#4a4948',
          textTransform: 'none'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
            {value.length > 0 ? 'Uploaded' : label}
          </Typography>
        </Box>
        <input
          id={id}
          name={name}
          type="file"
          hidden
          multiple // Enable multiple file selection
          onChange={handleFileChange}
          required={mandatory}
        />
      </Button>

      {/* List of Uploaded Files */}
      {value.length > 0 && (
        <List>
          {value.map((file, index) => (
            <ListItem key={index} disableGutters>
              <ListItemText primary={file.name} primaryTypographyProps={{ variant: 'body2', style: { fontSize: '0.8rem' } }} />

              <MdOutlineClear onClick={() => handleRemoveFile(index)} size={17} style={{ marginRight: "25px", cursor:"pointer" }} />
            </ListItem>
          ))}
        </List>
      )}

      {/* All Clear Button */}
      {value.length > 0 && (
        <Box textAlign="right" mt={1} marginRight={5}>
          <Button variant="contained" color="error" size="small" onClick={handleClearAll} style={{ textTransform: 'none' }}>
            Clear All
          </Button>
        </Box>
      )}

      {/* Error Message */}
      {error && (
        <Typography variant="body2" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default CommonInputFileField;
