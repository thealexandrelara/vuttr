import axios from 'axios'
import https from 'https'
import store from '../store'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'


const api = axios.create({
  baseURL: 'https://api.localhost',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
})

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth

  const headers = { ...config.headers }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return { ...config, headers }
})

export default api
