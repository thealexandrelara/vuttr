import { Joi } from 'celebrate'

const index = {
  query: {
    tag: Joi.string()
  }
}

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

const show = {
  params: {
    id: Joi.string().required()
  }
}

export default {
  index,
  store,
  update,
  show
}
