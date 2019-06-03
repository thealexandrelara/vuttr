import { AccountKind } from '../components/Account'

export interface CreateUserAccountParams {
  firstName?: string,
  lastName?: string,
  email?: string,
  kind: AccountKind,
  uid: string,
  password?: string,
}
