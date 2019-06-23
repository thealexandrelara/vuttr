import { Model } from 'mongoose'
import { CreateUserAccountParams } from './interfaces'
import { UserDocument } from '../interfaces'
import { AccountKind, Account } from '../components/Account'
import RepositoryError, { RepositoryErrorKind } from '../../../utils/RepositoryError'

class UserRepository {
  private model: Model<UserDocument>

  public constructor ({ model } : { model: Model<UserDocument>}) {
    this.model = model
  }

  public async getAllUsers () : Promise<UserDocument[]> {
    const users = await this.model.find()

    return users
  }

  public async getUserById (id : string) : Promise<UserDocument | null> {
    const user = await this.model.findById(id)

    return user
  }

  public async createUserAccount (userParams : CreateUserAccountParams) : Promise<UserDocument> {
    const _this = this
    checkIfEmailWasInformed(userParams)
    checkIfPasswordWasProvidedWhenCreatingLocalAccount(userParams)
    const existingUser = await getUserWithUIDIfExists(userParams.email)
    await addUserAccountToExistingUser(existingUser, userParams)
    const user = await createUserIfNotCreated(existingUser, userParams)

    return user

    function checkIfEmailWasInformed (userParams : CreateUserAccountParams) : void {
      if (userParams.email) return

      throw new RepositoryError('An e-mail is required to create a user account.', RepositoryErrorKind.MissingInfo)
    }

    function checkIfPasswordWasProvidedWhenCreatingLocalAccount (userParams : CreateUserAccountParams) : void {
      if (notLocalAccount(userParams.kind) || (localAccount(userParams.kind) && userParams.password)) return

      throw new RepositoryError('A password is required to create an account', RepositoryErrorKind.MissingInfo)
    }

    function notLocalAccount (kind : string) : boolean {
      return kind !== AccountKind.Local
    }

    function localAccount (kind : string) : boolean {
      return kind === AccountKind.Local
    }

    async function getUserWithUIDIfExists (email: string | undefined) : Promise<UserDocument | null> {
      const user = await _this.model.findOne({ 'email': email })

      return user
    }

    async function addUserAccountToExistingUser (existingUser: UserDocument | null, userParams : CreateUserAccountParams) : Promise<void> {
      if (existingUser) {
        const existingAccount = existingUser.accounts.find((account) : boolean => account.kind === userParams.kind)
        if (existingAccount && notLocalAccount(userParams.kind)) return
        if (existingAccount && localAccount(userParams.kind)) throw new RepositoryError('Account with provided data already exists.', RepositoryErrorKind.MissingInfo)
        const account : Account = { kind: userParams.kind, uid: userParams.uid }
        if (userParams.kind === AccountKind.Local) {
          account.password = userParams.password
        }

        existingUser.accounts.push(account)
        await existingUser.save()
      }
    }

    async function createUserIfNotCreated (existingUser: UserDocument | null, userParams : CreateUserAccountParams) : Promise<UserDocument> {
      if (existingUser) return existingUser

      const account : Account = { kind: userParams.kind, uid: userParams.uid }
      if (userParams.kind === AccountKind.Local) {
        account.password = userParams.password
      }
      const user = await _this.model.create({ firstName: userParams.firstName, lastName: userParams.lastName, email: userParams.email, accounts: [account] })

      return user
    }
  }

  public async getUserByAccountKindAndUID (kind : string, uid : string, options : any) : Promise<UserDocument | null> {
    const query = createQueryFromParams()
    const user = options.selectPassword ? this.model.findOne(query).select('+accounts.password') : this.model.findOne(query)

    return user

    function createQueryFromParams () : {} {
      const result: any = {}

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
