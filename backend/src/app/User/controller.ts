import { Request, Response } from 'express'
import UserModel from './model'
import { UserRepository } from './repository'
import { CreateUserAccount, GetAllUsers } from './services'
import { AccountKind } from './components/Account'
import { AuthServices } from '../Auth'

class UserController {
  public async index (req: Request, res: Response) : Promise<Response> {
    const repository = new UserRepository({ model: UserModel })
    const getAllUsersService = new GetAllUsers({ repository })
    const users = await getAllUsersService.execute()

    return res.json(users)
  }

  public async store (req: Request, res: Response) : Promise<Response> {
    const { body } = req
    const repository = new UserRepository({ model: UserModel })
    const createUserAccountService = new CreateUserAccount({ repository })
    const user = await createUserAccountService.execute({ ...body, kind: AccountKind.Local, uid: body.email })
    const generateTokenService = new AuthServices.GenerateJwtToken()
    const token = await generateTokenService.execute(user)

    return res.json({ token })
  }
}

export default new UserController()
