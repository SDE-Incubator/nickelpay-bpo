import {RecoverPasswordScreens} from '../../recoverPassword'

export type RecoverPasswordCodeFormProps = {
  onNext: (screen: RecoverPasswordScreens) => void
}

export type CodeForm = {
  code: string
}
