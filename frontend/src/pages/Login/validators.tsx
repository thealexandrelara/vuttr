import * as Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid e-mail').required('Required'),
  password: Yup.string().min(6, 'Password must contain at least 6 characters').required('Required'),
})
