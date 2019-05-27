import { Joi } from 'celebrate'

const store = {
  body: {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  }
}

export default {
  store
}
