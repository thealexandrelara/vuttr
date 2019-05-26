import { Document } from 'mongoose'

export interface Tool {
  title?: string,
  link?: string,
  description?: string,
  tags?: [string]
}

export interface ToolDocument extends Document, Tool {}
