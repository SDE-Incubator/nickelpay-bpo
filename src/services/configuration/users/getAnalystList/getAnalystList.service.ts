import {apiClient} from '@/src/services/apiClient'
import {GetAnalystListResponse} from './getAnalystList'

export const getAnalystList = async (): Promise<GetAnalystListResponse> => {
  const {data} = await apiClient<GetAnalystListResponse>({
    method: 'GET',
    base: 'account',
    url: '/analyst',
    headers: {
      'Tenant-Key': process.env.NEXT_PUBLIC_TENANT_KEY,
      'Platform-Enabled': 'backoffice',
    },
  })

  return data
}
