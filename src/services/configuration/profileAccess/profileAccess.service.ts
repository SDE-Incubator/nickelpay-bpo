import {apiClient} from '../../apiClient'

async function getProfileAccessTypeAccess() {
  const {data} = await apiClient({
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
