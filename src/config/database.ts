require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })

export default {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME
}
