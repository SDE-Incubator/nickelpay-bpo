import { Avatar } from '@mui/material'
import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: '#fff';

  display: flex;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`

export const Form = styled.form`
  width: 100%;
  padding: 20px;
  max-width: 540px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.7s;

  @media (max-width: 580px) {
    margin-top: 30px;
  }

  .errorRequired {
    color: ${({ theme }) => theme.icon[100]};
    position: relative;
    bottom: 12px;
    font-family: 'roboto';
    align-self: flex-start;
    font-size: 14px;
  }
`

export const ImageContainer = styled(Avatar)`
  width: 155px;
  height: 155px;

  margin-bottom: 3rem;

  @media (max-width: 580px) {
    width: 120px;
    height: 120px;
  }
`

export const StyleLink = styled(Link)`
  color: ${({ theme }) => theme.general[400]};
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};

  padding: 5px 8px;
  margin-bottom: 3rem;

  align-self: flex-end;

  border-radius: 5px;
  transition: all 0.4s;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background: ${({ theme }) => theme.general[75]};
  }
`
