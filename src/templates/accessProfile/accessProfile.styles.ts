import {Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Box)`
  width: 100%;
  display: flex;

`

export const Content = styled(Box)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  padding: 2rem;

  text-align: left;

  > header {
    padding: 1.5rem 4.5rem;
    
    text-align: left;

    display: flex;
  }

 
`

export const Main = styled(Box)`
  background: ${({theme}) => theme.general[100]};
  width: 100%;
  max-width: 40.625rem;
  max-height: 35.625rem;
  padding: 1.438rem;


  margin: 3.25rem auto 0;

  border-radius: 8px;

  > main {
    width: 100%;
    max-height: 530px;
    overflow: auto;


    &::-webkit-scrollbar {
     width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${({theme}) => theme.general[100]};

    }

    &::-webkit-scrollbar-thumb {
      background: ${({theme}) => theme.general[300]};
      border-radius: 8px;
      border: 2px solid transparent; 

    }
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    > button {
      margin-right: 2.5rem;
    }
  }
`

export const ContainerTable = styled(TableContainer)``;
export const ContentTable = styled(Table)``;
export const TableHeader = styled(TableHead)``;
export const Row = styled(TableRow) `
  border: none;
`;
export const Cell = styled(TableCell)`
  border: none; 
`;
export const Body = styled(TableBody)``;
export const ButtonSvg = styled(IconButton)`

  font-size: 1rem;

`;