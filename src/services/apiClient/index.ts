import {BASE_COOKIE} from '@/src/constants'
import axios from 'axios'
import {BaseTypes, RequestConfig} from './apiClient'

const ACCESS_API_URL = process.env.NEXT_PUBLIC_ACCESS_API_URL as 'access'
const ACCOUNT_DEV = process.env.NEXT_PUBLIC_ACCOUNT_DEV as 'account'

const COOKIE_ACCESS_TOKEN = `${BASE_COOKIE}access_token`

const api = axios.create({
  timeout: 1000 * 60,
})

const baseUrls: Record<BaseTypes, string> = {
  access: ACCESS_API_URL,
  account: ACCOUNT_DEV,
  transactions: '',
}

export const apiClient = <T>(config: RequestConfig) => {
  if (config.method === 'GET') {
    config.data = ''
  }

  if (config.base) {
    config.baseURL = baseUrls[config.base]
  }

  delete config.base

  api.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem(
    COOKIE_ACCESS_TOKEN
  )}`

  const headers = {
    ...config.headers,
    'Cache-Control': 'no-cache',
  }

  return api.request<T>({...config, ...headers})
}
