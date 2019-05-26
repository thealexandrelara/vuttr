import ToolRepository from '../repository'
import { ToolDocument } from '../interfaces'

class GetAllTools {
  private repository: ToolRepository
  public constructor ({ repository }) {
    this.repository = repository
  }

  public async execute () : Promise<ToolDocument[]> {
    const tools = await this.repository.getAllTools()

    return tools
  }
}

export default GetAllTools
