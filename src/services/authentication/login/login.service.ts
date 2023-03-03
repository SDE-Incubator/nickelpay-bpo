import {apiClient} from '../../apiClient'
import {LoginConfirmationCodeRequest, LoginRequest} from './login'

async function login({username, password}: LoginRequest) {
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

async function loginConfirmationCode({code}: LoginConfirmationCodeRequest) {
  const {data} = await apiClient({
    method: 'POST',
    base: 'access',
    url: '/login/mfa',
    data: {code},
  })

  return data
}

export {login, loginConfirmationCode}
