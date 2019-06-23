import ToolRepository from '../repository'
import { ToolDocument } from '../interfaces'

interface GetAllToolsContext {
  requestQuery?: {
    tag?: string,
    search?: string,
  }
}

class GetAllTools {
  private repository: ToolRepository
  public constructor ({ repository } : { repository: ToolRepository }) {
    this.repository = repository
  }

  public async execute (context : GetAllToolsContext = {}, userId: string) : Promise<ToolDocument[]> {
    const { requestQuery } = context
    const tools = await this.repository.getAllTools({ requestQuery }, userId)

    return tools
  }
}

export default GetAllTools
