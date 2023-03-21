import {Box, Typography} from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Box)`
  display: flex;
  width: 100%;
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

  @media (max-width: 1280px) {
    margin-left: 6.5rem;
  }
  @media (max-width: 460px) {
    margin-left: 2rem;
  }

  > div {
    display: flex;
    gap: 1rem;
  }
`

export const TextContent = styled(Box)`
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      font-family: 'roboto', sans-serif;
      font-weight: 300;
      font-size: 14px;
      color: #222;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`

export const Main = styled(Box)`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  gap: 3rem;
`

export const Title = styled(Typography)`
  font-weight: 500;
`

export const Text = styled(Typography)`
  font-size: 0.875rem;
  color: gray;

  margin-top: 1rem;

  &:not(:last-child)::after {
    content: '>';
    margin: 0 0.7rem;
    color: gray;
    font-weight: 500;
    font-size: 1rem;
  }
`

export const StandardRates = styled(Box)`
  width: 100%;
  height: 43.75rem;
  border-bottom: 3px solid ${({theme}) => theme.general[50]};
  border-radius: 8px;
  background: ${({theme}) => theme.general[100]};
  padding: 1rem;
`

export const PartnerRates = styled(Box)`
  width: 100%;
  height: 43.75rem;
  box-shadow: 0 2px 7px 2px ${({theme}) => theme.general[50]};
  border-radius: 8px;

  overflow: hidden;
`

export const PartnerRatesHead = styled(Box)`
  padding: 2rem;
`

export const ContentStandardRates = styled(Box)`
  width: 100%;
  height: 90%;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  overflow: auto;
`

export const Information = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EditableValue = styled(Box)`
  display: flex;
  align-items: center;
`
