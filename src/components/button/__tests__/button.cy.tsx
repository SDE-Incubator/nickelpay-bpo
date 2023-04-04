import {Button} from '../button.component'

describe('Button', () => {
  it('Should render a button with custom text', () => {
    cy.mount(<Button>Test</Button>)
    cy.contains('Test')
  })
})
