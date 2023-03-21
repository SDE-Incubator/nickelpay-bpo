import {SvgIconProps} from '@mui/material'
import {ElementType} from 'react'
import {
  AccountsIcon,
  AnalysisIcon,
  CustomizationIcon,
  FinancesIcon,
  ConfigurationIcon,
  ClipboardListIcon,
  CheckShieldIcon,
} from '../../../public'

export const RoutesPath = {
  PROFILE: '/profile',
  PROFILE_UPDATE_PASSWORD: '/profile/atualizar-senha',
  DASHBOARD: '/dashboard',
  ACCOUNT_ANALYSIS: '/analise/analise-de-contas',
  TRANSACTION_ANALYSIS: '/analise/analise-de-transacoes',
  CLIENTS: '/conta/clientes',
  TRANSACTIONS: '/conta/transacoes',
  AUTHORIZATION: '/conta/autorizacoes',
  DIGITAL_ACCOUNTS: '/conta/contas-digitais',
  LIMITS_AND_TIMES: '/customizacao/limites-e-horarios',
  TAXES: '/customizacao/tarifas',
  CUSTOM_TAXES: '/customizacao/tarifas-personalizadas',
  CASH_IN: '/financeiro/entradas',
  CASH_OUT: '/financeiro/saidas',
  ACCOUNTANCY_REPORT: '/financeiro/relatorio-contabil',
  BATCH_CASH_IN: '/financeiro/lote-entrada',
  BATCH_CASH_IN_DETAILS: '/financeiro/lote-entrada/detalhe',
  BATCH_CASH_OUT: '/financeiro/lote-saida',
  CONFIGURATIONS: '/configuracoes',
  CREATE_ACCESS_PROFILE: '/configuracoes/novo-perfil-de-acesso',
  DETAILS_ACCESS_PROFILE: '/detalhes-perfil-de-acesso',
  EDIT_ACCESS_PROFILE: '/editar-perfil-de-acesso',
  ANALYSTS: '/configuracoes/analistas',
  NOT_FOUND_PAGE: '/404',
  FORGET_PASSWORD: '/esqueci-senha',
  PRE_AUTHORIZATION_ANALYSIS: '/analise/analise-de-pre-autorizacoes',
  CONTROL_CENTER: '/bpo/controle-de-centros',
}

export type SideBarRoutesProps = {
  name: string
  submenu: SubmenuProps[]
  Icon: (props: SvgIconProps) => JSX.Element
  children: JSX.Element
}

export type SubmenuProps = {
  path: string
  name: string
  Icon: ElementType
}

export const sideBarRoutes: SideBarRoutesProps[] = [
  // ANALYSIS
  {
    // testId: 'analysis',
    name: 'Análise',
    Icon: AnalysisIcon,
    submenu: [
      {
        path: '/dashboard',
        name: 'Análise de contas',
        Icon: AnalysisIcon,
        // permissions: ['analyse-accounts/list'],
      },
      {
        path: '/',
        name: 'Análise de transações',
        Icon: AnalysisIcon,
        // permissions: ['analyse-transactions/list'],
      },
      {
        path: '/',
        name: 'Análise de pré-autorização',
        Icon: AnalysisIcon,
        // permissions: ['analyse-pre-authorization/list'],
      },
    ],
  },
  // ACCOUNTS
  {
    name: 'Contas',
    Icon: AccountsIcon,
    submenu: [
      {
        path: '/',
        name: 'Clientes',
        Icon: AccountsIcon,
        // permissions: ['clients/list'],
      },
      {
        path: '/',
        name: 'Transações',
        Icon: AccountsIcon,
        // permissions: ['transactions/list'],
      },
      {
        path: '/',
        name: 'Autorizações',
        Icon: AccountsIcon,
        // permissions: ['authorization/list'],
      },
      {
        path: '/',
        name: 'Contas digitais',
        Icon: AccountsIcon,
        // permissions: ['digital-accounts/list'],
      },
    ],
  },
  // CUSTOMIZATION
  {
    name: 'Customização',
    Icon: CustomizationIcon,
    submenu: [
      {
        path: '/',
        Icon: CustomizationIcon,
        name: 'Limite e horário',
        // permissions: ['limits-hours/list'],
      },
      {
        path: '/tarifas',
        name: 'Tarifas',
        Icon: CustomizationIcon,
        // permissions: ['taxes/list'],
      },
      {
        path: '/tarifas-personalizadas',
        name: 'Tarifas personalizadas',
        Icon: CustomizationIcon,
        // permissions: ['taxes-personalize/list'],
      },
    ],
  },
  // FINANCE
  {
    name: 'Financeiro',
    Icon: FinancesIcon,
    submenu: [
      {
        path: '/',
        name: 'Entradas',
        Icon: FinancesIcon,
        // permissions: ['finance-entrance/list'],
      },
      {
        path: '/',
        name: 'Saídas',
        Icon: FinancesIcon,
        // permissions: ['finance-exit/list'],
      },
      // {
      //   path: RoutesPath.CONTROL_CENTER,
      //   name: 'Centralizador',
      //   Icon: FinancesIcon,
      // permissions: ['control-center/list'],
      // },
      {
        path: '/',
        name: 'Relatório contábil',
        Icon: FinancesIcon,
        // permissions: ['report-finance/list'],
      },
      {
        path: '/',
        name: 'Lote de entrada',
        Icon: FinancesIcon,
        // permissions: ['batch-cash-in/list'],
      },
      {
        path: '/',
        name: 'Lote de saída',
        Icon: FinancesIcon,
        // permissions: ['batch-cash-out/list'],
      },
    ],
  },
  // CONFIGURATIONS
  {
    name: 'Configurações',
    Icon: ConfigurationIcon,
    submenu: [
      {
        path: '/perfis-de-acesso',
        name: 'Perfis de acesso',
        Icon: ClipboardListIcon,
        // permissions: ['settings-access/list'],
      },
      {
        path: `/usuarios`,
        name: 'Usuários',
        Icon: AccountsIcon,
        // permissions: ['settings-access/list'],
      },
      {
        path: `/`,
        name: 'Produtos e Serviços',
        Icon: CheckShieldIcon,
        // permissions: ['settings-providers/list'],
      },
      {
        path: `/`,
        name: 'Providers',
        Icon: CheckShieldIcon,
        // permissions: ['settings-providers/list'],
      },
    ],
  },
]
