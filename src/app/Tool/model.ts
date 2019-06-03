import { model, Schema, Document } from 'mongoose'
import { Tool } from './interfaces'

export interface ToolDocument extends Document, Tool {}

const ToolSchema = new Schema({
  title: String,
  link: String,
  description: String,
  tags: [String],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'É necessário informar o usuário']
  }
}, { timestamps: true })

const ToolModel = model<ToolDocument>('Tool', ToolSchema)

export default ToolModel
