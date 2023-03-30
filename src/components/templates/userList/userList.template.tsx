import {useMemo} from 'react'
import MUIDataTable from 'mui-datatables'
import Link from 'next/link'

import {TypeAccess} from '@/src/services/configuration/users/getUsers'
import * as Styles from './userList.styles'
import {useUsers} from '@/src/hooks/useUsers'
import {useRouter} from 'next/router'

export function UserListTemplate() {
  const {push} = useRouter()

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

  const options = {
    filterType: 'dropdown',
    download: false,
    print: false,
    viewColumns: false,
    checkbox: false,
    selectableRows: 'none',
    onRowClick: (_, {dataIndex}) =>
      push(`/usuarios/${data?.results[dataIndex]?._id}`),
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <div>
            <Styles.TextContent>
              <Styles.Title variant="h5">Usuários</Styles.Title>
              <div>
                <Link href="">Configurações</Link>
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
            serverSide={true}
            options={options}
          />
        </Styles.Main>
      </Styles.Content>
    </Styles.Container>
  )
}
