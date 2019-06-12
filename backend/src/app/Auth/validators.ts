import { Joi } from 'celebrate'

const signIn = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  }
}

export default {
  signIn
}
