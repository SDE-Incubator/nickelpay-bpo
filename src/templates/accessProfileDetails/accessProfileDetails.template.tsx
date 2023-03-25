import {useRouter} from 'next/router'
import Link from 'next/link'
import {useQuery} from '@tanstack/react-query'

import {LeftArrowIcon} from '@/public'
import {modulesAccessControl} from './modulesAccessControl'

import {Button} from '@/src/components/button'
import {getProfileTypeAccess} from '@/src/services/configuration/profileTypeAccess'
import {Permission, PermissionKey} from './accessProfileDetails'
import {Row} from '@/src/components/row/row.component'
import * as Styles from './accessProfileDetails.styles'

export function AccessProfileDetailsTemplate() {
  const {push} = useRouter()
  const {query} = useRouter()

  const {data, isLoading} = useQuery({
    queryKey: ['typeAccess'],
    queryFn: async () => {
      if (!query?.id) return
      return getProfileTypeAccess({id: String(query.id)})
    },
  })

  const permissionObjects: Permission[] =
    data?.permissions?.map(permission => {
      const [id, action] = permission.split('/')
      return {
        id,
        action: action as PermissionKey,
      }
    }) || []

  const handleNavigate = () => {
    push('/perfis-de-acesso')
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <div>
            <Styles.ButtonSvg onClick={handleNavigate}>
              <LeftArrowIcon />
            </Styles.ButtonSvg>
            <Styles.TextContent>
              <Styles.Title variant="h5">{data?.name}</Styles.Title>

              <div>
                <Link href="/perfis-de-acesso">Configuraçoes</Link>
                <Styles.Text>Perfis de Acesso</Styles.Text>
                <Styles.Text>{data?.name}</Styles.Text>
              </div>
            </Styles.TextContent>
          </div>

          <Button
            width="11.25rem"
            variant="contained"
            bgcolor="#756B6B"
            bghover="#303F9F"
          >
            Editar dados
          </Button>
        </Styles.Header>

        <Styles.ContainerTable>
          <Styles.ContentTable stickyHeader>
            <Styles.TableHeader>
              <Styles.Row>
                <Styles.Cell align="right"></Styles.Cell>
                <Styles.Cell align="left">Ver listagem</Styles.Cell>
                <Styles.Cell align="left">Ver detalhes</Styles.Cell>
                <Styles.Cell align="left">Criar</Styles.Cell>
                <Styles.Cell align="left">Editar</Styles.Cell>
                <Styles.Cell align="left">Deletar</Styles.Cell>
              </Styles.Row>
            </Styles.TableHeader>

            <Styles.Body>
              {modulesAccessControl.map(module => (
                <Row
                  key={module.id}
                  item={module}
                  permissions={permissionObjects}
                />
              ))}
            </Styles.Body>
          </Styles.ContentTable>
        </Styles.ContainerTable>
      </Styles.Content>
    </Styles.Container>
  )
}
