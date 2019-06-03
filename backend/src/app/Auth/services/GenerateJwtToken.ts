import jwt from 'jsonwebtoken'

import authConfig from '../../../config/auth'

class GenerateJwtToken {
  public async execute (user: { _id: string }) : Promise<string> {
    const token = jwt.sign(
      {
        iss: 'VUTTR',
        sub: user._id,
        iat: Date.now()
      },
      authConfig.secret,
      { expiresIn: authConfig.ttl }
    )

    return token
  }
}

export default GenerateJwtToken
