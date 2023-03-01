export type RecoverPasswordScreens = 'EMAIL' | 'CODE' | 'NEW_PASSWORD'

export type RecoverPasswordScreensRender = Record<
  RecoverPasswordScreens,
  JSX.Element
>
