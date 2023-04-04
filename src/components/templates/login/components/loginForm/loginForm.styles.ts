import styled from "styled-components"
import { Avatar } from "@mui/material"
import Link from "next/link"

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
