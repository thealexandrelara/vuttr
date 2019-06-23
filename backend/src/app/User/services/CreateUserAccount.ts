import { UserRepository, CreateUserAccountParams } from '../repository'
import { UserDocument } from '../interfaces'

class CreateUserAccount {
  private repository: UserRepository

  public constructor ({ repository } : { repository: UserRepository }) {
    this.repository = repository
  }

  public async execute (params : CreateUserAccountParams) : Promise<UserDocument> {
    const user = await this.repository.createUserAccount(params)

    return user
  }
}

export default CreateUserAccount
