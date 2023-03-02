import {apiClient} from '../../apiClient'
import {
  GetCodeToRecoverPasswordRequest,
  GetCodeToRecoverPasswordResponse,
  SetCodeToRecoverPasswordRequest,
  SetNewPasswordRequest,
} from './recoverPassword'

async function getCodeToRecoverPassword({
  username,
}: GetCodeToRecoverPasswordRequest) {
  const {data} = await apiClient<GetCodeToRecoverPasswordResponse>({
    method: 'POST',
    base: 'access',
    url: '/forgot',
    data: {username, type: 'email'},
    headers: {
      'Tenant-Key': process.env.NEXT_PUBLIC_TENANT_KEY,
    },
  })

  return data
}

async function setCodeToRecoverPassword({
  code,
}: SetCodeToRecoverPasswordRequest) {
  const {data} = await apiClient({
    method: 'GET',
    base: 'access',
    url: `/forgot/${code}`,
  })

  return data
}

async function setNewPassword({
  code,
  newPassword1,
  newPassword2,
  token,
}: SetNewPasswordRequest) {
  const {data} = await apiClient({
    method: 'POST',
    base: 'access',
    url: '/recover',
    data: {
      code,
      new_password1: newPassword1,
      new_password2: newPassword2,
      token,
    },
  })

  return data
}

export {getCodeToRecoverPassword, setCodeToRecoverPassword, setNewPassword}
