import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose, Dispatch } from 'redux'

import { Props } from './interfaces'

import * as ToolsActions from '../../../../store/ducks/tools/actions'

import ToolItem from './ToolItem'


import { ApplicationState } from '../../../../store'

const ToolList = (props : Props) => {
  const { tools } = props
  return <div>List</div>
}

const mapStateToProps = (state: ApplicationState) => ({
  tools: state.tools.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ToolsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToolList)
