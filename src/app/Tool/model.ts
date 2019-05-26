import { model, Schema } from 'mongoose'
import { ToolDocument } from './interfaces'

const ToolSchema = new Schema({
  title: String,
  link: String,
  description: String,
  tags: [String]
})

const ToolModel = model<ToolDocument>('Tool', ToolSchema)

export default ToolModel
