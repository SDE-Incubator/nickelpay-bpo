import MUIDataTable from 'mui-datatables'

import Link from 'next/link'
import * as Styles from './userList.styles'

const columns = ['Nome', 'Email', 'Perfil', 'Status']
const data = [
  ['Joe James', 'andremerli74@gmail.com', 'Master', 'Ativo'],
  ['John Walsh', 'zxhbpg@jmurip.com	', 'Admistrador', 'Inativo'],
  ['Bob Herm', 'pmlxew@veracg.com	', 'Analista', 'Ativo'],
  ['James', 'cgbvud@lxvhhq.com', 'Master', 'Ativo'],
  ['Houston', 'cgbvud@lxvhhq.com', 'Master', 'Ativo'],
  ['ston', 'cgbvud@lxvhhq.com', 'Master', 'Ativo'],
  ['James Houston', 'cgbvud@lxvhhq.com', 'Master', 'Ativo'],
]
const options = {
  filterType: 'dropdown',
  download: false,
  print: false,
  viewColumns: false,
  checkbox: false,
  pagination: false,
  selectableRows: false,
}

export function UsersListTemplate() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <div>
            <Styles.TextContent>
              <Styles.Title variant="h5">Usuarios</Styles.Title>

              <div>
                <Link href="">Configuraçoes</Link>
                <Styles.Text>Usuários</Styles.Text>
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
