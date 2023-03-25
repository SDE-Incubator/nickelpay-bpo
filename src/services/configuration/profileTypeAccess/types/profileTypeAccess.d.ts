export interface GetProfileAccessTypeAccessMeta {
  current_page: number
  current_count: number
  total_count: number
  total_pages: number
  items_per_page: number
}

export interface ProfileAccess {
  _id: string
  name: string
  permissions: string[]
  platform_enabled: string | 'backoffice'
  tenant_id: string
  updatedAt: Date
  createdAt: Date
}

export interface GetProfileTypeAccessRequest {
  id: string
}

export interface GetProfileTypeAccessListResponse {
  meta: GetProfileAccessTypeAccessMeta
  results: ProfileAccess[]
}
