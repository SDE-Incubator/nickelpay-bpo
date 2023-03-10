import {ButtonStylesProps} from './button'
import {Container} from './button.styles'
import {CircularProgress} from '@mui/material'
import * as Styles from './button.styles'

export function Button({
  children,
  loading = false,
  ...rest
}: ButtonStylesProps) {
  return (
      <Styles.Container {...rest} role="button" disabled={loading}>
        {loading ? <CircularProgress /> : children}
      </Styles.Container>
  )
}
