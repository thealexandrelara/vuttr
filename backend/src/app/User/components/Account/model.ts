import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcrypt'
import { AccountKind } from './enums'
import { Account } from './interfaces'

export interface AccountDocument extends Document, Account {
  compareHash(candidatePassword: string) : Promise<boolean>
}

export const AccountSchema = new Schema({
  kind: {
    type: String,
    enum: Object.values(AccountKind)
  },
  uid: String,
  password: {
    type: String,
    minlength: 6,
    select: false
  }
})

AccountSchema.pre<AccountDocument>('save', async function () : Promise<void> {
  const account = this

  if (account.kind === AccountKind.Local && account.isModified('password')) {
    account.password = await bcrypt.hash(account.password, 8)
  }
})

AccountSchema.methods = {
  compareHash: function (candidatePassword) : Promise<boolean> {
    const account = this

    return new Promise((resolve, reject) : void => {
      bcrypt.compare(candidatePassword, account.password, (err, isMatch) : void => {
        if (err) {
          reject(err)
        } else {
          resolve(isMatch)
        }
      })
    })
  }
}
