import {HeaderProps} from './header'
import * as Styles from './header.styles'
export function Header({title}: HeaderProps) {
  return (
    <Styles.Header>
      <div>
        <Styles.TextContent>
          <Styles.Title variant="h5">{title}</Styles.Title>

          <div>
            <Styles.Text>Customização</Styles.Text>
            <Styles.Text>Tarifas</Styles.Text>
          </div>
        </Styles.TextContent>
      </div>
    </Styles.Header>
  )
}
