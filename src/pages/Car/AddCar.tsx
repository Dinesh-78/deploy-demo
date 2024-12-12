import React, { useState } from 'react';
import CommonSelectField from 'pages/common-components/common-select';
import CommonInputFileField from 'pages/common-components/common-file';
import CommonInputField from 'pages/common-components/common-input';
import CommonTextAreaField from 'pages/common-components/common-textarea';
import { Button, Grid, Paper, Typography, Box, Stepper, Step, StepButton } from '@mui/material';
import _ from 'lodash';
import CommonDialog from 'pages/common-dilogs/Common-dilog';
import CommonSnackbar from 'pages/common-dilogs/Snackbar';

const AddCar: React.FC = () => {
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
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    file: {
      label: 'Upload Car',
      id: 'file',
      name: 'file',
      type: 'file',
      value: [],
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    title: {
      label: 'Enter Car Title',
      id: 'title',
      name: 'title',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    carnumber: {
      label: 'Enter Car Number',
      id: 'carnumber',
      name: 'carnumber',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    carrating: {
      label: 'Enter Car Rating',
      id: 'carrating',
      name: 'carrating',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    totalseat: {
      label: 'Enter Total Seat',
      id: 'totalseat',
      name: 'totalseat',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    carAc: {
      label: 'Select Car AC?',
      id: 'carAc',
      name: 'carAc',
      type: 'select',
      options: [
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' }
      ],
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    drivername: {
      label: 'Enter Driver Name',
      id: 'drivername',
      name: 'drivername',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    driverno: {
      label: 'Enter Driver Number',
      id: 'driverno',
      name: 'driverno',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    gearsystem: {
      label: 'Select Gear System',
      id: 'gearsystem',
      name: 'gearsystem',
      type: 'select',
      options: [
        { id: 1, label: 'Auto' },
        { id: 2, label: 'Manual ' }
      ],
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    carfacility: {
      label: 'Select Car Facilities',
      id: 'carfacility',
      name: 'carfacility',
      type: 'select',
      options: [
        { id: 1, label: 'Bluetooth Connective' },
        { id: 2, label: 'Air Conditioning ' },
        { id: 3, label: 'Power Windows ' },
        { id: 4, label: 'Power Steering ' },
        { id: 5, label: 'Keyless Entry' },
        { id: 6, label: 'Music System' },
        { id: 7, label: 'USB Charger' },
        { id: 8, label: 'Aux Cable' },
        { id: 9, label: 'Air Bag' }
      ],
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    cartype: {
      label: 'Select Car Type',
      id: 'cartype',
      name: 'cartype',
      type: 'select',
      options: [
        { id: 1, label: 'SUV' },
        { id: 2, label: 'Hatchback' },
        { id: 3, label: 'Sedan' },
        { id: 4, label: 'Luxury ' },
        { id: 5, label: 'Vans' }
      ],
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    carbrandtype: {
      label: 'Select Car Type',
      id: 'carbrandtype',
      name: 'carbrandtype',
      type: 'select',
      options: [
        { id: 1, label: 'Ferrari' },
        { id: 2, label: 'BMW' },
        { id: 3, label: 'Toyota' },
        { id: 4, label: 'Auid ' },
        { id: 5, label: 'Lamborghin' },
        { id: 6, label: 'Tesla' }
      ],
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    avcarcity: {
      label: 'Select Car City',
      id: 'avcarcity',
      name: 'avcarcity',
      type: 'select',
      options: [
        { id: 1, label: 'Surat, Gujarat' },
        { id: 2, label: 'Hyderabad, Telanagana' },
        { id: 3, label: 'Andhery East, Mubai' },
        { id: 4, label: 'Gopa pur, Odisha ' },
        { id: 5, label: 'Viskhapatanam, Andhra' }
      ],
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    driverwithout: {
      label: 'Driver Without Price',
      id: 'driverwithout',
      name: 'driverwithout',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    driverwith: {
      label: 'Driver With Price',
      id: 'driverwith',
      name: 'driverwith',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    carengine: {
      label: 'Car Engine HP',
      id: 'carengine',
      name: 'carengine',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    carpricetype: {
      label: 'Select Car Price',
      id: 'carpricetype',
      name: 'carpricetype',
      type: 'select',
      options: [
        { id: 1, label: 'Hourly' },
        { id: 2, label: 'Daily ' }
      ],
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    carfueltype: {
      label: 'Select Car Fuel Type',
      id: 'carfueltype',
      name: 'carfueltype',
      type: 'select',
      options: [
        { id: 1, label: 'Petrol' },
        { id: 2, label: 'Diesel ' },
        { id: 3, label: 'Electric ' },
        { id: 4, label: 'CNG' },
        { id: 5, label: 'Petrol & CNG' }
      ],
      value: null,
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    cardescription: {
      label: 'Car Description',
      id: 'cardescription',
      name: 'cardescription',
      type: 'textarea',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    pickupaddress: {
      label: 'Enter Pick Up Address',
      id: 'pickupaddress',
      name: 'pickupaddress',
      type: 'textarea',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    carlatitude: {
      label: 'Car Latitude',
      id: 'carlatitude',
      name: 'carlatitude',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    carlongtitude: {
      label: 'Car Longtitude',
      id: 'carlongtitude',
      name: 'carlongtitude',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    totalkm: {
      label: 'Total Driven KM',
      id: 'totalkm',
      name: 'totalkm',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    carhr: {
      label: 'Car Minimum HR',
      id: 'carhr',
      name: 'carhr',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    }
  };

  const [completed, setCompleted] = useState([false, false, false]);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(formFields);
  const [openDialog, setOpenDialog] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');
  type FormDataKeys = keyof typeof formData;
  const steps = ['Step 1', 'Step 2', 'Step 3'];
  const totalSteps = () => steps.length;
  const isLastStep = () => activeStep === totalSteps() - 1;

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(formData);
    let isValid = true;

    // Define validation rules
    const validationRules: Record<string, (field: any) => boolean> = {
      selectstatus: (field) => field.value && field.value.id !== null,
      file: (field) => field.value.length > 0,
      title: (field) => !!field.value,
      carnumber: (field) => !!field.value,
      carrating: (field) => !!field.value,
      totalseat: (field) => !!field.value,
      carAc: (field) => !!field.value,
      drivername: (field) => !!field.value,
      driverno: (field) => !!field.value,
      gearsystem: (field) => !!field.value,
      carfacility: (field) => !!field.value,
      cartype: (field) => !!field.value,
      carbrandtype: (field) => !!field.value,
      avcarcity: (field) => !!field.value,
      driverwithout: (field) => !!field.value,
      driverwith: (field) => !!field.value,
      carengine: (field) => !!field.value,
      carpricetype: (field) => !!field.value,
      carfueltype: (field) => !!field.value,
      cardescription: (field) => !!field.value,
      pickupaddress: (field) => !!field.value,
      carlatitude: (field) => !!field.value,
      carlongtitude: (field) => !!field.value,
      totalkm: (field) => !!field.value,
      carhr: (field) => !!field.value
    };

    // Loop through form fields
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];

        if (field.mandatory) {
          const isFieldValid = validationRules[key] ? validationRules[key](field) : true;

          if (!isFieldValid) {
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} is required`;
            isValid = false;
          } else {
            newFormData[key].error = false;
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

  const handleChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
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
      const fileNames = formData.file.value.map((file: File) => file.name);
      const sampleObject = {
        selectstatus: formData.selectstatus.value,
        file: fileNames,
        title: formData.title.value,
        carnumber: formData.carnumber.value,
        carrating: formData.carrating.value,
        totalseat: formData.totalseat.value,
        carAc: formData.carAc.value,
        drivername: formData.drivername.value,
        driverno: formData.driverno.value,
        gearsystem: formData.gearsystem.value,
        cartype: formData.cartype.value,
        carbrandtype: formData.carbrandtype.value,
        avcarcity: formData.avcarcity.value,
        carengine: formData.carengine.value,
        carpricetype: formData.carpricetype.value,
        carfueltype: formData.carfueltype.value,
        cardescription: formData.cardescription.value,
        pickupaddress: formData.pickupaddress.value,
        carlatitude: formData.carlatitude.value,
        carlongtitude: formData.carlongtitude.value,
        totalkm: formData.totalkm.value,
        carhr: formData.carhr.value
      };
      console.log('Form Submitted:', sampleObject);

      setShowSnackbar(true);
      setSnackbarSeverity('success');

      setFormData(formFields);
    }

    setOpenDialog(false);
  };

  const handleNext = () => {
    if (isLastStep()) {
      // Submit form
      console.log(formData);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Paper sx={{ padding: '60px 40px', borderRadius: '20px' }}>
      <form onSubmit={handleSubmit} noValidate>
        <Typography marginBottom={2} fontSize={17}>
          Add Car
        </Typography>
        <Stepper nonLinear activeStep={activeStep} sx={{ marginBottom: 5 }}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 && (
         
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <CommonInputField inputProps={formData.title} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <CommonInputField inputProps={formData.carnumber} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <CommonInputFileField inputProps={formData.file} onChange={handleFileChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <CommonSelectField inputProps={formData.selectstatus} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <CommonInputField inputProps={formData.carrating} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <CommonInputField inputProps={formData.totalseat} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <CommonSelectField inputProps={formData.carAc} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <CommonInputField inputProps={formData.drivername} onChange={handleChange} />
              </Grid>
            </Grid>
         
        )}

        {activeStep === 1 && (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <CommonInputField inputProps={formData.driverno} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonSelectField inputProps={formData.gearsystem} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonSelectField inputProps={formData.carfacility} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonSelectField inputProps={formData.cartype} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonSelectField inputProps={formData.carbrandtype} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonSelectField inputProps={formData.avcarcity} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonInputField inputProps={formData.driverwithout} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonInputField inputProps={formData.driverwith} onChange={handleChange} />
            </Grid>
          </Grid>
        )}

        {activeStep === 2 && (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <CommonInputField inputProps={formData.carengine} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CommonSelectField inputProps={formData.carpricetype} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CommonSelectField inputProps={formData.carfueltype} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonTextAreaField inputProps={formData.cardescription} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonTextAreaField inputProps={formData.pickupaddress} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonInputField inputProps={formData.carlatitude} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonInputField inputProps={formData.carlongtitude} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonInputField inputProps={formData.totalkm} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonInputField inputProps={formData.carhr} onChange={handleChange} />
            </Grid>
          </Grid>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button onClick={handleBack} variant="contained" color="secondary" disabled={activeStep === 0} sx={{ marginRight: 1 }}>
            Back
          </Button>

          {isLastStep() ? (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Add Car
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      </form>

      {/* Confirmation Dialog */}
      <CommonDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={() => handleDialogClose(true)}
        title="Are you sure you want to add this banner?"
        message={`Please confirm the title: ${formData.title.value ? formData.title.value : ''}`}
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

export default AddCar;
