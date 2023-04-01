import {apiClient} from '@/src/services/apiClient'
import {
  GetGeneralTaxHistoryRequest,
  GetGeneralTaxHistoryResponse,
} from './getGeneralTaxHistoryById'

export const getGeneralTaxHistoryById = async ({
  id,
}: GetGeneralTaxHistoryRequest): Promise<GetGeneralTaxHistoryResponse> => {
  const {data} = await apiClient<GetGeneralTaxHistoryResponse>({
    method: 'GET',
    base: 'account',
    url: `/tax/general/${id}/history?limit=500`,
  })

  return data
}
