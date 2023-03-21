import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import * as Styles from './tariffs.styles'

export function TariffsTemplate() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <div>
            <Styles.TextContent>
              <Styles.Title variant="h5">Tarifas</Styles.Title>

              <div>
                <Styles.Text>Customização</Styles.Text>

                <Styles.Text>Tarifas</Styles.Text>
              </div>
            </Styles.TextContent>
          </div>
        </Styles.Header>

        <Styles.Main>
          <Styles.StandardRates>
            <Typography variant="h6">Tarifas padrão</Typography>
            <Styles.ContentStandardRates>
              <Styles.Information>
                <Typography>Notificação de Transferência</Typography>
                <Styles.EditableValue>
                  <Typography>R$ 2,00</Typography>
                  <IconButton>
                    <Image
                      src="/editIcon.svg"
                      alt="editar"
                      width={25}
                      height={25}
                    />
                  </IconButton>
                  <IconButton>
                    <Image
                      src="/reloadIcon.svg"
                      alt="recarregar"
                      width={20}
                      height={20}
                    />
                  </IconButton>
                </Styles.EditableValue>
              </Styles.Information>
              <Styles.Information>
                <Typography>Transferência bancária (TED)</Typography>
                <Styles.EditableValue>
                  <Typography>R$ 1,00</Typography>
                  <IconButton>
                    <Image
                      src="/editIcon.svg"
                      alt="editar"
                      width={25}
                      height={25}
                    />
                  </IconButton>
                  <IconButton>
                    <Image
                      src="/reloadIcon.svg"
                      alt="recarregar"
                      width={20}
                      height={20}
                    />
                  </IconButton>
                </Styles.EditableValue>
              </Styles.Information>
              <Styles.Information>
                <Typography>
                  Transferência entre contas Nickelpay - Crédito
                </Typography>
                <Styles.EditableValue>
                  <Typography>Grátis</Typography>
                  <IconButton>
                    <Image
                      src="/editIcon.svg"
                      alt="editar"
                      width={25}
                      height={25}
                    />
                  </IconButton>
                  <IconButton>
                    <Image
                      src="/reloadIcon.svg"
                      alt="recarregar"
                      width={20}
                      height={20}
                    />
                  </IconButton>
                </Styles.EditableValue>
              </Styles.Information>
              <Styles.Information>
                <Typography>
                  Transferência entre contas Nickelpay - Reembolso
                </Typography>
                <Styles.EditableValue>
                  <Typography>Grátis</Typography>
                  <IconButton>
                    <Image
                      src="/editIcon.svg"
                      alt="editar"
                      width={25}
                      height={25}
                    />
                  </IconButton>
                  <IconButton>
                    <Image
                      src="/reloadIcon.svg"
                      alt="recarregar"
                      width={20}
                      height={20}
                    />
                  </IconButton>
                </Styles.EditableValue>
              </Styles.Information>
              <Styles.Information>
                <Typography>
                  Transferência entre contas Nickelpay - Débito
                </Typography>
                <Styles.EditableValue>
                  <Typography>Grátis</Typography>
                  <IconButton>
                    <Image
                      src="/editIcon.svg"
                      alt="editar"
                      width={25}
                      height={25}
                    />
                  </IconButton>
                  <IconButton>
                    <Image
                      src="/reloadIcon.svg"
                      alt="recarregar"
                      width={20}
                      height={20}
                    />
                  </IconButton>
                </Styles.EditableValue>
              </Styles.Information>
              <Styles.Information>
                <Typography>Pagamento</Typography>
                <Styles.EditableValue>
                  <Typography>R$ 1,00</Typography>
                  <IconButton>
                    <Image
                      src="/editIcon.svg"
                      alt="editar"
                      width={25}
                      height={25}
                    />
                  </IconButton>
                  <IconButton>
                    <Image
                      src="/reloadIcon.svg"
                      alt="recarregar"
                      width={20}
                      height={20}
                    />
                  </IconButton>
                </Styles.EditableValue>
              </Styles.Information>
              <Styles.Information>
                <Typography>Pagamento Pix</Typography>
                <Styles.EditableValue>
                  <Typography>R$ 0,10</Typography>
                  <IconButton>
                    <Image
                      src="/editIcon.svg"
                      alt="editar"
                      width={25}
                      height={25}
                    />
                  </IconButton>
                  <IconButton>
                    <Image
                      src="/reloadIcon.svg"
                      alt="recarregar"
                      width={20}
                      height={20}
                    />
                  </IconButton>
                </Styles.EditableValue>
              </Styles.Information>
              <Styles.Information>
                <Typography>Recebimento Pix</Typography>
                <Styles.EditableValue>
                  <Typography>R$ 0,15</Typography>
                  <IconButton>
                    <Image
                      src="/editIcon.svg"
                      alt="editar"
                      width={25}
                      height={25}
                    />
                  </IconButton>
                  <IconButton>
                    <Image
                      src="/reloadIcon.svg"
                      alt="recarregar"
                      width={20}
                      height={20}
                    />
                  </IconButton>
                </Styles.EditableValue>
              </Styles.Information>
            </Styles.ContentStandardRates>
          </Styles.StandardRates>

          <Styles.PartnerRates>
            <Styles.PartnerRatesHead>
              <Typography variant="body1">Tarifas por parceiro</Typography>
            </Styles.PartnerRatesHead>
            <TableContainer sx={{height: '85%'}}>
              <Table
                sx={{
                  tr: {
                    '&:hover': {background: '#f5f5f5'},
                  },
                }}
                stickyHeader
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Parceiros</TableCell>
                    <TableCell>Configuração</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Nickelpay</TableCell>
                    <TableCell>Personalizado</TableCell>
                    <TableCell>
                      <IconButton>
                        <Image
                          src="/rightArrowIcon.svg"
                          alt="seta para a direita"
                          width={10}
                          height={10}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Styles.PartnerRates>
        </Styles.Main>
      </Styles.Content>
    </Styles.Container>
  )
}
