import React, { useState } from 'react';
import CommonSelectField from 'pages/common-components/common-select';
import CommonInputFileField from 'pages/common-components/common-file';
import { Button, Grid, Paper, Typography } from '@mui/material';
import _ from 'lodash';
import CommonDialog from 'pages/common-dilogs/Common-dilog'; // Import CommonDialog
import CommonSnackbar from 'pages/common-dilogs/Snackbar'; // Import CommonSnackbar

const AddCarBrand: React.FC = () => {
  interface FormField {
    label: any;
    id: any;
    name: any;
    type?: any;
    placeholder?: any;
    value: any;
    error?: boolean;
    helperText?: any;
    mandatory?: boolean;
    options: { id: any; label: any }[];
    isMulti?: boolean;
  }

  interface FormData {
    [key: string]: FormField;
  }

  const formFields: FormData = {
    selectstatus: {
      label: 'Select Car ',
      id: 'selectstatus',
      name: 'selectstatus',
      type: 'select',
      options: [
        { id: 1, label: 'BMW' },
        { id: 2, label: 'AUID' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    file: {
      label: 'Upload Gallery',
      id: 'file',
      name: 'file',
      type: 'file',
      value: [],
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    }
  };

  const [formData, setFormData] = useState<FormData>(formFields);
  const [openDialog, setOpenDialog] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');
  type FormDataKeys = keyof typeof formData;

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(formData);
    let isValid = true;

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];

        if (field.mandatory) {
          if (key === 'selectstatus' && (!field.value || field.value.id === null)) {
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} is required`;
            isValid = false;
          } else if (key === 'file' && field.value.length === 0) {
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} is required`;
            isValid = false;
          }
           else {
            newFormData[key].helperText = '';
          }
        }
      }
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };
  const handleFileChange = (name: string, files: File[] | null) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = files ? [...files] : []; // Set to an empty array when clearing
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setOpenDialog(true);
    }
  };

  const handleDialogClose = (confirm: boolean) => {
    if (confirm) {
      const sampleObject = {
        selectstatus: formData.selectstatus.value,
        file: formData.file.value ? formData.file.value.name : ''
      };
      console.log('Form Submitted:', sampleObject);

      setShowSnackbar(true);
      setSnackbarSeverity('success');

      setFormData(formFields);
    }

    setOpenDialog(false);
  };

  return (
    <Paper sx={{ padding: '40px 30px', borderRadius: '20px' }}>
      <form onSubmit={handleSubmit} noValidate>
      <Typography marginBottom={2} fontSize={17}>Add Gallery</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputFileField inputProps={formData.file} onChange={handleFileChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonSelectField inputProps={formData.selectstatus} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} textAlign={'end'}>
            <Button type="submit" variant="contained" color="primary">
              Add Gallery
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Confirmation Dialog */}
      <CommonDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={() => handleDialogClose(true)}
        title="Are you sure you want to add this banner?"
        message={`Please confirm the title: ${formData.file.value ? formData.file.value : ''}`}
        messagee={`Status: ${formData.selectstatus.value ? formData.selectstatus.value.label : ''}`}
        confirmText="Confirm"
        cancelText="Cancel"
      />

      {/* Success Snackbar */}
      <CommonSnackbar
        open={showSnackbar}
        message="Banner added successfully!"
        onClose={() => setShowSnackbar(false)}
        severity={snackbarSeverity}
      />
    </Paper>
  );
};

export default AddCarBrand;
