import {Box, IconButton, Typography} from '@mui/material'
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
  gap: 0.25rem;
`

export const Header = styled(Box)`
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
  height: 45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const FareDetails = styled(Box)`
  width: 100%;
  height: 80%;
  background: ${({theme}) => theme.general[100]};
  border-radius: 8px;

  padding: 2rem;
`

export const FareCollection = styled(Box)`
  width: 100%;
  height: 80%;

  background: ${({theme}) => theme.general[100]};
  border-radius: 8px;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > button {
    align-self: center;
  }
`

export const HeaderDetails = styled(Box)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentDetailsFare = styled(Box)`
  width: 100%;
  height: 80%;
  overflow: auto;
  margin-top: 1.6rem;

  display: flex;
  gap: 3rem;
`

export const CollectionContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LeftSide = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
export const RightSide = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

`

export const Changes = styled(Box)`
  width: 100%;
  height: 90%;
  margin-top: 2rem;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > button {
    align-self: center;
  }
`
export const UpdateInformation = styled(Box)`
  overflow-x: auto;
  height: 27rem;

  > div {
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 1rem;

    margin-bottom: 1rem;

    span {
      font-family: 'roboto', sans-serif;
      font-size: 0.8rem;
      color: ${({theme}) => theme.general[200]};
    }
  }
`

export const TextModal = styled(Typography)`
  font-family: 'roboto', sans-serif;
  font-size: 0.9rem;
  color: ${({theme}) => theme.general[200]};

  font-weight: 500;

  margin-bottom: 2rem;
`