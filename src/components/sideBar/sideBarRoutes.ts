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
  DASHBOARD: '/dashboard',
}

// export const RoutesList = [
//   {
//     path: RoutesPath.DASHBOARD,
//     name: 'Home',
//     component: Dashboard,
//     exact: true,
//     permissions: [],
//   }

// ];

export type SideBarRoutesProps = {
  name: string
  submenu: SubmenuProps[]
  Icon: (props: SvgIconProps) => JSX.Element
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
        path: '/',
        name: 'Tarifas',
        Icon: CustomizationIcon,
        // permissions: ['taxes/list'],
      },
      {
        path: '/',
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
        path: '/',
        name: 'Perfis de acesso',
        Icon: ClipboardListIcon,
        // permissions: ['settings-access/list'],
      },
      {
        path: `/`,
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
