import { Box, Typography } from "@mui/material"
import styled from "styled-components"

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