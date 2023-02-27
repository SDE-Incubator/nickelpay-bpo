import { ButtonStylesProps } from './button'
import {Container} from './button.styles'


export function ButtonStyles({title, variant, color,...rest}: ButtonStylesProps) {
    return (
        <Container {...rest}
            variant={variant}
        >
            {title}
        </Container>
    )
}