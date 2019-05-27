import ToolRepository from '../repository'
import { ToolDocument } from '../interfaces'

interface GetAllToolsContext {
  requestQuery?: {
    tag?: string
  }
}

class GetAllTools {
  private repository: ToolRepository
  public constructor ({ repository }) {
    this.repository = repository
  }

  public async execute (context : GetAllToolsContext = {}) : Promise<ToolDocument[]> {
    const { requestQuery } = context
    const tools = await this.repository.getAllTools({ requestQuery })

    return tools
  }
}

export default GetAllTools
