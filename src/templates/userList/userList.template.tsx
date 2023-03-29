import {useMemo} from 'react'
import MUIDataTable from 'mui-datatables'
import Link from 'next/link'

import {TypeAccess} from '@/src/services/configuration/users/getAnalystList'
import * as Styles from './userList.styles'
import {useUsers} from '@/src/hooks/useUsers'

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
  const {data, isLoading, onNextPage, onPrevPage} = useUsers()

  const columns = useMemo(
    () => [
      {
        label: 'Nome',
        name: 'name',
        options: {
          filter: false,
          customBodyRender: (value: string) => value,
        },
      },
      {
        label: 'Email',
        name: 'email',
        options: {
          filter: false,
          customBodyRender: (value: string) => value,
        },
      },
      {
        label: 'Perfil',
        name: 'typeAccess',
        options: {
          filter: false,
          customBodyRender: (values: TypeAccess[]) =>
            values.map(value => value.name).join(', '),
        },
      },
      {
        label: 'Status',
        name: 'status',
        options: {
          filter: false,
          customBodyRender: (value: string) => value,
        },
      },
    ],
    []
  )

  console.log(data)

  if (isLoading) {
    return <p>Loading...</p>
  }

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
          <MUIDataTable
            title="Usuários"
            data={data?.results}
            columns={columns}
            options={options}
          />
        </Styles.Main>
      </Styles.Content>
    </Styles.Container>
  )
}
