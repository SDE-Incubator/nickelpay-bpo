import {RecoverPasswordScreens, TNewPasswordData} from '../../recoverPassword'

export type TEmailForm = {
  username: string
}

export type RecoverPasswordFormProps = {
  onNext: (screen: RecoverPasswordScreens) => void
  onStorePasswordData: (newData: TNewPasswordData) => void
}
