import {apiClient} from '../../apiClient'
import type {GetProfileTypeAccessListResponse} from './types/profileTypeAccess'

async function getProfileTypeAccessList(): Promise<GetProfileTypeAccessListResponse> {
  const {data} = await apiClient<GetProfileTypeAccessListResponse>({
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

export {getProfileTypeAccessList}
