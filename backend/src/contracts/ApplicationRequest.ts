import { Request } from 'express'

export interface ApplicationRequest extends Request {
  userId: string,
}
