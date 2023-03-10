import {
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Toolbar,
} from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Drawer)`
  /* z-index: 10; 
    Excluir isso 
  */
`

export const Content = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
  background: ${({theme}) => theme.general[300]};
  max-width: 6.438rem;
  height: 100vh;
`

export const MenuListItem = styled(ListItem).attrs(() => ({button: true}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.938rem 0.5rem;
  width: 100%;
`

export const IconMenu = styled(SvgIcon)`
  font-size: 1.5rem;
  fill: ${({theme}) => theme.general[85]};
`

export const IconSubMenu = styled(SvgIcon)`
  font-size: 1.25rem;
  fill: ${({theme}) => theme.general[400]};
`

export const SubMenuIcon = styled(ListItemIcon)`
  min-width: 0;
  margin-right: 0.813rem;
`

export const SubMenuListItem = styled(ListItem).attrs(() => ({button: true}))`
  align-items: center;
  padding: 1.25rem;
`

export const SubMenuDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    margin-left: 6.438rem;
    width: 14.75rem;
    background-color: #fff;
  }
`

export const ToolbarLogo = styled(Toolbar)`
  justify-content: center;
  margin-bottom: 0.938rem;
  margin-top: 0.625rem;

  font-size: 2.8rem;
`
export const ProfileAvatar = styled(Avatar)`
  width: 3.25rem;
  height: 3.25rem;
  object-fit: cover;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
  cursor: pointer;
`

export const NotificationBadge = styled(Badge)`
  .MuiBadge-badge {
    background-color: #48e96b;
    color: #000;

    cursor: pointer;
  }
`

export const LogoutButton = styled(Button)`
  color: #fff;
  margin-bottom: 1.25rem;
  width: 100%;
`

export const SubMenuToolbar = styled(Toolbar)`
  padding-top: 2.5rem;
  padding-bottom: 1.875rem;
`

export const ContentNotification = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ContentSubMenu = styled(Box)`
  overflow: auto;

  /* excluir isso talvez */
`
