import { UserRepository } from '../repository'
import { UserDocument } from '../model'
import { AccountKind } from '../components/Account'

interface ExecuteParams { kind: AccountKind, uid: string }

interface ExecuteOptions { selectPassword?: boolean}

class GetUserByAccountKindAndUID {
  private repository: UserRepository

  public constructor ({ repository } : { repository: UserRepository }) {
    this.repository = repository
  }

  public async execute (params : ExecuteParams, options : ExecuteOptions) : Promise<UserDocument> {
    const user = await this.repository.getUserByAccountKindAndUID(params.kind, params.uid, options)

    return user
  }
}

export default GetUserByAccountKindAndUID
