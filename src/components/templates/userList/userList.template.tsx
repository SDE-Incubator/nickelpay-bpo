import {useMemo} from 'react'
import MUIDataTable, {debounceSearchRender} from 'mui-datatables'
import Link from 'next/link'

import * as Styles from './userList.styles'
import {useUsers} from '@/src/hooks/useUsers'
import {useRouter} from 'next/router'
import {TypeAccess} from '@/src/services/configuration/users/getUsers'
import {orderBy, set} from 'lodash'

export function UserListTemplate() {
  const {push} = useRouter()

  const {data, isLoading, page, onNextPage, setSearch, setOrderBy} = useUsers()

  const columns = useMemo(
    () => [
      {
        label: 'Nome',
        name: 'name',
        options: {
          filter: false,
          customBodyRender: (value: string) => value,
          sortThirdClickReset: true,
        },
      },
      {
        label: 'Email',
        name: 'email',
        options: {
          filter: false,
          sortThirdClickReset: true,
          customBodyRender: (value: string) => value,
        },
      },
      {
        label: 'Perfil',
        name: 'typeAccess',
        options: {
          filter: false,
          sortThirdClickReset: true,
          customBodyRender: (values: TypeAccess[]) =>
            values.map(value => value.name).join(', '),
        },
      },
      {
        label: 'Status',
        name: 'status',
        options: {
          filter: false,
          sortThirdClickReset: true,
          customBodyRender: (value: string) => value,
        },
      },
    ],
    []
  )

  const options = {
    search: true,
    customSearchRender: debounceSearchRender(500),
    onSearchChange: (value: string) => {
      const searchText = value || ''
      setSearch(searchText)
    },
    rowsPerPageOptions: [data?.meta?.items_per_page ?? 15],
    rowsPerPage: data?.meta?.items_per_page ?? 15,
    count: data?.meta?.total_count,
    filterType: 'dropdown',
    page: page,
    download: false,
    print: false,
    viewColumns: false,
    serverSide: true,
    checkbox: false,
    selectableRows: 'none',
    onRowClick: (_, {dataIndex}) =>
      push(`/usuarios/${data?.results[dataIndex]?._id}`),
    onTableChange: (action, tableState) => {
      console.log({action, tableState})
      switch (action) {
        case 'changePage':
          onNextPage(tableState.page)
          break
        case 'sort':
          const sortOrder: any =
            tableState.sortOrder.direction === 'none'
              ? {name: 'createdAt', direction: 'desc'}
              : tableState.sortOrder
          setOrderBy(sortOrder)
          break
        case 'resetFilters':
          setOrderBy({name: 'createdAt', direction: 'desc'})
      }
    },
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
            data={data?.results ?? []}
            columns={columns}
            options={options}
          />
        </Styles.Main>
      </Styles.Content>
    </Styles.Container>
  )
}
