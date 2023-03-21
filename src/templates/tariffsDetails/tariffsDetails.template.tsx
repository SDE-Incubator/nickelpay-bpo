import {Button} from '@/src/components/button'
import {IconButton, Modal, Typography} from '@mui/material'
import Image from 'next/image'
import {useState} from 'react'
import * as Styles from './tariffsDetails.styles'

export function TariffsDetailsTemplate() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <div>
            <Styles.ButtonSvg>
              <Image src="/LeftArrowIcon.svg" alt="" width={20} height={20} />
            </Styles.ButtonSvg>
            <Styles.TextContent>
              <Styles.Title variant="h5">Nome da Tarifa</Styles.Title>

              <div>
                <span>Customização</span>
                <Styles.Text>Tarifas Especiais</Styles.Text>
                <Styles.Text>Nome da Tarifa Especial</Styles.Text>
              </div>
            </Styles.TextContent>
          </div>
        </Styles.Header>

        <Styles.Main>
          <Styles.FareDetails>
            <Styles.HeaderDetails>
              <Typography variant="h6">Detalhes da tarifa</Typography>
              <IconButton onClick={handleOpen}>
                <Image
                  src="/moreIcon.svg"
                  alt="mais opções"
                  width={20}
                  height={20}
                />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Styles.ContentModal>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Histórico de alterações
                  </Typography>

                  <Styles.Changes>
                    <Styles.UpdateInformation>
                      <Styles.TextModal>Tarifa especial</Styles.TextModal>
                      <div>
                        <span>História de atividades fica aqui</span>
                      </div>
                    </Styles.UpdateInformation>
                      <Button
                        textcolor="#756B6B"
                        bordercolor="#756B6B"
                        width="10rem"
                        height="3rem"
                        onClick={handleClose}
                      >
                        Voltar
                      </Button>
                  </Styles.Changes>
                </Styles.ContentModal>
              </Modal>
            </Styles.HeaderDetails>

            <Styles.ContentDetailsFare>
              <Styles.LeftSide>
                <div>
                  <Typography variant="body1">Nome</Typography>
                  <Typography variant="body2">Nome da Tarifa</Typography>
                </div>
                <div>
                  <Typography variant="body1">Categoria</Typography>
                  <Typography variant="body2">Cobrança</Typography>
                </div>
                <div>
                  <Typography variant="body1">Valor cobrado</Typography>
                  <Typography variant="body2">9%</Typography>
                </div>
                <Typography variant="h6">Cobrança</Typography>
                <div>
                  <Typography variant="body1">Recorrência</Typography>
                  <Typography variant="body2">Diária</Typography>
                </div>
                <div>
                  <Typography variant="body1">
                    Cobrança deve se repetir a cada
                  </Typography>
                  <Typography variant="body2">1 dia(s)</Typography>
                </div>
              </Styles.LeftSide>
              <Styles.RightSide>
                <div>
                  <Typography variant="body1">Descrição</Typography>
                  <Typography variant="body2">
                    Descrição Essa tarifa será aplicada em lojas parceiras com
                    mais de 200 contas
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1">Tipo de Tarifa</Typography>
                  <Typography variant="body2">Imposto</Typography>
                </div>
                <div>
                  <Typography variant="body1">Números de tentativas</Typography>
                  <Typography variant="body2">3</Typography>
                </div>
                <div>
                  <Typography variant="body1">Cobrança</Typography>
                  <Typography variant="body2">Inativa</Typography>
                </div>
              </Styles.RightSide>
            </Styles.ContentDetailsFare>
          </Styles.FareDetails>

          <Styles.FareCollection>
            <Typography variant="h6">Cobrança da tarifa</Typography>
            <Styles.CollectionContent>
              <Typography>Cobrança ainda não foi configurada</Typography>
            </Styles.CollectionContent>
            <Button
              width="10rem"
              bghover="#303F9F"
              bgcolor="#756B6B"
              textcolor="#fff"
            >
              Cobrar Tarifa
            </Button>
          </Styles.FareCollection>
        </Styles.Main>
      </Styles.Content>
    </Styles.Container>
  )
}
