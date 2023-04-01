import {DictionaryKeyType} from '@/src/utils/dictionary/dictionary'

export interface GeneralTax {
  _id: string
  type: DictionaryKeyType
  price: number
  createdAt: Date
  updatedAt: Date
}

interface GeneralTaxMeta {
  current_page: number
  current_count: number
  total_count: number
  total_pages: number
  items_per_page: number
}

export interface GetGeneralTaxesResponse {
  results: GeneralTax[]
  meta: GeneralTaxMeta
}
