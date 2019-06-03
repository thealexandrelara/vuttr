export { AccountDocument } from './model'

export interface Account {
  kind: string,
  uid: string,
  password?: string,
}
