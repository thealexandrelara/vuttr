require('dotenv').config()

export default {
  facebook: {
    appId: process.env.REACT_APP_OAUTH_FACEBOOK_APP_ID,
  },
  google: {
    clientId: process.env.REACT_APP_OAUTH_GOOGLE_CLIENT_ID,
  },
}
