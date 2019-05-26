import { Model } from 'mongoose'
import { Tool, ToolDocument } from './interfaces'

class ToolRepository {
  private model: Model<ToolDocument>

  public constructor ({ model } : { model: Model<ToolDocument> }) {
    this.model = model
  }

  public async getAllTools () : Promise<ToolDocument[]> {
    const tools = await this.model.find()

    return tools
  }

  public async getToolsByTag (tag : string) : Promise<ToolDocument[]> {
    const tools = await this.model.find({ tags: tag })

    return tools
  }

  public async createTool (toolData: Tool) : Promise<ToolDocument> {
    const tool = await this.model.create(toolData)

    return tool
  }

  public async removeToolById (id: string) : Promise<ToolDocument> {
    const removedTool = await this.model.findByIdAndRemove(id)

    return removedTool
  }
}

export default ToolRepository
