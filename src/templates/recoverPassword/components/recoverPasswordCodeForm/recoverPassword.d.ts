import {RecoverPasswordScreens, TNewPasswordData} from '../../recoverPassword'

export type RecoverPasswordCodeFormProps = {
  onNext: (screen: RecoverPasswordScreens) => void
  passwordData: TNewPasswordData
  onStorePasswordData: (newData: TNewPasswordData) => void
}

export type TCodeForm = {
  code: string
}
