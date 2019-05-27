import { Request, Response } from 'express'
import UserModel from './model'
import UserRepository from './repository'
import { CreateUser, GetAllUsers } from './services'

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
    const createUserService = new CreateUser({ repository })
    const user = await createUserService.execute(body)

    return res.json(user)
  }

  public async update () {}

  public async destroy () {}
}

export default new UserController()
