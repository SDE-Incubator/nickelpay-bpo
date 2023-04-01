import {apiClient} from '@/src/services/apiClient'
import {GetGeneralTaxesResponse} from './getGeneralTaxes'

export const getGeneralTaxes = async (): Promise<GetGeneralTaxesResponse> => {
  const {data} = await apiClient<GetGeneralTaxesResponse>({
    method: 'GET',
    base: 'account',
    url: '/tax/general?limit=500',
  })

  return data
}
