import React, { useState, FunctionComponent } from 'react'
// @ts-ignore
import { useDispatch } from 'react-redux'
import Modal from 'react-modal'
import { toastr } from 'react-redux-toastr'

import {
 Container, HeaderContainer, Title, Description, ButtonsContainer, modalStyles,
} from './styles'
import { Props } from './types'

import Button from '../../../../../../../../components/Button'

import { ReactComponent as CloseIcon } from '../../../../../../../../assets/icons/close.svg'
import api from '../../../../../../../../services/api'
import * as ToolsActions from '../../../../../../../../store/ducks/tools/actions'

const RemoveTool : FunctionComponent<Props> = ({ id, title } : Props) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  async function handleRemove() {
    try {
      await api.delete(`/tools/${id}`)
      // @ts-ignore
      dispatch(ToolsActions.removeToolSuccess(id))
      setIsOpen(false)
    } catch (error) {
      toastr.error('Error while removing tool', 'An error has ocurred while removing the tool. Please, try again.')
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
      <Button kind="quaternary-danger" onClick={openModal} hasIcon>
        <CloseIcon className="button-icon" />
        {' '}
        remove
      </Button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyles}>
        <HeaderContainer>
          <CloseIcon className="close-icon" />
          <Title>Remove tool</Title>
        </HeaderContainer>
        <Description>
          Are you sure you want to remove
          {' '}
          <b>{title}</b>
          ?
        </Description>
        <ButtonsContainer>
          <Button type="button" kind="secondary-neutral" onClick={closeModal} style={{ marginRight: 8 }}>Cancel</Button>
          <Button type="button" kind="primary-danger" onClick={handleRemove}>Yes, remove</Button>
        </ButtonsContainer>
      </Modal>
    </Container>
  )
}

export default RemoveTool
