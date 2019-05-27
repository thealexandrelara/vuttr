import ToolRepository from '../repository'
import { ToolDocument } from '../interfaces'

class GetToolById {
  private repository: ToolRepository

  public constructor ({ repository }) {
    this.repository = repository
  }

  public async execute (id) : Promise<ToolDocument> {
    const tool = this.repository.getToolById(id)

    return tool
  }
}

export default GetToolById
