import { model, Schema, Document } from 'mongoose'
import { Tool } from './interfaces'

export interface ToolDocument extends Document, Tool {}

const ToolSchema = new Schema({
  title: String,
  link: String,
  description: String,
  tags: [String]
}, { timestamps: true })

const ToolModel = model<ToolDocument>('Tool', ToolSchema)

export default ToolModel
