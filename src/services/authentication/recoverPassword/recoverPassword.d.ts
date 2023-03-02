export interface GetCodeToRecoverPasswordRequest {
  username: string
}

export interface GetCodeToRecoverPasswordResponse {
  token: string
}

export interface SetCodeToRecoverPasswordRequest {
  code: string
}

export interface SetNewPasswordRequest {
  code: string
  newPassword1: string
  newPassword2: string
  token: string
}
