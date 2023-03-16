import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  ListItem,
  ListItemIcon,
  SvgIcon,
  Toolbar,
} from '@mui/material'
import styled from 'styled-components'

export const MainContainer = styled(Box)`
  height: 80%;
  display: flex;
`

export const ContentDrawer = styled(Drawer)`
  max-width: 6.438rem;
  z-index: 10;

  @media (max-width: 630px) {
    max-width: 3.438rem;
  }
`
export const Content = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
  background: ${({theme}) => theme.general[300]};
  max-width: 6.438rem;
  height: 100vh;

  transition: all 1s;
  overflow: auto;

  @media (max-width: 630px) {
    max-width: 3.438rem;
  }
`

export const MenuListItem = styled(ListItem).attrs(() => ({button: true}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.938rem 0.5rem;
  width: 100%;
  > span {
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    margin-top: 0.4rem;

    @media (max-width: 630px) {
      display: none;
    }
  }
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

  > span {
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    margin-top: 0.4rem;
  }
`

export const SubMenuDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    margin-left: 5.9rem;
    width: 17.75rem;
    background-color: #fff;

    @media (max-width: 630px) {
      margin-left: 3.1rem;
      width: 15rem;
    }
  }
`

export const ToolbarLogo = styled(Toolbar)`
  justify-content: center;
  margin-bottom: 0.938rem;
  margin-top: 0.625rem;

  font-size: 2.8rem;

  @media (max-width: 630px) {
    display: none;
  }
`
export const ProfileAvatar = styled(Avatar)`
  width: 3.25rem;
  height: 3.25rem;
  object-fit: cover;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
  cursor: pointer;

  @media (max-width: 630px) {
    width: 2.25rem;
    height: 2.25rem;
  }
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
`

export const Main = styled(Container)`
  display: flex;
  justify-content: center;

`
