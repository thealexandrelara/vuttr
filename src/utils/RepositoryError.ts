import Boom from '@hapi/boom'

export enum RepositoryErrorKind {
  Forbidden = 'FORBIDDEN',
  NotFound = 'NOT_FOUND',
  MissingInfo = 'MISSING_INFO',
}

class RepositoryError extends Error {
  public type : RepositoryErrorKind

  public constructor (message : string, errorType : RepositoryErrorKind) {
    super(message)
    this.type = errorType
  }

  public get httpError () : Boom {
    switch (this.type) {
      case RepositoryErrorKind.Forbidden:
        return Boom.forbidden(this.message)
      case RepositoryErrorKind.NotFound:
        return Boom.notFound(this.message)
      case RepositoryErrorKind.MissingInfo:
        return Boom.badRequest(this.message)
      default:
        return Boom.internal('Erro interno do servidor')
    }
  }
}

export default RepositoryError
