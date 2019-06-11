import React, { FunctionComponent } from 'react'
import { Formik } from 'formik'
import Modal from 'react-modal'

import { Container, Form, modalStyles } from './styles'

import Button from '../../../../components/Button'

import TextInput from '../../../../components/TextInput'

const AddTool : FunctionComponent = () => {
  const initialValues = {

  }

  function handleSubmit() {

  }

  return (
    <Container>
      <Button>Add</Button>
      <Modal isOpen={false} style={modalStyles}>
        <div>Teste</div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {formikProps => (
            <Form>
              <TextInput label="Tool Name" />
              <TextInput label="Tool Link" />
              <TextInput label="Tool Description" />
              <TextInput label="Tags" />
              <Button type="submit">Add tool</Button>
            </Form>
)}
        </Formik>
      </Modal>
    </Container>
  )
}

export default AddTool
