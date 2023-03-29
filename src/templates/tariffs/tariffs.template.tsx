import {Button} from '@/src/components/button'
import { Header } from '@/src/components/header'
import {
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import {useState} from 'react'
import * as Styles from './tariffs.styles'

export function TariffsTemplate() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Styles.Container>
      <Styles.Content>
        <Header title="Tarifas" />

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
                  <IconButton onClick={handleOpen}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Styles.ContentModal>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Histórico de alterações
          </Typography>

          <Styles.Changes>
            <Styles.UpdateInformation>
              <Styles.TextModal>Tarifas</Styles.TextModal>
              <div>
                <span>
                  Vitor - Q&A alterou Transferência entre contas Nickelpay -
                  Crédito para R$ 1,00
                </span>
              </div>
              <div>
                <span>
                  Beatriz alterou Transferência entre contas Nickelpay - Crédito
                  para R$ 0,00
                </span>
              </div>
            </Styles.UpdateInformation>
            <Styles.Footer>
              <Button
                textcolor="#756B6B"
                bordercolor="#756B6B"
                width="10rem"
                height="3rem"
                onClick={handleClose}
              >
                Voltar
              </Button>
            </Styles.Footer>
          </Styles.Changes>
        </Styles.ContentModal>
      </Modal>
    </Styles.Container>
  )
}
