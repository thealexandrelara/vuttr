import UserRepository from '../repository'
import { UserDocument } from '../interfaces'

class CreateUser {
  private repository: UserRepository

  public constructor ({ repository }) {
    this.repository = repository
  }

  public async execute (userData) : Promise<UserDocument> {
    const user = await this.repository.createUser(userData)

    return user
  }
}

export default CreateUser
