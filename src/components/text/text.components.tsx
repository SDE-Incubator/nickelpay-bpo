import {TextStylesProps} from './text'
import { Container } from "./text.styles";

export function Text({ title, ...rest }: TextStylesProps) {
  return <Container {...rest}>{title}</Container>;
}
