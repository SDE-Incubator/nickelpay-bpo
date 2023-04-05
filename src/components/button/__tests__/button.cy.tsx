import {Button} from '../button.component'

describe('<Button/>', () => {
  it('should render a button with custom text', () => {
    const text = 'Test'
    cy.mount(<Button>{text}</Button>)

    cy.contains(text)
  })

  it('should be disabled when is loading', () => {
    cy.mount(<Button loading={true}>Test</Button>)

    cy.get('[role="button"]').should('be.disabled')
  })

  it('should render <CircularProgress/> when is loading', () => {
    cy.mount(<Button loading={true}>Test</Button>)

    cy.get('[role="circular-progress"]').should('exist')
  })

  it('should not render <CircularProgress/> when is not loading', () => {
    cy.mount(<Button loading={false}>Test</Button>)

    cy.get('[role="circular-progress"]').should('not.exist')
  })
})
