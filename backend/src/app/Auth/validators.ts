import { Joi } from 'celebrate'

const signIn = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  }
}

const oauthSignIn = {
  query: {
    access_token: Joi.string().required()
  }
}

export default {
  signIn,
  oauthSignIn
}
