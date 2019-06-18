import React, { useState, FunctionComponent, ReactElement } from 'react'
// @ts-ignore
import { useDispatch } from 'react-redux'
import { Formik, FormikHelpers, FormikProps } from 'formik'
import Modal from 'react-modal'

import {
 Container, Form, HeaderContainer, Title, modalStyles,
} from './styles'

import { addToolValidationSchema } from './validators'
import { AddToolFormValues } from './types'

import Button from '../../../../components/Button'
import TextInput from '../../../../components/TextInput'
import TextAreaInput from '../../../../components/TextAreaInput'
import TagsInput from '../../../../components/TagsInput'

import { ReactComponent as CloseIcon } from '../../../../assets/icons/close.svg'
import api from '../../../../services/api'
import * as ToolsActions from '../../../../store/ducks/tools/actions'


const AddTool : FunctionComponent = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const initialValues : AddToolFormValues = {
    title: '',
    link: '',
    description: '',
    tags: [],
  }

  function handleSubmit(values: AddToolFormValues, actions: FormikHelpers<AddToolFormValues>) {
    try {
      const response = api.post('/tools', { ...values })
      // @ts-ignore
      dispatch(ToolsActions.addToolSuccess({ ...values }))
      setIsOpen(false)
    } catch (error) {

    }
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function onTagsChange(value : string[], formikProps: FormikProps<AddToolFormValues>) {
    formikProps.setFieldValue('tags', value)
  }

  return (
    <Container>
      <Button onClick={openModal} hasIcon>
        <CloseIcon className="button-icon" />
        Add
      </Button>
      <Modal isOpen={isOpen} style={modalStyles} onRequestClose={closeModal}>
        <HeaderContainer>
          <CloseIcon className="close-icon" />
          <Title>Add new tool</Title>
        </HeaderContainer>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={addToolValidationSchema}>
          {formikProps => (
            <Form>
              <TextInput name="title" label="Tool Name" />
              <TextInput name="link" label="Tool Link" />
              <TextAreaInput name="description" label="Tool Description" />
              <TagsInput name="tags" label="Tags" onChange={(value: any) => onTagsChange(value, formikProps)} />
              <Button type="submit">Add tool</Button>
            </Form>
)}
        </Formik>
      </Modal>
    </Container>
  )
}

export default AddTool
