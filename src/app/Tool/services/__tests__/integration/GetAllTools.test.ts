
import Database from '../integration/../../../../../../__tests__/utils/database'
import { ToolRepository, ToolModel } from '../../../../Tool'
import { GetAllTools, CreateTool } from '../../../services'
import { factory } from '../../../../../__tests__/factories'

describe('Tool', () : void => {
  describe('services', () : void => {
    describe('GetAllTools', () : void => {
      beforeAll(async () : Promise<void> => {
        await Database.connect()
      })

      afterEach(async () : Promise<void> => {
        await Database.clearDB()
      })

      afterAll(async () : Promise<void> => {
        await Database.disconnect()
      })

      it('should get all created tools from database', async () : Promise<void> => {
        const user = await factory.create('User')
        const repository = new ToolRepository({ model: ToolModel })
        const createToolService = new CreateTool({ repository: repository })
        await createToolService.execute({
          title: 'Notion',
          link: 'https://notion.so',
          description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
          tags: [
            'organization',
            'planning',
            'collaboration',
            'writing',
            'calendar'
          ] }, user.id.toString())
        await createToolService.execute({
          title: 'json-server',
          link: 'https://github.com/typicode/json-server',
          description: 'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
          tags: [
            'api',
            'json',
            'schema',
            'node',
            'github',
            'rest'
          ] }, user.id.toString())

        const getAllToolsService = new GetAllTools({ repository: repository })
        const tools = await getAllToolsService.execute()

        expect(tools).toHaveLength(2)
      })

      it('should get empty array of tools when no tool was created', async () : Promise<void> => {
        const repository = new ToolRepository({ model: ToolModel })
        const getAllToolsService = new GetAllTools({ repository: repository })
        const tools = await getAllToolsService.execute()

        expect(tools).toHaveLength(0)
      })
    })
  })
})
