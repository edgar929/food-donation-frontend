import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const theme = createTheme();


export default function NewDonationForm() {
  const [age, setAge] = React.useState('');

const handleChange = (event) => {
  setAge(event.target.value);
};
  const [value, setValue] = React.useState(new Date());
    const initialValues = {
        name: '',
        short_description: '',
        description: '',
        image: '',
        category: '',
        quantity: '',
        pick_up_location: '',
        pick_up_deadline: '',
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        short_description: Yup.string().min(3, "It's too short").required("Required"),
        description: Yup.string().min(3, "It's too short").required("Required"),
        image: Yup.string().required("Required"),
        category: Yup.string().required("Required"),
        quantity: Yup.string().required("Required"),
        pick_up_location: Yup.string().required("Required"),
        pick_up_deadline: Yup.string().required("Required"),
    })
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '92vh',  display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              }}>
        <CssBaseline />
    
        <Grid item xs={12} sm={8} md={10} component={Paper} elevation={6} square>
        <Box
            sx={{
              my: 6,
              mx: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            
            }}
          >
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>

                            <Field as={TextField} fullWidth name="name" label='Name' 
                                placeholder="Enter your name" helperText={<span style={{ color: 'red' }}><ErrorMessage name="name" /></span>} />
                            <Field as={TextField} fullWidth name="short_description" label='Short Description'
                                placeholder="Enter about the product" helperText={<span style={{ color: 'red' }}><ErrorMessage name="short_description" /></span>} />
                            <Field as={TextField} fullWidth name="description" label='Description'
                                placeholder="Enter about the product" helperText={<span style={{ color: 'red' }}><ErrorMessage name="description" /></span>} />
                             <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  marginTop: '0.2rem',
                                  marginBottom: '0.2rem',
                              }}
                             >
                              <LocalizationProvider dateAdapter={AdapterDateFns} >
                                  <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="Pick Up Deadline"
                                    value={value}
                                    onChange={(newValue) => {
                                      setValue(newValue);
                                    }}
                                    
                                  />
                                </LocalizationProvider>
                                <FormControl sx={{width: "50%"}}>
                                   <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={age}
                                      label="Category"
                                      onChange={handleChange}
                                    >
                                      <MenuItem value={10}>beverage</MenuItem>
                                      <MenuItem value={20}>Twenty</MenuItem>
                                      <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                              
                             </Box>
                            <Field as={TextField} fullWidth name="image" label='Image'
                                placeholder="choose image" helperText={<span style={{ color: 'red' }}><ErrorMessage name="email" /></span>} />
                            <Field as={TextField} fullWidth name="category" label='Category'
                                placeholder="Enter about the product" helperText={<span style={{ color: 'red' }}><ErrorMessage name="email" /></span>} />
                            <Field as={TextField} fullWidth name="quantity" label='Quantity'
                                placeholder="Enter about the product" helperText={<span style={{ color: 'red' }}><ErrorMessage name="email" /></span>} />
                            <Field as={TextField} fullWidth name="pick_up_location" label='Pick Up Location'
                                placeholder="Enter about the product" helperText={<span style={{ color: 'red' }}><ErrorMessage name="email" /></span>} />
                      
                          <Button 
                                type='submit' 
                                disabled={props.isSubmitting}
                                color='primary' 
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {props.isSubmitting ? "Loading" : "Donate"}
                            </Button>

                        </Form>
                    )}
                </Formik>
                
                </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}