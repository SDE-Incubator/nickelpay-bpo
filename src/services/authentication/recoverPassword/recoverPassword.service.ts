import {apiClient} from '../../apiClient'
import {
  GetCodeToRecoverPasswordRequest,
  SetCodeToRecoverPasswordRequest,
} from './recoverPassword'

async function getCodeToRecoverPassword({
  username,
}: GetCodeToRecoverPasswordRequest) {
  const {data} = await apiClient({
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

export {getCodeToRecoverPassword, setCodeToRecoverPassword}
