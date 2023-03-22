import {apiClient} from '../../apiClient'
import {GetProfileTypeAccessResponse} from './profileAccess'

async function getProfileAccessTypeAccess(): Promise<GetProfileTypeAccessResponse> {
  const {data} = await apiClient<GetProfileTypeAccessResponse>({
    method: 'GET',
    base: 'account',
    url: '/typeaccess',
    headers: {
      'Tenant-Key': process.env.NEXT_PUBLIC_TENANT_KEY,
      platform_enabled: 'backoffice',
    },
  })

  return data
}

export {getProfileAccessTypeAccess}
