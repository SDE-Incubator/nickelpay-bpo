import {apiClient} from '../../apiClient'
import {
  LoginConfirmationCodeRequest,
  LoginConfirmationCodeResponse,
  LoginRequest,
} from './login'

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

const loginConfirmationCode = async ({
  code,
}: LoginConfirmationCodeRequest): Promise<LoginConfirmationCodeResponse> => {
  const {data} = await apiClient<LoginConfirmationCodeResponse>({
    method: 'POST',
    base: 'access',
    url: '/login/mfa',
    data: {code},
  })

  localStorage.setItem(`@nickelpay/access_token`, data.access_token)
  localStorage.setItem(`@nickelpay/refresh_token`, data.refresh_token)

  return data
}

export {login, loginConfirmationCode}
