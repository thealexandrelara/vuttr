import { Document, Schema, model } from 'mongoose'
import { User } from './interfaces'

export interface UserDocument extends Document, User {}

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
}, { timestamps: true })

const UserModel = model<UserDocument>('User', UserSchema)

export default UserModel
