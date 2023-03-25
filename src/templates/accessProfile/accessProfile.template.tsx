import {MoreIcon, RightArrowIcon} from '@/public'
import {Text} from '@/src/components/text'

import * as Styles from './accessProfile.styles'

import {useRouter} from 'next/router'
import {RoutesPath} from '@/src/components/sideBar/sideBarRoutes'
import {useQuery} from '@tanstack/react-query'
import {getProfileTypeAccessList} from '@/src/services/configuration/profileTypeAccess'

export function AccessProfileTemplate() {
  const router = useRouter()

  const {isLoading, data, isError} = useQuery({
    queryKey: ['typeAccessList'],
    queryFn: getProfileTypeAccessList,
  })

  function handleNavigateToDetailsProfile(id: string) {
    router.push(`${RoutesPath.DETAILS_ACCESS_PROFILE}/${id}`)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Erro</div>
  }

  return (
    <Styles.Container>
      <Styles.Content>
        <header>
          <Text fontweight="500" textsize="1.625rem" title="Configurações" />
        </header>
        <Styles.Main>
          <header>
            <Text textsize="1.25rem" title="Perfis de acesso" />
            <Styles.ButtonSvg>
              <MoreIcon />
            </Styles.ButtonSvg>
          </header>
          <main>
            <Styles.ContainerTable>
              <Styles.ContentTable stickyHeader>
                <Styles.TableHeader>
                  <Styles.Row>
                    <Styles.Cell>Nome</Styles.Cell>
                    <Styles.Cell>Ações</Styles.Cell>
                  </Styles.Row>
                </Styles.TableHeader>

                <Styles.Body>
                  {data?.results?.map(result => (
                    <Styles.Row key={result._id}>
                      <Styles.Cell>{result.name}</Styles.Cell>
                      <Styles.Cell>
                        <Styles.ButtonSvg
                          onClick={() =>
                            handleNavigateToDetailsProfile(result._id)
                          }
                        >
                          <RightArrowIcon />
                        </Styles.ButtonSvg>
                      </Styles.Cell>
                    </Styles.Row>
                  ))}
                </Styles.Body>
              </Styles.ContentTable>
            </Styles.ContainerTable>
          </main>
        </Styles.Main>
      </Styles.Content>
    </Styles.Container>
  )
}
