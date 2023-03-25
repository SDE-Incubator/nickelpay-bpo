export type PermissionKey = 'list' | 'detail' | 'update' | 'create' | 'delete'

export type Permission = {
  id: string
  action: PermissionKey
}
