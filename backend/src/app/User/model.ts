import { Document, Schema, model } from 'mongoose'
import { User } from './interfaces'
import { AccountSchema, AccountKind, Account } from './components/Account'
import RepositoryError, { RepositoryErrorKind } from '../../utils/RepositoryError'

export interface UserDocument extends Document, User {
  accounts: Account[],
  comparePassword(candidatePassword: string) : Promise<boolean>
}

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, lowercase: true, trim: true },
  accounts: [AccountSchema]
}, { timestamps: true })

const comparePassword = async function (candidatePassword : string): Promise<boolean> {
  const user : UserDocument = this
  const localAccount = user.accounts.find(
    account => account.kind === AccountKind.Local
  )
  if (!localAccount) {
    throw new RepositoryError('Nenhuma conta local encontrada', RepositoryErrorKind.NotFound)
  }

  return localAccount.compareHash(candidatePassword)
}

UserSchema.methods = {
  comparePassword
}

const UserModel = model<UserDocument>('User', UserSchema)

export default UserModel
