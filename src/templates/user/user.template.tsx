import Image from 'next/image'
import * as Styles from './user.styles'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import {useRouter} from 'next/router'
import {Button} from '@/src/components/button'

export function UserTemplate() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  function handleBack() {
    router.push('/')
  }

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <div>
            <Styles.ButtonSvg onClick={handleBack}>
              <Image src="/LeftArrowIcon.svg" alt="" width={20} height={20} />
            </Styles.ButtonSvg>
            <Styles.TextContent>
              <Styles.Title variant="h5">Beatriz</Styles.Title>

              <div>
                <span>Configuraçoes</span>
                <Styles.Text>Usuários</Styles.Text>
                <Styles.Text>Beatriz</Styles.Text>
              </div>
            </Styles.TextContent>
          </div>
        </Styles.Header>

        <Styles.Main>
          <header>
            <Styles.ButtonSvg onClick={handleOpen}>
              <Image
                src="/moreIcon.svg"
                alt="mais opções"
                width={20}
                height={20}
              />
            </Styles.ButtonSvg>
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
                    <Styles.TextModal>Perfil</Styles.TextModal>
                    <div>
                      <span>
                        Beatriz criou este usuário. 13/01/2023 às 17:58
                      </span>
                    </div>
                    <div>
                      <span>
                        Beatriz atualizou informações deste usuário. 13/01/2023
                        às 17:59
                      </span>
                    </div>
                    <div>
                      <span>
                        Beatriz criou este usuário. 13/01/2023 às 17:58
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
            <Styles.AvatarProfile src="https://source.unsplash.com/800x600/?face" />
          </header>

          <Styles.ProfileInformation>
            <div>
              <strong>Nome</strong>
              <span>Beatriz</span>
            </div>

            <div>
              <strong>Email</strong>
              <span>beatriz.calepso@nickelpay.com.br</span>
            </div>

            <div>
              <strong>Tipo de perfis</strong>
              <span>
                Administrator Master Analista de Compliance Analista Financeiro
              </span>
            </div>

            <div>
              <strong>Status</strong>
              <span>Ativo</span>
            </div>
          </Styles.ProfileInformation>
        </Styles.Main>
      </Styles.Content>
    </Styles.Container>
  )
}
