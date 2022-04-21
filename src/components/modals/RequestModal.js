import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {Link} from "react-router-dom"
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

export default function RequestModal({isOpen, product, onClose}) {
  const initialValues = {
      name: product.title,
      info: ''
  }
  const validationSchema = Yup.object().shape({
      name: Yup.string().min(3, "It's too short").required("Required"),
      email: Yup.string().email("Enter valid email").required("Required"),
      type: Yup.string().oneOf(["donor", "ngo"], "Required").required("Required"),
      phoneNumber: Yup.number().typeError("Enter valid Phone Number").required('Required'),
      password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
      termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
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
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            why do you need this {product.title} ?
          </Typography>
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
                    {(props) => (
                        <Form>
                            <Field as={TextField} fullWidth name="name" label='Name' 
                                placeholder="Enter your name" helperText={<span style={{ color: 'red' }}><ErrorMessage name="name" /></span>} />
                            <TextareaAutosize
                              aria-label="addition information"
                              fullWidth
                              minRows={3}
                              placeholder="Any additional information ?"
                              style={{ width: 250 }}
                            />
                       
                            <Button 
                                type='submit' 
                                disabled={props.isSubmitting}
                                color='primary' 
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {props.isSubmitting ? "Loading" : "submit"}
                            </Button>
                        </Form>
                    )}
                </Formik>
                
                </Box>
        </Box>
      </Modal>
    </div>
  );
}
