import {TNewPasswordData} from '../../recoverPassword'

export type NewPasswordFormProps = {
  passwordData: TNewPasswordData
}

export type TNewPasswordForm = {
  newPassword1: string
  newPassword2: string
}
