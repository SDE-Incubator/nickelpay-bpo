import {apiClient} from '../../apiClient'
import {LoginRequestProps} from './login'

async function login({username, password}: LoginRequestProps) {
  const {data} = await apiClient({
    method: 'POST',
    base: 'access',
    url: '/login',
    data: {username, password},
    headers: {
      'Tenant-Key': process.env.NEXT_PUBLIC_TENANT_KEY,
      platform_enabled: 'backoffice',
    },
  })

  return data
}

export {login}
