import { Account } from './components/Account'
export { UserDocument } from './model'

export interface User {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  accounts: Account[]
}
