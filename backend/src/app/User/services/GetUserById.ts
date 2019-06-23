import UserRepository from '../repository'
import { UserDocument } from '../interfaces'

class GetUserById {
  private repository: UserRepository

  public constructor ({ repository } : { repository: UserRepository }) {
    this.repository = repository
  }

  public async execute (id : string) : Promise<UserDocument> {
    const user = await this.repository.getUserById(id)

    return user
  }
}

export default GetUserById
