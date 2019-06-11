import React, { FunctionComponent } from 'react'
import { Formik } from 'formik'
import Modal from 'react-modal'

import { Container, Form, modalStyles } from './styles'

import Button from '../../../../../../../../components/Button'

import TextInput from '../../../../../../../../components/TextInput'

const RemoveTool : FunctionComponent = () => {
  const initialValues = {

  }

  function handleSubmit() {

  }

  return (
    <Container>
      <Button>remove</Button>
      <Modal isOpen={false} style={modalStyles}>
        <div>Teste</div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {formikProps => (
            <Form>
              <p>Are you sure you want to remove hotel?</p>
              <Button type="button">Cancel</Button>
              <Button type="submit">Yes, remove</Button>
            </Form>
)}
        </Formik>
      </Modal>
    </Container>
  )
}

export default RemoveTool
