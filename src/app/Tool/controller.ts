import { Request, Response } from 'express'
import ToolModel from './model'
import ToolRepository from './repository'
import { CreateTool, GetAllTools } from './services'

class ToolController {
  public async index (req: Request, res: Response) : Promise<Response> {
    const repository = new ToolRepository({ model: ToolModel })
    const getAllToolsService = new GetAllTools({ repository })
    const tools = await getAllToolsService.execute()

    return res.json(tools)
  }
  public async store (req: Request, res: Response) : Promise<Response> {
    const { body } = req
    const repository = new ToolRepository({ model: ToolModel })
    const createToolService = new CreateTool({ repository })
    const tool = await createToolService.execute(body)

    return res.json(tool)
  }
  public async show () : Promise<void> {}
  public async destroy () : Promise<void> {}
}

export default new ToolController()
