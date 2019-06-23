import { UserRepository } from '../repository'
import { UserDocument } from '../interfaces'

class GetAllUsers {
  private repository: UserRepository

  public constructor ({ repository } : { repository: UserRepository }) {
    this.repository = repository
  }

  public async execute () : Promise<UserDocument[]> {
    const users = await this.repository.getAllUsers()

    return users
  }
}

export default GetAllUsers
