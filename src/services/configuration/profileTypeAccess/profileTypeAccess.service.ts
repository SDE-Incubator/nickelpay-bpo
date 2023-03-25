import {apiClient} from '../../apiClient'
import {
  GetProfileTypeAccessRequest,
  ProfileAccess,
} from './types/profileTypeAccess'

const getProfileTypeAccess = async ({
  id,
}: GetProfileTypeAccessRequest): Promise<ProfileAccess> => {
  const {data} = await apiClient<ProfileAccess>({
    method: 'GET',
    base: 'account',
    url: `/typeaccess/${id}`,
    headers: {
      'Tenant-Key': process.env.NEXT_PUBLIC_TENANT_KEY,
      'Platform-Enabled': 'backoffice',
    },
  })

  return data
}

export {getProfileTypeAccess}
