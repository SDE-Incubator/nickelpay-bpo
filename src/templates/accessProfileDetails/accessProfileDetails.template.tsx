import {Button} from '@/src/components/button'
import Link from 'next/link'
import * as Styles from './accessProfileDetails.styles'

import {RightArrowIcon, DownArrowIcon, LeftArrowIcon} from '@/public'
import {
  modulesAccessControl,
  ModulesAccessControlProps,
} from './modulesAccessControl'
import {useState} from 'react'

import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'


type RowProps = {
  item: ModulesAccessControlProps
}

function Row({item}: RowProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Styles.Row onClick={() => setOpen(!open)}>
        <Styles.Cell>
          {item.name}
          <Styles.ButtonOpen
            onClick={() => setOpen(!open)}
          >
            {open ? <DownArrowIcon /> : < RightArrowIcon/>}
          </Styles.ButtonOpen>
        </Styles.Cell>
        <Styles.Cell align="left">
          <Styles.Check disabled/>
        </Styles.Cell>
        <Styles.Cell align="left">
          <Styles.Check disabled />
        </Styles.Cell>
        <Styles.Cell align="left">
          <Styles.Check disabled />
        </Styles.Cell>
        <Styles.Cell align="left">
          <Styles.Check disabled />
        </Styles.Cell>
        <Styles.Cell align="left">
          <Styles.Check disabled />
        </Styles.Cell>
      </Styles.Row>
      <Styles.Row>
        <Styles.Cell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{margin: -2}}>
              <Styles.ContentTable size="small" aria-label="purchases">
                <Styles.TableHeader>
                  <Styles.Row>
                    <Styles.Cell></Styles.Cell>
                    <Styles.Cell>Ver listagem</Styles.Cell>
                    <Styles.Cell>Ver detalhes</Styles.Cell>
                    <Styles.Cell>Criar</Styles.Cell>
                    <Styles.Cell>Editar</Styles.Cell>
                    <Styles.Cell>Deletar</Styles.Cell>
                  </Styles.Row>
                </Styles.TableHeader>
                <Styles.Body>
                  {item.submodules.map(access => (
                    <Styles.Row key={access.id}>
                      <Styles.Cell component="th" scope="row">
                        {access.name}
                      </Styles.Cell>

                      <Styles.Cell align="left">
                        <Styles.Check disabled/>
                      </Styles.Cell>
                      <Styles.Cell>
                        <Styles.Check disabled/>
                      </Styles.Cell>
                      <Styles.Cell>
                        <Styles.Check disabled/>
                      </Styles.Cell>
                      <Styles.Cell>
                        <Styles.Check disabled/>
                      </Styles.Cell>
                      <Styles.Cell>
                        <Styles.Check disabled/>
                      </Styles.Cell>
                    </Styles.Row>
                  ))}
                </Styles.Body>
              </Styles.ContentTable>
            </Box>
          </Collapse>
        </Styles.Cell>
      </Styles.Row>
    </>
  )
}

export function AccessProfileDetailsTemplate() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <div>
            <Styles.ButtonSvg>
              <LeftArrowIcon />
            </Styles.ButtonSvg>
            <Styles.TextContent>
              <Styles.Title variant="h5">Admistrador Secundário</Styles.Title>

              <div>
                <Link href="/perfis-de-acesso">Configuraçoes</Link>
                <Styles.Text>Perfis de Acesso</Styles.Text>
                <Styles.Text>Admistrador secundário</Styles.Text>
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
              {modulesAccessControl.map(access => (
                <Row key={access.id} item={access} />
              ))}
            </Styles.Body>
          </Styles.ContentTable>
        </Styles.ContainerTable>
      </Styles.Content>
    </Styles.Container>
  )
}
