import React, {useState} from 'react'
import {
  RoutesPath,
  sideBarRoutes,
  SideBarRoutesProps,
  SubmenuProps,
} from './sideBarRoutes'
import {List, Link} from '@mui/material'
import {LogoNickel, NotificationIcon} from '../../../public'
import * as Styles from './sideBar.styles'
import {Text} from '../text'

import {useRouter} from 'next/router'
export function SideBar() {
  const [menuWithSubmenu, setMenuWithSubmenu] =
    useState<SideBarRoutesProps | null>(null)
  const router = useRouter()

  const handleClickListItem = (item: SideBarRoutesProps) => {
    setMenuWithSubmenu(item)
  }

  const handleClickSubMenuItem = (item: SubmenuProps) => {
    router.push(item.path)
  }

  return (
    <>
      <Styles.Container variant="permanent">
        <Styles.Content>
          <List>
            <Styles.ToolbarLogo>
              <Link href={RoutesPath.DASHBOARD}>
                <LogoNickel />
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
                  <Text margintop="0.4rem" fontcolor="#fff" title={item.name} />
                </Styles.MenuListItem>
              )
            })}
          </List>
          <Styles.ContentNotification>
            <Styles.NotificationBadge badgeContent={1}>
              <NotificationIcon />
            </Styles.NotificationBadge>
            <Styles.ProfileAvatar src="https://source.unsplash.com/800x600/?face" />
            <Styles.LogoutButton>SAIR</Styles.LogoutButton>
          </Styles.ContentNotification>
        </Styles.Content>
      </Styles.Container>

      <Styles.SubMenuDrawer
        transitionDuration={0.5}
        open={!!menuWithSubmenu}
        onClose={() => setMenuWithSubmenu(null)}
      >
        <Styles.SubMenuToolbar>
          <Text
            fontcolor="black"
            title={menuWithSubmenu?.name || ''}
            textsize='1.2rem'
            fontweight='500'
          />
        </Styles.SubMenuToolbar>

        <Styles.ContentSubMenu>
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
                    <Text margintop="0.4rem" fontcolor="#222" textsize='0.8rem' title={item.name} />
                  </Styles.SubMenuListItem>
                )
              })}
          </List>
        </Styles.ContentSubMenu>
      </Styles.SubMenuDrawer>
    </>
  )
}
