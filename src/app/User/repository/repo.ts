import { Model } from 'mongoose'
import { CreateUserAccountParams } from './interfaces'
import { UserDocument } from '../interfaces'
import { AccountKind, Account } from '../components/Account'
import RepositoryError, { RepositoryErrorKind } from '../../../utils/RepositoryError'

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

  public async createUserAccount (userParams : CreateUserAccountParams) : Promise<UserDocument> {
    const _this = this
    checkIfEmailWasInformed(userParams)
    checkIfIsLocalAccountCreationAndPasswordWasProvided(userParams)
    const existingUser = await getUserWithUIDIfExists(userParams.email)
    await addUserAccountToExistingUser(existingUser, userParams)
    const user = await createUserIfNotCreated(existingUser, userParams)

    return user

    function checkIfEmailWasInformed (userParams : CreateUserAccountParams) : void {
      if (userParams.email) return

      throw new RepositoryError('É necessário fornecer um e-mail para criar a conta do usuário', RepositoryErrorKind.MissingInfo)
    }

    function checkIfIsLocalAccountCreationAndPasswordWasProvided (userParams : CreateUserAccountParams) : void {
      if (userParams.kind !== AccountKind.Local || (userParams.kind === AccountKind.Local && userParams.password)) return

      throw new RepositoryError('É necessário fornecer uma senha para criar a conta do usuário', RepositoryErrorKind.MissingInfo)
    }

    async function getUserWithUIDIfExists (email: string) : Promise<UserDocument> {
      const user = await _this.model.findOne({ 'email': email })

      return user
    }

    async function addUserAccountToExistingUser (existingUser: UserDocument, userParams : CreateUserAccountParams) : Promise<void> {
      if (existingUser) {
        const existingAccount = existingUser.accounts.find((account) : boolean => account.kind === userParams.kind)
        if (existingAccount) throw new RepositoryError('Uma conta com estes dados já existe', RepositoryErrorKind.MissingInfo)
        const account : Account = { kind: userParams.kind, uid: userParams.uid }
        if (userParams.kind === AccountKind.Local) {
          account.password = userParams.password
        }

        existingUser.accounts.push(account)
        await existingUser.save()
      }
    }

    async function createUserIfNotCreated (existingUser: UserDocument, userParams : CreateUserAccountParams) : Promise<UserDocument> {
      if (existingUser) return existingUser

      const account : Account = { kind: userParams.kind, uid: userParams.uid }
      if (userParams.kind === AccountKind.Local) {
        account.password = userParams.password
      }
      const user = await _this.model.create({ firstName: userParams.firstName, lastName: userParams.lastName, email: userParams.email, accounts: [account] })

      return user
    }
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
        result['accounts.uid'] = uid
      }

      return result
    }
  }
}

export default UserRepository
