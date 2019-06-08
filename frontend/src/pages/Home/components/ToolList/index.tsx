import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose, Dispatch } from 'redux'

import { Props } from './interfaces'

import * as ToolsActions from '../../../../store/ducks/tools/actions'

import ToolItem from './ToolItem'
import { Container } from './styles'


import { ApplicationState } from '../../../../store'

const ToolList = ({ tools, getToolsRequest } : Props) => {
  useEffect(() => {
    getToolsRequest()
  }, [getToolsRequest])

  return <Container><ToolItem /></Container>
}

const mapStateToProps = (state: ApplicationState) => ({
  tools: state.tools.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ToolsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToolList)
