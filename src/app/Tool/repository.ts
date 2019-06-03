import { Model } from 'mongoose'
import { Tool, ToolDocument } from './interfaces'

class ToolRepository {
  private model: Model<ToolDocument>

  public constructor ({ model } : { model: Model<ToolDocument> }) {
    this.model = model
  }

  public async getAllTools ({ requestQuery }) : Promise<ToolDocument[]> {
    const query = createQueryFromRequestQuery({ requestQuery })
    const tools = await this.model.find(query)

    return tools

    function createQueryFromRequestQuery ({ requestQuery }) : {} {
      if (!requestQuery) { return {} }
      const result : { tags?: string } = { }

      if (requestQuery.tag) {
        result.tags = requestQuery.tag
      }

      return result
    }
  }

  public async getToolsByTag (tag : string) : Promise<ToolDocument[]> {
    const tools = await this.model.find({ tags: tag })

    return tools
  }

  public async getToolById (id : string) : Promise<ToolDocument> {
    const tool = await this.model.findById(id)

    return tool
  }

  public async createTool (toolData: Tool, user: string) : Promise<ToolDocument> {
    const tool = await this.model.create({ ...toolData, user })

    return tool
  }

  public async removeToolByIdAndUser (id: string, user: string) : Promise<ToolDocument> {
    const removedTool = await this.model.findOneAndRemove({ _id: id, user })

    return removedTool
  }
}

export default ToolRepository
