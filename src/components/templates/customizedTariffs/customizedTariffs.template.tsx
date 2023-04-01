import {Button} from '@/src/components/button'
import MUIDataTable from 'mui-datatables'
import {useRouter} from 'next/router'

import * as Styles from './customRates.styles'

const data = [
  [
    'Tarifa especial',
    'Essa tarifa será aplicada em lojas parceiras de tal',
    'Cobrança',
    'R$ 5,00',
    'Diária',
    'Inativa',
    'Ver mais',
  ],
  [
    'Tarifa especial',
    'Essa tarifa será aplicada em lojas parceiras de tal',
    'Cobrança',
    'R$ 5,00',
    'Diária',
    'Inativa',
    'Ver mais',
  ],
  [
    'Tarifa especial',
    'Essa tarifa será aplicada em lojas parceiras de tal',
    'Cobrança',
    'R$ 5,00',
    'Diária',
    'Inativa',
    'Ver mais',
  ],
  [
    'Tarifa especial',
    'Essa tarifa será aplicada em lojas parceiras de tal',
    'Cobrança',
    'R$ 5,00',
    'Diária',
    'Inativa',
    'Ver mais',
  ],
  [
    'Tarifa especial',
    'Essa tarifa será aplicada em lojas parceiras de tal',
    'Cobrança',
    'R$ 5,00',
    'Diária',
    'Inativa',
    'Ver mais',
  ],
]
const options = {
  filterType: 'dropdown',
  download: false,
  print: false,
  viewColumns: false,
  checkbox: false,
  pagination: false,
  selectableRows: false,
  filter: false,
  search: false,
}

export function CustomizedTariffsTemplate() {
  const {pathname, push} = useRouter()

  const columns = [
    {
      name: 'Nome da tarífa',
    },
    {
      name: 'Descrição',
    },
    {
      name: 'Categoria',
    },
    {
      name: 'Valor',
    },
    {
      name: 'Recorrência',
    },
    {
      name: 'Cobrança',
    },
    {
      name: '',
      options: {
        customBodyRender: (value: string) => (
          <Button
            textcolor="#756B6B"
            width="7rem"
            height="2.5rem"
            bordercolor="#756B6B"
            variant="outlined"
            onClick={() => push(`${pathname}/tarifas`)}
          >
            {value}
          </Button>
        ),
      },
    },
  ]

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <div>
            <Styles.TextContent>
              <Styles.Title variant="h5">Tarifas Personalizadas</Styles.Title>

              <div>
                <Styles.Text>Customização</Styles.Text>
                <Styles.Text>Tarifas personalizadas</Styles.Text>
              </div>
            </Styles.TextContent>
          </div>
        </Styles.Header>

        <Styles.Main>
          <MUIDataTable data={data} columns={columns} options={options} />
        </Styles.Main>
      </Styles.Content>
    </Styles.Container>
  )
}
