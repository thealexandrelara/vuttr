import ToolRepository from '../repository'
import { ToolDocument } from '../interfaces'

import RepositoryError, { RepositoryErrorKind } from '../../../utils/RepositoryError'

class GetToolById {
  private repository: ToolRepository

  public constructor ({ repository } : { repository: ToolRepository }) {
    this.repository = repository
  }

  public async execute (id : string, userId: string) : Promise<ToolDocument | null> {
    const tool = await this.repository.getToolById(id)
    checkIfUserHasAuthorization(tool, userId)

    return tool

    function checkIfUserHasAuthorization (tool: ToolDocument | null, userId: string) : void {
      console.log('@getToolById', tool, userId)
      if (!tool || (tool.user && tool.user.toString() === userId)) return

      throw new RepositoryError('User does not have permission to access this resource', RepositoryErrorKind.Forbidden)
    }
  }
}

export default GetToolById
