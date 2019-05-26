import { Request, Response } from 'express'

class ToolController {
  public async index (req: Request, res: Response) : Promise<Response> {
    return res.json()
  }
  public async store (req: Request, res: Response) : Promise<Response> {
    return res.json()
  }
  public async show () : Promise<void> {}
  public async destroy () : Promise<void> {}
}

export default new ToolController()
