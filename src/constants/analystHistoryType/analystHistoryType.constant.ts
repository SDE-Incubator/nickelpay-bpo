import {AnalystHistoryValue} from './analystHistoryType'

export const analystHistoryType: AnalystHistoryValue = {
  CREATE: 'criou este usuário.',
  ACTIVE: 'ativou este usuário.',
  DEACTIVE: 'desativou este usuário.',
  ADD_TYPEACCESS: 'adicionou acesso a este usuário.',
  REMOVE_TYPEACCESS: 'removeu acesso deste usuário.',
  UPDATE_DATA: 'atualizou informações deste usuário.',
} as const
