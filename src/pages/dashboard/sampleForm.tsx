import React, { useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
// import CommonInputFileField from 'pages/common-components/common-file'; // Import the file input component
import { Button, Grid, Paper } from '@mui/material';
import _ from 'lodash';
import CommonDatePicker from 'pages/common-components/common-date';
import moment from 'moment';

const SampleForm: React.FC = () => {
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
    email: {
      label: 'Email Address',
      id: 'email',
      name: 'email',
      type: 'email',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    name: {
      label: 'Name',
      id: 'name',
      name: 'name',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    selectName: {
      label: 'Select Name',
      id: 'selectName',
      name: 'selectName',
      type: 'select',
      options: [
        { id: 1, label: 'satya' },
        { id: 2, label: 'dhana' },
        { id: 3, label: 'swami' }
      ],
      value: { id: 1, label: 'satya' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    address: {
      label: 'Select Address',
      id: 'address',
      name: 'address',
      options: [
        { id: 1, label: 'hyderabad' },
        { id: 2, label: 'andhra pradesh' },
        { id: 3, label: 'gujarat' }
      ],
      value: [
        { id: 1, label: 'hyderabad' },
        { id: 2, label: 'andhra pradesh' }
      ],
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: true
    },
    date: {
      label: 'Date',
      id: 'date',
      name: 'date',
      value: '',
      error: false,
      helperText: 'Please select date',
      mandatory: true,
      options: []
    },
    // file: { // New entry for file input
    //   label: 'Upload File',
    //   id: 'file',
    //   name: 'file',
    //   type: 'file',
    //   value: null,
    //   error: false,
    //   helperText: '',
    //   mandatory: true,
    //   options: []
    // }
  };

  const [formData, setFormData] = useState<FormData>(formFields);

  type FormDataKeys = keyof typeof formData;

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(formData);
    let isValid = true;

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];

        if (field.mandatory && !field.value && field.value === '') {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (key === 'email' && field.value && !/\S+@\S+\.\S+/.test(field.value)) {
          newFormData[key].error = true;
          newFormData[key].helperText = 'Invalid email address';
          isValid = false;
        } else {
          newFormData[key].helperText = '';
        }
      }
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const handleDateChange = (name: string, value: Date | null) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    const sampleObject = {
      name: formData.name.value,
      email: formData.email.value,
      address: formData.address.value,
      selectName: formData.selectName.value,
      date: moment(formData.date.value).format('YYYY/MM/DD'),
      file: formData.file.value ? formData.file.value.name : '' // Handling the file name if uploaded
    };
    console.log('sampleObject.........', sampleObject);
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formData);
    }
  };

  return (
    <Paper
      sx={{
        padding: '40px 30px',
        borderRadius: '20px'
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonSelectField inputProps={formData.address} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonSelectField inputProps={formData.selectName} onSelectChange={handleSelectChange} />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <CommonDatePicker inputProps={formData.date} onDateChange={handleDateChange} />
          </Grid>

          {/* <Grid item xs={12} sm={6} md={6}>
            <CommonInputFileField inputProps={formData.file} onChange={handleFileChange} />
          </Grid> */}

          <Grid item xs={12} textAlign={'end'}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default SampleForm;
