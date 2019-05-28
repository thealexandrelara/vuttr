export { AccountDocument } from './model'

export interface Account {
  kind: string,
  uid: string,
  email: string,
  password: string,
}
