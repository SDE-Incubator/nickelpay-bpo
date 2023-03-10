import { ButtonStylesProps } from "./button";
// import { Container } from "./button.styles";
import * as Styles from './button.styles'
import { CircularProgress } from "@mui/material";

export function Button({children, loading = false, ...rest }: ButtonStylesProps) {
  return (
      <Styles.Container 
        {...rest}
        disabled={loading}
      >
        {loading ? <CircularProgress /> : children}
      </Styles.Container>
    )
    
}
