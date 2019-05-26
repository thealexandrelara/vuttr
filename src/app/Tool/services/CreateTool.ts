import ToolRepository from '../repository'
import { Tool, ToolDocument } from '../interfaces'

class CreateTool {
  private repository : ToolRepository

  public constructor ({ repository }) {
    this.repository = repository
  }

  public async execute (userData: Tool) : Promise<ToolDocument> {
    const tool = await this.repository.createTool(userData)

    return tool
  }
}

export default CreateTool
