import {useState} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {Modal, Typography, Menu, MenuItem} from '@mui/material'

import * as Styles from './user.styles'
import {Button} from '@/src/components/button'
import {useUser} from '@/src/hooks/useUser/useUser.hook'
import {analystHistoryType} from '@/src/constants'
import {format} from 'date-fns'
import {HistoryList} from './user'

export function UserTemplate() {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const openMenu = Boolean(anchorEl)
  const {replace} = useRouter()

  const {data, isLoading} = useUser()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  function handleBack() {
    replace('/usuarios')
  }

  function handleOpenMenu(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }
  function handleCloseMenu() {
    setAnchorEl(null)
  }

  const historyList: HistoryList[] | undefined = data?.histories?.map(
    (item, index) => ({
      id: `${item._id}_${index}`,
      change: `${item?.user_id?.name || item?.analyst_id?.name} ${
        analystHistoryType[item.type]
      } ${format(new Date(item.updatedAt), "dd/MM/yyyy 'às' k:m")}`,
    })
  )

  if (isLoading) {
    return <p>Loading...</p>
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
              <Styles.Title variant="h5">{data?.name}</Styles.Title>

              <div>
                <span>Configurações</span>
                <Styles.Text>Usuários</Styles.Text>
                <Styles.Text>{data?.name}</Styles.Text>
              </div>
            </Styles.TextContent>
          </div>
        </Styles.Header>

        <Styles.Main>
          <header>
            <Styles.ButtonSvg
              id="resources-button"
              onClick={handleOpenMenu}
              aria-controls={openMenu ? 'resources-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
            >
              <Image
                src="/moreIcon.svg"
                alt="mais opções"
                width={20}
                height={20}
              />
            </Styles.ButtonSvg>
            <Menu
              id="resources-menu"
              anchorEl={anchorEl}
              open={openMenu}
              MenuListProps={{
                'aria-labelledby': 'resources-button',
              }}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleOpen}>Histórico de alteraçãoes</MenuItem>
            </Menu>
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
                    {historyList?.map(history => (
                      <div key={history.id}>
                        <span>{history.change}</span>
                      </div>
                    ))}
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
              <span>{data?.name}</span>
            </div>

            <div>
              <strong>Email</strong>
              <span>{data?.email}</span>
            </div>

            <div>
              <strong>Tipo de perfis</strong>
              {data?.type_access.map(access => (
                <span key={access._id}>{access?.name || ''}</span>
              ))}
            </div>

            <div>
              <strong>Status</strong>
              <span>{data?.deactivated}</span>
            </div>
          </Styles.ProfileInformation>
        </Styles.Main>
      </Styles.Content>
    </Styles.Container>
  )
}
