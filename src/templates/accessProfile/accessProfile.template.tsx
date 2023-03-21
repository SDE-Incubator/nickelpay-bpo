import {Text} from '@/src/components/text'

import * as Styles from './accessProfile.styles'

import {useRouter} from 'next/router'
import {RoutesPath} from '@/src/components/sideBar/sideBarRoutes'
import Image from 'next/image'

export function AccessProfileTemplate() {
  const router = useRouter()

  function handleNavigateToDetailsProfile() {
    router.push(RoutesPath.DETAILS_ACCESS_PROFILE)
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
              <Image
                src="/moreIcon.svg"
                alt=""
                width={20}
                height={20}
              />
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
                  <Styles.Row>
                    <Styles.Cell>Admistrador</Styles.Cell>
                    <Styles.Cell>Tudo</Styles.Cell>
                    <Styles.Cell>
                      {' '}
                      <Styles.ButtonSvg>
                        {' '}
                        <Image
                          src="/rightArrowIcon.svg"
                          alt=""
                          width={15}
                          height={15}
                        />{' '}
                      </Styles.ButtonSvg>{' '}
                    </Styles.Cell>
                  </Styles.Row>
                  <Styles.Row>
                    <Styles.Cell>Suporte</Styles.Cell>
                    <Styles.Cell>Ver tudo, editar</Styles.Cell>
                    <Styles.Cell>
                      {' '}
                      <Styles.ButtonSvg>
                        {' '}
                        <Image
                          src="/rightArrowIcon.svg"
                          alt=""
                          width={15}
                          height={15}
                        />{' '}
                      </Styles.ButtonSvg>{' '}
                    </Styles.Cell>
                  </Styles.Row>
                  <Styles.Row>
                    <Styles.Cell>Convidado</Styles.Cell>
                    <Styles.Cell>Ver Listagem</Styles.Cell>
                    <Styles.Cell>
                      {' '}
                      <Styles.ButtonSvg>
                        {' '}
                        <Image
                          src="/rightArrowIcon.svg"
                          alt=""
                          width={15}
                          height={15}
                        />{' '}
                      </Styles.ButtonSvg>{' '}
                    </Styles.Cell>
                  </Styles.Row>
                  <Styles.Row>
                    <Styles.Cell>Inspeção</Styles.Cell>
                    <Styles.Cell>Ver Tudo</Styles.Cell>
                    <Styles.Cell>
                      {' '}
                      <Styles.ButtonSvg>
                        {' '}
                        <Image
                          src="/rightArrowIcon.svg"
                          alt=""
                          width={15}
                          height={15}
                        />{' '}
                      </Styles.ButtonSvg>{' '}
                    </Styles.Cell>
                  </Styles.Row>
                  <Styles.Row>
                    <Styles.Cell>Admistrador secundário</Styles.Cell>
                    <Styles.Cell>Ver tudo, editar, deletar</Styles.Cell>
                    <Styles.Cell>
                      {' '}
                      <Styles.ButtonSvg
                        onClick={handleNavigateToDetailsProfile}
                      >
                        {' '}
                        <Image
                          src="/rightArrowIcon.svg"
                          alt=""
                          width={15}
                          height={15}
                        />{' '}
                      </Styles.ButtonSvg>{' '}
                    </Styles.Cell>
                  </Styles.Row>
                </Styles.Body>
              </Styles.ContentTable>
            </Styles.ContainerTable>
          </main>
        </Styles.Main>
      </Styles.Content>
    </Styles.Container>
  )
}
