import {describe, test, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import {Button} from './button.component'

describe('Button component', () => {
  test('Should be able to render a children', () => {
    const {unmount} = render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeDefined()
    unmount()
  })

  test('should be able to render the button component as disabled if loading is true and show progressbar', () => {
    const {unmount} = render(<Button loading={true}>Loading</Button>)
    const button = screen.getByRole('button')

    const progressbar = screen.getByRole('progressbar')

    expect(button.hasAttribute('disabled'))
    expect(progressbar).toBeTruthy()
    unmount()
  })
})
