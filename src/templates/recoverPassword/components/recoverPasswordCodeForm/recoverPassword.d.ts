import {RecoverPasswordScreens, TNewPasswordData} from '../../recoverPassword'

export type RecoverPasswordCodeFormProps = {
  onNext: (screen: RecoverPasswordScreens) => void
}

export type TCodeForm = {
  code: string
}
