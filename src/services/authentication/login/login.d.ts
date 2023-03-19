export interface LoginRequest {
  username: string
  password: string
}

export interface LoginConfirmationCodeRequest {
  code: string
}

export interface LoginConfirmationCodeResponse {
  _id: string
  verification_code: string
  access_token: string
  refresh_token: string
  token_type: string
  expires_in: number
  created_at: number
  createdAt: Date
  updatedAt: Date
  __v: number
}
