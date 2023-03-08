import {ButtonStylesProps} from './button'
import {Container} from './button.styles'
import {CircularProgress} from '@mui/material'

export function Button({
  children,
  loading = false,
  ...rest
}: ButtonStylesProps) {
  return (
    <Container {...rest} role="button" disabled={loading}>
      {loading ? <CircularProgress role="progressbar" /> : children}
    </Container>
  )
}
