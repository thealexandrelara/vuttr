import { Request, Response } from 'express'
import { GenerateJwtToken } from './services'

class AuthController {
  public async signIn (req: Request, res: Response) : Promise<Response> {
    const { user } = req
    const generateTokenService = new GenerateJwtToken()
    const token = await generateTokenService.execute(user)

    return res.json({ token })
  }
}

export default new AuthController()
