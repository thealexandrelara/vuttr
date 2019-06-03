import { UserRepository, CreateUserAccountParams } from '../repository'
import { UserDocument } from '../interfaces'
import { AccountKind } from '../components/Account'

class CreateUserAccount {
  private repository: UserRepository

  public constructor ({ repository }) {
    this.repository = repository
  }

  public async execute (params : CreateUserAccountParams) : Promise<UserDocument> {
    const user = await this.repository.createUserAccount(params)

    return user
  }
}

export default CreateUserAccount
