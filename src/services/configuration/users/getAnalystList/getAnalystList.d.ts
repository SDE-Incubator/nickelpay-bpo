export interface AnalystListRequest {
  q?: string
  page?: number
  limit?: number
  orderBy?: string
}

export interface AnalystListMetadata {
  current_page: 0
  current_count: 15
  total_count: 17
  total_pages: 2
  items_per_page: 15
}

interface TypeAccess {
  _id: string
  name?: string
}

export interface AnalystResult {
  _id: string
  deactivated: boolean
  name: string
  email: string
  user_id: string
  tenant_id: string
  type_access: TypeAccess[]
  createdAt: Date
  updatedAt: Date
  __v: number
}

export interface GetAnalystListResponse {
  results: AnalystResult[]
  meta: AnalystListMetadata
}

export interface AnalystFormatted {
  name: string
  email: string
  typeAccess: TypeAccess[]
  status: 'Ativo' | 'Inativo'
}

export interface GetAnalystListReturn {
  meta: AnalystListMetadata
  data: AnalystFormatted[]
}
