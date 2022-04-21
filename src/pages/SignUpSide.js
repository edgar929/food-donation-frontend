import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { registerAction } from '../redux/actions/signupAction';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@mui/material';
import { FormControl, RadioGroup, FormLabel, Radio } from '@mui/material';
import * as Yup from 'yup';
import {Link} from "react-router-dom"
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';


const theme = createTheme();

const SignUpSide=(props)=> {

  const [address, setAddress] = React.useState('');
  
    const marginTop = { marginTop: 5 }
    const initialValues = {
        username: '',
        email: '',
        role: '',
        address: address,
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        role: Yup.string().oneOf(["donor", "ngo"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required('Required'),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })
    const onSubmit = (values) => {
         const user ={
           ...values,
           address
         }
        console.log(values)
        console.log(props)
        setTimeout(() => {
            props.registerAction(user)
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
  
    const handleChange = address => {
        setAddress(address);
    };

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };
    React.useEffect(() => {
      if(props.register.success) {
       window.location.href = "/donations"
      }
    }, [props.register.success])  // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://res.cloudinary.com/dr4j1ymco/image/upload/v1649580343/dummy-pictures/Food-Donation_mviecj.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
            sx={{
              my: 8,
              mx: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {/* {(resetForm) => ( */}
                        <Form>

                            <Field as={TextField} fullWidth name="username" label='Username' 
                                placeholder="Enter your name" helperText={<span style={{ color: 'red' }}><ErrorMessage name="username" /></span>} />
                            <Field as={TextField} fullWidth name="email" label='Email'
                                placeholder="Enter your email" helperText={<span style={{ color: 'red' }}><ErrorMessage name="email" /></span>} />
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Type</FormLabel>
                                < Field as={RadioGroup} aria-label="Role" name="role" style={{ display: 'initial' }}>
                                    <FormControlLabel value="donor" control={<Radio />} label="Donor" />
                                    <FormControlLabel value="ngo" control={<Radio />} label="NGO" />
                                </ Field>
                            </FormControl>
                            <FormHelperText><span style={{ color: 'red' }}><ErrorMessage name="role" /></span></FormHelperText>
                            <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number'
                                placeholder="Enter your phone number" helperText={<span style={{ color: 'red' }}><ErrorMessage name="phoneNumber" /></span>} />
                                   <PlacesAutocomplete
                                style={{ width: '100%' }}
                                value={address}
                                onChange={handleChange}
                                onSelect={handleSelect}
                              >
                                {({
                                  getInputProps,
                                  suggestions,
                                  getSuggestionItemProps,
                                  loading,
                                }) => (
                                  <div>
                                    <input
                                      {...getInputProps({
                                        placeholder: "Enter Address...",
                                      })}
                                      style={{ width: '100%', padding: '11px' }}
                                      name="address"
                                    />
                                   
                                    <div>
                                      {loading && <div>Loading...</div>}
                                      {suggestions.map((suggestion) => {
                                        const style = suggestion.active
                                          ? { backgroundColor: "#grey", cursor: "pointer" }
                                          : { backgroundColor: "white", cursor: "pointer" };

                                        return (
                                          <div {...getSuggestionItemProps(suggestion, { style })}>
                                            {suggestion.description}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                            </PlacesAutocomplete>

                     
                            <Field as={TextField} fullWidth name='password' type="password"
                                label='Password' placeholder="Enter your password"
                                helperText={<span style={{ color: 'red' }}><ErrorMessage name="password" /></span>} />
                            <Field as={TextField} fullWidth name="confirmPassword" type="password"
                                label='Confirm Password' placeholder="Confirm your password"
                                helperText={<span style={{ color: 'red' }}><ErrorMessage name="confirmPassword" /></span>} />
                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><span style={{ color: 'red' }}><ErrorMessage name="termsAndConditions" /></span></FormHelperText>
                            <Button 
                                type='submit' 
                                disabled={props.register.loading}
                                color='primary' 
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {props.register.loading ? "Loading" : "Sign up"}
                            </Button>

                        </Form>
                    {/* )}  */}
                </Formik>
                  <Box 
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                      <Typography 
                        sx={{
                            marginRight: '4px'
                        }}
                      >Already have an Account?</Typography>
                      <Link to="/login">Login</Link>
                  </Box>
                </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
SignUpSide.propTypes = {
  registerAction: PropTypes.func.isRequired,
  register: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  register: state.register,
})

export default connect(mapStateToProps,{registerAction})(SignUpSide);