import { Tool } from '../../../../store/ducks/tools/interfaces'

export interface GlobalStateProps {
  tools?: Tool[]
}

export interface DispatchProps {
  getToolsRequest() : void
}

export type Props = GlobalStateProps & DispatchProps
