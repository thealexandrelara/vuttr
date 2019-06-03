
import Database from '../integration/../../../../../../__tests__/utils/database'
import { ToolRepository, ToolModel } from '../../../../Tool'
import { GetToolById, CreateTool } from '../../../services'
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

      it('should return a created tool by id', async () : Promise<void> => {
        const user = await factory.create('User')
        const repository = new ToolRepository({ model: ToolModel })
        const createToolService = new CreateTool({ repository: repository })
        const tool = await createToolService.execute({
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

        const getToolByIdService = new GetToolById({ repository: repository })
        const retrievedTool = await getToolByIdService.execute(tool.id)

        expect(retrievedTool.id).toBe(tool.id)
      })
    })
  })
})
