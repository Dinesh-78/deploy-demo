import React, { useState } from 'react';
import CommonSelectField from 'pages/common-components/common-select';
import CommonInputField from 'pages/common-components/common-input';
import CommonDatePicker from 'pages/common-components/common-date';
import CommonTextAreaField from 'pages/common-components/common-textarea'
import CommonInputFileField from 'pages/common-components/common-file'; // Import the file input component
import { Button, Grid, Paper, Typography } from '@mui/material';
import _ from 'lodash';
import CommonDialog from 'pages/common-dilogs/Common-dilog'; // Import CommonDialog
import CommonSnackbar from 'pages/common-dilogs/Snackbar'; // Import CommonSnackbar
import { FcRefresh } from 'react-icons/fc';

const AddBanner: React.FC = () => {
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
      label: 'Select Status',
      id: 'selectstatus',
      name: 'selectstatus',
      type: 'select',
      options: [
        { id: 1, label: 'Publish' },
        { id: 2, label: 'Un Publish' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    file: {
      label: 'Upload Banner',
      id: 'file',
      name: 'file',
      type: 'file',
      value: [],
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    expiredate: {
      label: 'Expiry Date',
      id: 'expiredate',
      name: 'expiredate',
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    couponcode: {
      label: 'Enter Coupon Code',
      id: 'couponcode',
      name: 'couponcode',
      type: 'text',
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    coupontitle: {
      label: 'Enter Coupon Title',
      id: 'coupontitle',
      name: 'coupontitle',
      type: 'text',
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    couponsubtitle: {
      label: 'Enter Coupon Sub Title',
      id: 'couponsubtitle',
      name: 'couponsubtitle',
      type: 'text',
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    couponminamount: {
        label: 'Enter Coupon Amout',
        id: 'couponminamount',
        name: 'couponminamount',
        type: 'number',
        value: null,
        error: false,
        helperText: '',
        mandatory: true,
        options: []
      },
      couponvalue: {
        label: 'Coupon Value',
        id: 'couponvalue',
        name: 'couponvalue',
        type: 'number',
        value: null,
        error: false,
        helperText: '',
        mandatory: true,
        options: []
      },
      coupondescription: {
        label: 'Coupon Value',
        id: 'coupondescription',
        name: 'coupondescription',
        type: 'textarea',
        value: null,
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
          } else {
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

  // const handleFileChange = (name: string, value: File | null) => {
  //   const newFormData = _.cloneDeep(formData);
  //   newFormData[name].value = value;
  //   newFormData[name].error = false;
  //   newFormData[name].helperText = '';
  //   setFormData(newFormData);
  // };
  const handleDateChange = (name: string, value: Date | null) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const handleChange = (name: FormDataKeys, value: any) => {
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
      setOpenDialog(true); // Show confirmation dialog
    }
  };

  const handleDialogClose = (confirm: boolean) => {
    if (confirm) {
      const fileNames = formData.file.value.map((file: File) => file.name);
      const sampleObject = {
        selectstatus: formData.selectstatus.value,
        file: fileNames
      };
      console.log('Form Submitted:', sampleObject);

      setShowSnackbar(true); // Show success snackbar
      setSnackbarSeverity('success'); // Set severity to success

      setFormData(formFields); // Reset form after submission
    }

    setOpenDialog(false); // Close the dialog
  };

  return (
    <Paper sx={{ padding: '40px 30px', borderRadius: '20px' }}>
      <form onSubmit={handleSubmit} noValidate>
        <Typography fontSize={17} marginBottom={4}>
          Add Coupon
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputFileField inputProps={formData.file} onChange={handleFileChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonDatePicker inputProps={formData.expiredate} onDateChange={handleDateChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.couponcode} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <CommonInputField inputProps={formData.coupontitle} onChange={handleChange} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={1}
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          >
            <Button  color='success'>
              <FcRefresh />
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.couponsubtitle} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.couponminamount} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.couponvalue} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonSelectField inputProps={formData.selectstatus} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonTextAreaField inputProps={formData.coupondescription} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} textAlign={'end'}>
            <Button type="submit" variant="contained" color="primary">
              Add Coupon
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
        message={`Please confirm the file: ${formData.file.value ? formData.file.value.name : ''}`}
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

export default AddBanner;
