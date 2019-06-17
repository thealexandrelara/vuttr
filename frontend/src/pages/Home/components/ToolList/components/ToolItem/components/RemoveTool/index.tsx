import React, { useState, FunctionComponent } from 'react'
// @ts-ignore
import { useDispatch } from 'react-redux'
import Modal from 'react-modal'

import { Container, modalStyles } from './styles'
import { Props } from './types'

import Button from '../../../../../../../../components/Button'

import api from '../../../../../../../../services/api'
import * as ToolsActions from '../../../../../../../../store/ducks/tools/actions'

const RemoveTool : FunctionComponent<Props> = ({ id } : Props) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  async function handleRemove() {
    try {
      const response = api.delete(`/tools/${id}`)
      // @ts-ignore
      dispatch(ToolsActions.removeToolSuccess(id))
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

  return (
    <Container>
      <Button kind="quaternary-danger" onClick={openModal}>remove</Button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyles}>
        <div>Teste</div>
        <p>Are you sure you want to remove hotel?</p>
        <Button type="button" kind="secondary-neutral" onClick={closeModal}>Cancel</Button>
        <Button type="button" kind="primary-danger" onClick={handleRemove}>Yes, remove</Button>
      </Modal>
    </Container>
  )
}

export default RemoveTool
