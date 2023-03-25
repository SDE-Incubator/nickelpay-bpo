import {Checkbox, IconButton} from '@mui/material'
import styled from 'styled-components'

export const ButtonOpen = styled(IconButton)`
  font-size: 0.8rem;
  @media (max-width: 460px) {
    font-size: 0.5rem;
  }
`

export const Check = styled(Checkbox)`
  &.Mui-checked {
    color: #c4c4c4;
    :hover {
      background: transparent;
    }
  }
`
