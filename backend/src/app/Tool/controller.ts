import { Response } from 'express'

import { ApplicationRequest } from '../../contracts/ApplicationRequest'

import ToolModel from './model'
import ToolRepository from './repository'
import { CreateTool, GetAllTools, GetToolById, RemoveToolByIdAndUser } from './services'

class ToolController {
  public async index (req: ApplicationRequest, res: Response) : Promise<Response> {
    const { userId } = req
    const repository = new ToolRepository({ model: ToolModel })
    const getAllToolsService = new GetAllTools({ repository })
    const tools = await getAllToolsService.execute({ requestQuery: req.query }, userId)

    return res.json(tools)
  }

  public async store (req: ApplicationRequest, res: Response) : Promise<Response> {
    const { body, userId } = req
    const repository = new ToolRepository({ model: ToolModel })
    const createToolService = new CreateTool({ repository })
    const tool = await createToolService.execute(body, userId)

    return res.status(201).json(tool)
  }

  public async show (req: ApplicationRequest, res: Response) : Promise<Response> {
    const { params: { id }, userId } = req
    const repository = new ToolRepository({ model: ToolModel })
    const getToolByIdService = new GetToolById({ repository })
    const tool = await getToolByIdService.execute(id, userId)

    return res.json(tool)
  }

  public async destroy (req: ApplicationRequest, res: Response) : Promise<Response> {
    const { params: { id }, userId } = req
    const repository = new ToolRepository({ model: ToolModel })
    const removeToolByIdAndUserService = new RemoveToolByIdAndUser({ repository })
    const tool = await removeToolByIdAndUserService.execute(id, userId)

    return res.json(tool)
  }
}

export default new ToolController()
