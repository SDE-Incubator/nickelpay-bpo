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
  overflow: auto;
  box-shadow: 0 0 8px 1px #c4c4c4;
  @media (max-width: 1280px) {
    width: 60rem;
  }

  @media (max-width: 860px) {
    margin-left: 5.7rem;
    width: 35rem;
  }

  @media (max-width: 460px) {
    margin-left: 1rem;
    width: 18rem;
  }

  table {
    tr:nth-child(even) {
      background: ${({theme}) => theme.general[75]};
    }
    td {
      padding: 1.6rem;
      @media (max-width: 460px) {
        padding: 0.2rem;
      }
    }
  }
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
