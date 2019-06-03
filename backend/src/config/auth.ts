require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })

export default {
  secret: process.env.JWT_TOKEN_KEY,
  ttl: '1d',
  google: {
    clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET
  },
  facebook: {
    clientId: process.env.FACEBOOK_OAUTH_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_OAUTH_CLIENT_SECRET
  }
}
