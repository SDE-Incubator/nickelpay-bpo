import {Avatar, Box, IconButton, Typography} from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 88.063rem;

  @media (max-width: 1549px) {
    width: 60rem;
  }

  @media (max-width: 1060px) {
    width: 55rem;
  }
`

export const Content = styled(Box)`
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;

  padding: 2rem;
  gap: 6.25rem;
`

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  width: 100%;

  > div {
    display: flex;
    gap: 1rem;
  }
`

export const TextContent = styled(Box)`
  font-family: 'roboto', sans-serif;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
    span {
      color: gray;
      font-weight: 300;
      font-size: 0.875rem;
    }
  }

  @media (max-width: 460px) {
  }
`

export const ButtonSvg = styled(IconButton)`
  width: 2rem;
  @media (max-width: 770px) {
    font-size: 0.9rem;
    margin-left: 4rem;
  }
  @media (max-width: 460px) {
    font-size: 0.9rem;
    margin-left: 3rem;
  }
`

export const Title = styled(Typography)`
  font-weight: 500;

  @media (max-width: 460px) {
    font-size: 1rem;
  }
`

export const Text = styled(Typography)`
  font-family: 'roboto', sans-serif;
  font-weight: 300;
  font-size: 0.875rem;

  &::before {
    content: '>';
    margin: 0 10px;
    color: gray;
    font-weight: 500;
  }
`

export const Main = styled(Box)`
  width: 100%;
  max-width: 30rem;
  height: 30rem;
  border-radius: 8px;

  overflow: auto;

  background: ${({theme}) => theme.general[100]};

  margin: 0 auto;

  border-bottom: 2px solid #c4c4c4;

  > header {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    button {
      align-self: flex-end;
    }
  }

  @media (max-width: 460px) {
    margin-left: 1.5rem;
  }
`

export const AvatarProfile = styled(Avatar)`
  width: 6.25rem;
  height: 6.25rem;

  align-self: center;

  @media (max-width: 460px) {
    width: 4.25rem;
    height: 4.25rem;
  }
`

export const ContentModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 35rem;
  height: 40rem;
  background: ${({theme}) => theme.general[85]};
  padding: 1.5rem;

  @media (max-width: 460px) {
    width: 20rem;
    height: 30rem;
  }
`

export const Changes = styled(Box)`
  width: 100%;
  height: 90%;
  margin-top: 2rem;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TextModal = styled(Typography)`
  font-family: 'roboto', sans-serif;
  font-size: 0.9rem;
  color: ${({theme}) => theme.general[200]};

  font-weight: 500;

  margin-bottom: 2rem;
`

export const Footer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UpdateInformation = styled(Box)`
  overflow-x: auto;

  > div {
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 1rem;

    margin-bottom: 1rem;

    span {
      font-family: 'roboto', sans-serif;
      font-size: .8rem;
      color: ${({theme}) => theme.general[200]};
    }
  }
`

export const ProfileInformation = styled(Box)`
  padding: 0 3rem;

  > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.7rem;

    strong {
      font-weight: normal;
      font-style: normal;
      font-family: 'roboto', sans-serif;
    }

    span {
      font-size: 0.8rem;
      color: ${({theme}) => theme.general[200]};

      font-family: 'roboto', sans-serif;
    }
  }
`
