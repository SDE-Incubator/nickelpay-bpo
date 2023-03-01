import { ButtonStylesProps } from "./button";
import { Container } from "./button.styles";

export function Button({ children, ...rest }: ButtonStylesProps) {
  return <Container {...rest}>{children}</Container>;
}
