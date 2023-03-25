import React, {useState} from 'react'
import {
  RoutesPath,
  sideBarRoutes,
  SideBarRoutesProps,
  SubmenuProps,
} from './sideBarRoutes'
import {List, Link, Button} from '@mui/material'
import {LogoNickel, NotificationIcon} from '../../../public'
import * as Styles from './sideBar.styles'
import {Text} from '../text'

import {useRouter} from 'next/router'
import Image from 'next/image'
export function SideBar({children}: SideBarRoutesProps) {
  const [menuMain, setMenuMain] = useState(false)
  const [menuWithSubmenu, setMenuWithSubmenu] =
    useState<SideBarRoutesProps | null>(null)
  const router = useRouter()

  const handleClickListItem = (item: SideBarRoutesProps) => {
    setMenuWithSubmenu(item)
  }

  const handleClickSubMenuItem = (item: SubmenuProps) => {
    router.push(item.path)
    setMenuWithSubmenu(null)
  }

  function handleProfile() {
    router.push(RoutesPath.PROFILE)
  }

  return (
    <Styles.MainContainer>
      <Styles.ContentDrawer variant="permanent">
        <Styles.Content>
          <List>
            <Styles.ToolbarLogo>
              <Link href={RoutesPath.DASHBOARD}>
                <Image
                  width={45}
                  height={45}
                  src="/logoNickel.svg"
                  alt="logo"
                />
              </Link>
            </Styles.ToolbarLogo>
            {sideBarRoutes.map(item => {
              const {Icon: IconMenu} = item
              return (
                <Styles.MenuListItem
                  key={item.name}
                  id={item.name ?? ''}
                  onClick={() => handleClickListItem(item)}
                >
                  <Styles.IconMenu component={IconMenu} />
                  <span>{item.name}</span>
                </Styles.MenuListItem>
              )
            })}
          </List>
          <Styles.ContentNotification>
            <Styles.NotificationBadge badgeContent={1}>
              <Image
                width={25}
                height={25}
                src="/notificationIcon.svg"
                alt="logo"
              />
            </Styles.NotificationBadge>
            <Styles.ProfileAvatar
              onClick={handleProfile}
              src="https://source.unsplash.com/800x600/?face"
            />
            <Styles.LogoutButton>SAIR</Styles.LogoutButton>
          </Styles.ContentNotification>
        </Styles.Content>
      </Styles.ContentDrawer>

      <Styles.SubMenuDrawer
        transitionDuration={0.5}
        open={!!menuWithSubmenu}
        onClose={() => setMenuWithSubmenu(null)}
      >
        <Styles.SubMenuToolbar>
          <Text
            fontcolor="black"
            title={menuWithSubmenu?.name || ''}
            textsize="1.2rem"
            fontweight="500"
          />
        </Styles.SubMenuToolbar>

        <List>
          {menuWithSubmenu &&
            menuWithSubmenu?.submenu?.map(item => {
              const {Icon: IconMenu} = item
              return (
                <Styles.SubMenuListItem
                  onClick={() => handleClickSubMenuItem(item)}
                  key={item.name}
                  id={item.name}
                >
                  <Styles.SubMenuIcon>
                    <Styles.IconSubMenu component={IconMenu} />
                  </Styles.SubMenuIcon>
                  <span>{item.name}</span>
                </Styles.SubMenuListItem>
              )
            })}
        </List>
      </Styles.SubMenuDrawer>

      <Styles.Main maxWidth="xl">{children}</Styles.Main>
    </Styles.MainContainer>
  )
}
