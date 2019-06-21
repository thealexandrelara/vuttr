import ToolRepository from '../repository'
import { ToolDocument } from '../interfaces'
import RepositoryError, { RepositoryErrorKind } from '../../../utils/RepositoryError'

class RemoveToolByIdAndUser {
  private repository: ToolRepository

  public constructor ({ repository }) {
    this.repository = repository
  }

  public async execute (id, userId) : Promise<ToolDocument> {
    const tool = await this.repository.removeToolByIdAndUser(id, userId)

    checkIfToolWasRemoved(tool)

    return tool

    function checkIfToolWasRemoved (tool) : void {
      if (tool) return

      throw new RepositoryError('Tool cannot be removed', RepositoryErrorKind.Forbidden)
    }
  }
}

export default RemoveToolByIdAndUser
