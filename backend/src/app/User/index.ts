import * as Services from './services'

export { default as UserModel, UserDocument } from './model'
export { default as UserRoutes } from './routes'
export { default as UserController } from './controller'
export { UserRepository } from './repository'

export const UserServices = Services
