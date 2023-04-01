import {Box, Typography} from '@mui/material'
import styled from 'styled-components'

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

export const UpdateInformation = styled(Box)`
  overflow-x: auto;

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

export const Footer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`
