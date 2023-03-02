import { ButtonStylesProps } from "./button";
import { Container } from "./button.styles";
import { CircularProgress } from "@mui/material";

export function Button({children, loading = false, ...rest }: ButtonStylesProps) {
  return (
      <Container 
        {...rest}
        disabled={loading}
      >
        {loading ? <CircularProgress /> : children}
      </Container>
    )
    
}
