import {apiClient} from '@/src/services/apiClient'
import {
  AnalystListRequest,
  GetAnalystListResponse,
  GetAnalystListReturn,
} from './getAnalystList'

export const getAnalystList = async ({
  q = '',
  limit = 15,
  page = 0,
  orderBy = '-createdAt',
}: AnalystListRequest): Promise<GetAnalystListReturn> => {
  const {data} = await apiClient<GetAnalystListResponse>({
    method: 'GET',
    base: 'account',
    url: `/analyst?q=${q}&page=${page}&limit=${limit}&orderBy=${orderBy}`,
    headers: {
      'Tenant-Key': process.env.NEXT_PUBLIC_TENANT_KEY,
      'Platform-Enabled': 'backoffice',
    },
  })

  const analystList: GetAnalystListReturn = {
    meta: data.meta,
    data: data.results.map(result => {
      return {
        name: result.name,
        email: result.email,
        typeAccess: result.type_access,
        status: result.deactivated ? 'Inativo' : 'Ativo',
      }
    }),
  }

  return analystList
}
