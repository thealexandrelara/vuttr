import * as Yup from 'yup'

export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string().min(6, 'Password must contain at least 6 characters').required('Required'),
  passwordConfirmation: Yup.string().min(6, 'Password must contain at least 6 characters').oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
})
