
import GenerateJwtToken from '../../GenerateJwtToken'

describe('Authentication', () : void => {
  describe('services', () : void => {
    it('should generate JWT token', async () : Promise<void> => {
      const user = { _id: 'abc12345' }
      const generateJwtToken = new GenerateJwtToken()
      const token = await generateJwtToken.execute(user)

      expect(token).toBeTruthy()
    })
  })
})
