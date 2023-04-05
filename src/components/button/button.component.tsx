import {ButtonStylesProps} from './button'
import {CircularProgress} from '@mui/material'
import * as Styles from './button.styles'

export function Button({
  children,
  loading = false,
  ...rest
}: ButtonStylesProps) {
  return (
    <Styles.Container role="button" disabled={loading} {...rest}>
      {loading ? <CircularProgress role="circular-progress" /> : children}
    </Styles.Container>
  )
}
