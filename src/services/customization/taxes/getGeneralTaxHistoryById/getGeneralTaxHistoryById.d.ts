import {DictionaryKeyType} from '@/src/utils/dictionary/dictionary'

export interface GetGeneralTaxHistoryRequest {
  id: string
}

interface TypeAccess {
  _id: string
}

export interface TaxHistory {
  _id: string
  tax_id: {
    _id: string
    price: number
    type: DictionaryKeyType
    createdAt: Date
    updatedAt: Date
    __v: number
  }
  analyst_id: {
    _id: string
    deactivated: boolean
    name: string
    email: string
    user_id: string
    tenant_id: string
    type_access: TypeAccess[]
    createdAt: string
    updatedAt: string
    __v: number
  }
  type: DictionaryKeyType
  price: number
  createdAt: Date
  updatedAt: Date
}

interface TaxHistoryMeta {
  current_page: number
  current_count: number
  total_count: number
  total_pages: number
  items_per_page: number
}

export interface GetGeneralTaxHistoryResponse {
  results: TaxHistory[]
  meta: TaxHistoryMeta
}
