import { Model } from 'mongoose'
import { User, UserDocument } from './interfaces'
import { AccountKind } from './components/Account'

class UserRepository {
  private model: Model<UserDocument>

  public constructor ({ model }) {
    this.model = model
  }

  public async getAllUsers () : Promise<UserDocument[]> {
    const users = await this.model.find()

    return users
  }

  public async getUserById (id : string) : Promise<UserDocument> {
    const user = await this.model.findById(id)

    return user
  }

  public async createUser (userData : User) : Promise<UserDocument> {
    const user = await this.model.create(userData)

    return user
  }

  public async getUserByAccountKindAndUID (kind, uid, options) : Promise<UserDocument> {
    const query = createQueryFromParams()
    const user = options.selectPassword ? this.model.findOne(query).select('+accounts.password') : this.model.findOne(query)

    return user

    function createQueryFromParams () : {} {
      const result = {}

      if (kind) {
        result['accounts.kind'] = kind
      }

      if (uid) {
        result[uid === AccountKind.Local ? 'accounts.email' : 'accounts.uid'] = kind
      }

      return result
    }
  }
}

export default UserRepository
