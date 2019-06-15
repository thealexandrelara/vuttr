import * as Yup from 'yup'

export const addToolValidationSchema = Yup.object().shape({
  toolName: Yup.string().required('Required'),
  toolLink: Yup.string().required('Required'),
  toolDescription: Yup.string().required('Required'),
  tags: Yup.string().required('Required'),
})
