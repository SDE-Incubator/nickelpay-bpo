import {apiClient} from '@/src/services/apiClient'
import {GetUserRequest, GetUserResponse, GetUserReturn} from './getUser'

export const getUser = async ({id}: GetUserRequest): Promise<GetUserReturn> => {
  const {data} = await apiClient<GetUserResponse>({
    method: 'GET',
    base: 'account',
    url: `/analyst/${id}`,
    headers: {
      'Tenant-Key': process.env.NEXT_PUBLIC_TENANT_KEY,
    },
  })

  const formattedData = {
    ...data,
    deactivated: data.deactivated ? 'Inativo' : 'Ativo',
  }

  return formattedData as GetUserReturn
}
