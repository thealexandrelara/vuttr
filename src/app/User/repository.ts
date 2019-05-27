import { Model } from 'mongoose'
import { User, UserDocument } from './interfaces'

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
}

export default UserRepository
