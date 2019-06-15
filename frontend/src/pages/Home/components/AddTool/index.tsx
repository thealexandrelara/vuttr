import React, { useState, FunctionComponent } from 'react'
// @ts-ignore
import { useDispatch } from 'react-redux'
import { Formik, FormikHelpers } from 'formik'
import Modal from 'react-modal'

import { Container, Form, modalStyles } from './styles'

import { addToolValidationSchema } from './validators'
import { AddToolFormValues } from './types'

import Button from '../../../../components/Button'
import TextInput from '../../../../components/TextInput'
import TextAreaInput from '../../../../components/TextAreaInput'

import * as ToolsActions from '../../../../store/ducks/tools/actions'


const AddTool : FunctionComponent = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const initialValues = {
    toolName: '',
    toolLink: '',
    toolDescription: '',
    tags: '',
  }

  function handleSubmit(values: AddToolFormValues, actions: FormikHelpers<AddToolFormValues>) {
    // dispatch(localSignInRequest(values))
    console.log('values', values)
    // @ts-ignore
    dispatch(ToolsActions.addToolSuccess({ ...values, tags: [] }))
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Container>
      <Button onClick={openModal}>Add</Button>
      <Modal isOpen={isOpen} style={modalStyles} onRequestClose={closeModal}>
        <div>Teste</div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={addToolValidationSchema}>
          {formikProps => (
            <Form>
              <TextInput name="toolName" label="Tool Name" />
              <TextInput name="toolLink" label="Tool Link" />
              <TextAreaInput name="toolDescription" label="Tool Description" />
              <TextInput name="tags" label="Tags" />
              <Button type="submit">Add tool</Button>
            </Form>
)}
        </Formik>
      </Modal>
    </Container>
  )
}

export default AddTool
