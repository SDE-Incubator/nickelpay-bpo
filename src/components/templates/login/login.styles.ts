import styled from 'styled-components'
import { Avatar, Box } from "@mui/material"


export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: '#fff';

  display: flex;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`

export const ImageContainer = styled(Avatar)`
  width: 155px;
  height: 155px;

  margin-bottom: 2rem;

  @media (max-width: 580px) {
    width: 120px;
    height: 120px;
  }
`



export const Content = styled(Box)`
  width: 100%;
  max-width: 540px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

`


