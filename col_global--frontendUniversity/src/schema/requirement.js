import * as yup from 'yup';
export const MOBILE_NUMBER_PATTERN = /^[0-9]{10}$/;

// export const ContactSchema = yup.object().shape({
//      name: yup.string(),
//      email: yup.string().email('Invalid email'),
//      phone: yup
//           .string()
//           .matches(MOBILE_NUMBER_PATTERN, 'Phone number must be 10 digits'),
//      subject: yup.string(),
//      message: yup.string(),
// });



export const ContactSchema = yup.object().shape({
     name: yup.string().required('Name is required'),
     email: yup.string().email('Invalid email').required('Email is required'),
     phone: yup
          .string()
          .matches(MOBILE_NUMBER_PATTERN, 'Phone number must be 10 digits')
          .required('Phone number is required'),
     subject: yup.string().required('Please input your subject'),
     message: yup.string().required('Please input your message'),
});
