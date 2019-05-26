import { Joi } from 'celebrate'

const store = {
  body: {
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required()
  }
}

const update = {
  body: {
    title: Joi.string(),
    link: Joi.string(),
    description: Joi.string(),
    tags: Joi.array().items(Joi.string())
  }
}

export default {
  store,
  update
}
