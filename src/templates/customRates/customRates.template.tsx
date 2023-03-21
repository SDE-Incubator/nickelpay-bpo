import {Button} from '@/src/components/button'
import MUIDataTable from 'mui-datatables'

import * as Styles from './customRates.styles'

const columns = [
  'Nome da tarífa',
  'Descrição',
  'Categoria',
  'Valor',
  'Recorrência',
  'Cobrança',
  '',
]
const data = [
  [
    'Tarifa especial',
    'Essa tarifa será aplicada em lojas parceiras de tal',
    'Cobrança',
    'R$ 5,00',
    'Diária',
    'Inativa',
    <Button
      textcolor="#756B6B"
      width="7rem"
      height="2.5rem"
      bordercolor="#756B6B"
      variant="outlined"
    >
      Ver Mais
    </Button>,
  ],
  [
    'Tarifa especial',
    'Essa tarifa será aplicada em lojas parceiras de tal',
    'Cobrança',
    'R$ 5,00',
    'Diária',
    'Inativa',
    <Button
      textcolor="#756B6B"
      width="7rem"
      height="2.5rem"
      bordercolor="#756B6B"
      variant="outlined"
    >
      Ver Mais
    </Button>,
  ],
  [
    'Tarifa especial',
    'Essa tarifa será aplicada em lojas parceiras de tal',
    'Cobrança',
    'R$ 5,00',
    'Diária',
    'Inativa',
    <Button
      textcolor="#756B6B"
      width="7rem"
      height="2.5rem"
      bordercolor="#756B6B"
      variant="outlined"
    >
      Ver Mais
    </Button>,
  ],
  [
    'Tarifa especial',
    'Essa tarifa será aplicada em lojas parceiras de tal',
    'Cobrança',
    'R$ 5,00',
    'Diária',
    'Inativa',
    <Button
      textcolor="#756B6B"
      width="7rem"
      height="2.5rem"
      bordercolor="#756B6B"
      variant="outlined"
    >
      Ver Mais
    </Button>,
  ],
  [
    'Tarifa especial',
    'Essa tarifa será aplicada em lojas parceiras de tal',
    'Cobrança',
    'R$ 5,00',
    'Diária',
    'Inativa',
    <Button
      textcolor="#756B6B"
      width="7rem"
      height="2.5rem"
      bordercolor="#756B6B"
      variant="outlined"
    >
      Ver Mais
    </Button>,
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

export function CustomRatesTemplate() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <div>
            <Styles.TextContent>
              <Styles.Title variant="h5">Tarifas Personalizadas</Styles.Title>

              <div>
                <Styles.Text>Customização</Styles.Text>
                <Styles.Text>Tarífas personalizadas</Styles.Text>
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
