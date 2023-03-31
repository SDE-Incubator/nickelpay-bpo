export interface GetUserRequest {
  id: string
}

interface TypeAccess {
  _id: string
  name?: string
}

interface UserId {
  _id: string
  name: string
}

interface AnalystId {
  _id: string
  name: string
}

export type HistoryType =
  | 'CREATE'
  | 'ACTIVE'
  | 'DEACTIVE'
  | 'ADD_TYPEACCESS'
  | 'REMOVE_TYPEACCESS'
  | 'UPDATE_DATA'

interface History {
  _id: string
  user_id: UserId
  analyst_id: AnalystId
  type: HistoryType
  createdAt: Date
  updatedAt: Date
  __v: number
}

export interface GetUserResponse {
  _id: string
  email: string
  username: string
  tenant_id: string
  recover_phone: string
  platform_enabled: string[]
  user_id: string
  name: string
  createdAt: Date
  updatedAt: Date
  type_access: TypeAccess[]
  deactivated: boolean
  histories: History[]
}

export interface GetUserReturn extends GetUserResponse {
  deactivated: 'Ativo' | 'Inativo'
}
