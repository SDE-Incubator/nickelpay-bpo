import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
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

  @media (max-width: 460px) {
    flex-direction: column-reverse;
    > button {
      margin-left: 4rem;
    }
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
      font-size: 0.9rem;
      color: #222;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 460px) {
  }
`

export const ContainerTable = styled(TableContainer)`
  max-height: 32rem;
  box-shadow: 0 0 8px 1px #c4c4c4;

  @media (max-width: 460px) {
    width: 20rem;
    margin-left: 6rem;
  }
`
export const ContentTable = styled(Table)``
export const TableHeader = styled(TableHead)``
export const Row = styled(TableRow)``

export const Cell = styled(TableCell)`
  border: none;
`
export const Body = styled(TableBody)``
export const ButtonSvg = styled(IconButton)`
  font-size: 1.3rem;
  @media (max-width: 460px) {
    font-size: 0.9rem;
    margin-left: 1rem;
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
    margin: 0 5px;
    color: gray;
    font-weight: 500;
  }

  @media (max-width: 460px) {
    display: none;
  }
`
