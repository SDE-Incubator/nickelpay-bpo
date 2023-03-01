import {RecoverPasswordScreens} from '../../recoverPassword'

export type EmailForm = {
  username: string
}

export type RecoverPasswordFormProps = {
  onNext: (screen: RecoverPasswordScreens) => void
}
