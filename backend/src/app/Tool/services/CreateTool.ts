import ToolRepository from '../repository'
import { Tool, ToolDocument } from '../interfaces'

class CreateTool {
  private repository : ToolRepository

  public constructor ({ repository }) {
    this.repository = repository
  }

  public async execute (toolData: Tool, userId: string) : Promise<ToolDocument> {
    const tool = await this.repository.createTool(toolData, userId)

    return tool
  }
}

export default CreateTool
