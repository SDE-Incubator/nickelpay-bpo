import { AxiosRequestConfig } from 'axios'

export type BaseTypes = 'access' | 'account' | 'transactions'

export interface RequestConfig extends AxiosRequestConfig {
  base?: BaseTypes
}
