type SubmodulesProps = {
  name: string
  id: string
}

export type ModulesAccessControlProps = {
  name: string
  id: string
  submodules: SubmodulesProps[]
}


export const modulesAccessControl = [
  {
    name: 'Todos',
    id: 'all',
    submodules: [],
  },
  {
    name: 'Análise',
    id: 'analyse',
    
    submodules: [
      {
        name: 'Análise de contas',
        id: 'analyse-accounts',
      },
      {
        name: 'Análise de transações',
        id: 'analyse-transactions',
      },
      {
        name: 'Análise de pré-autorização',
        id: 'analyse-pre-authorization',
      },
    ],
  },
  {
    name: 'Contas',
    id: 'accounts',

    submodules: [
      {
        name: 'Clientes',
        id: 'clients',
      },
      {
        name: 'Transações',
        id: 'transactions',
      },
      {
        name: 'Autorizações',
        id: 'authorization',
      },
      {
        name: 'Contas Digitais',
        id: 'digital-accounts',
      },
    ],
  },
  {
    name: 'Customização',
    id: 'customization',

    submodules: [
      {
        name: 'Limites e Horários',
        id: 'limits-hours',
      },
      {
        name: 'Tarifas',
        id: 'taxes',
      },
      {
        name: 'Tarifas personalizadas',
        id: 'taxes-personalize',
      },
      {
        name: 'Conta',
        id: 'accounts',
      },
    ],
  },
  {
    name: 'Financeiro',
    id: 'finance',
    submodules: [
      {
        name: 'Entradas',
        id: 'finance-entrance',
      },
      {
        name: 'Saídas',
        id: 'finance-exit',
      },
      {
        name: 'Relatório contábil',
        id: 'report-finance',
      },
      {
        name: 'Lote de Entrada',
        id: 'batch-cash-in',
      },
      {
        name: 'Lote de Saída',
        id: 'batch-cash-out',
      },
      {
        name: 'Centralizador',
        id: 'control-center',
      },
    ],
  },
  {
    name: 'Configurações',
    id: 'settings',

    submodules: [
      {
        name: 'Perfis de Acesso',
        id: 'settings-access',
      },
      {
        name: 'Analistas',
        id: 'settings-access',
      },
      {
        name: 'Providers',
        id: 'settings-providers',
      },
    ],
  },
];