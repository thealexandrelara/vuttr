import * as Yup from 'yup'

export const addToolValidationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  link: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  tags: Yup.string().required('Required'),
})
