import faker from 'faker'
import mongoose from 'mongoose'
import { UserModel } from '../app/User'
import { ToolModel } from '../app/Tool'
import { factory as _factory } from 'factory-girl'
import { AccountKind } from '../app/User/components/Account'

const email = faker.internet.email()
_factory.define('User', UserModel, {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email,
  accounts: [{ uid: email, kind: AccountKind.Local, password: faker.internet.password() }]
})

_factory.define('Tool', ToolModel, {
  title: faker.company.companyName(),
  link: faker.internet.url(),
  description: faker.lorem.sentence(),
  user: mongoose.Types.ObjectId(),
  tags: new Array(3).fill(null).map(() : string => faker.random.word())
})

export const factory = _factory
