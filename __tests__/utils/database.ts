import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

class Database {
  private _mongoServer = new MongoMemoryServer()

  public get server () : MongoMemoryServer {
    return this._mongoServer
  }

  public async connect () : Promise<void> {
    const mongoUri = await this.server.getConnectionString()
    console.log('mongoUri: ', mongoUri)
    await mongoose.connect(mongoUri, { useNewUrlParser: true }, (err) : void => {
      console.log(err)
    })
  }

  public async clearDB () : Promise<void> {
    for (const i in mongoose.connection.collections) {
      await mongoose.connection.collections[i].deleteMany({})
    }
  }

  public async disconnect () : Promise<void> {
    await mongoose.disconnect()
    // await mongoose.connection.close()
    // await this.server.stop()
  }
  // public connect () : Promise<void> {
  //   return new Promise((resolve, reject) : void => {
  //     if (mongoose.connection.readyState === 0) {
  //       mongoose.connect(
  //         `${process.env.DB_HOST}/${process.env.DB_NAME}`,
  //         { useNewUrlParser: true },
  //         function (err) : void {
  //           if (err) {
  //             reject(err)
  //           }
  //           resolve()
  //         }
  //       )
  //     } else {
  //       resolve()
  //     }
  //   })
  // }

  // public async clearDB () : Promise<void> {
  //   for (const i in mongoose.connection.collections) {
  //     await mongoose.connection.collections[i].deleteMany({})
  //   }
  // }

  // public async disconnect () : Promise<void> {
  //   await mongoose.disconnect()
  // }
}

export default new Database()
