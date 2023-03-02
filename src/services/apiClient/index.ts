import axios from 'axios'
import {BaseTypes, RequestConfig} from './apiClient'

const ACCESS_API_URL = process.env.NEXT_PUBLIC_ACCESS_API_URL as 'access'

const api = axios.create({
  timeout: 1000 * 60,
})

const baseUrls: Record<BaseTypes, string> = {
  access: ACCESS_API_URL,
  account: '',
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

  const headers = {...config.headers, 'Cache-Control': 'no-cache'}

  return api.request<T>({...config, ...headers})
}
