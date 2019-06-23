import { Model } from 'mongoose'
import { Tool, ToolDocument } from './interfaces'

interface Context {
  requestQuery: RequestQuery
}

interface RequestQuery {
  tag?: string,
  search?: string,
}

class ToolRepository {
  private model: Model<ToolDocument>

  public constructor ({ model } : { model: Model<ToolDocument> }) {
    this.model = model
  }

  public async getAllTools ({ requestQuery } : Context, userId: string) : Promise<ToolDocument[]> {
    const query = createQueryFromRequestQuery({ requestQuery })
    const tools = await this.model.find(query).select('-createdAt -updatedAt -__v')

    return tools

    function createQueryFromRequestQuery ({ requestQuery } : Context) : {} {
      if (!requestQuery) { return {} }
      const result : { user: string, tags?: string, $or?: string | {}[] } = { user: userId }

      if (requestQuery.tag) {
        result.tags = requestQuery.tag
      }

      if (requestQuery.search) {
        result.$or = [createFieldSearchRegex('title'),
          createFieldSearchRegex('link'),
          createFieldSearchRegex('description'),
          createFieldSearchRegex('tags')]
      }

      return result

      function createFieldSearchRegex (field : string) : {} {
        return { [field]: { $regex: requestQuery.search, $options: 'i' } }
      }
    }
  }

  public async getToolsByTag (tag : string) : Promise<ToolDocument[]> {
    const tools = await this.model.find({ tags: tag })

    return tools
  }

  public async getToolById (id : string) : Promise<ToolDocument | null> {
    const tool = await this.model.findById(id)

    return tool
  }

  public async createTool (toolData: Tool, user: string) : Promise<ToolDocument> {
    const tool = await this.model.create({ ...toolData, user })

    return tool
  }

  public async removeToolByIdAndUser (id: string, user: string) : Promise<ToolDocument | null> {
    const removedTool = await this.model.findOneAndRemove({ _id: id, user })

    return removedTool
  }
}

export default ToolRepository
