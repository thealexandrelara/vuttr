export interface Tool {
  _id: string
  title: string
  description: string
  link: string
  tags: string[]
}

export interface ToolsState {
  readonly data: Tool[]
  readonly loading: boolean
  readonly error: boolean
}
