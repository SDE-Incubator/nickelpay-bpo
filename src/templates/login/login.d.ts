export type TLoginForm = {
  username: string
  password: string
  code: string
}

export type TLoginScreens = 'LOGIN' | 'CODE_CONFIRMATION'

export type TLoginScreenRender = Record<TLoginScreens, JSX.Element>
