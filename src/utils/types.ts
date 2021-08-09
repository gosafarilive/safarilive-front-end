export interface ILoginFormState {
  username: string
  password: string
  confirmPassword?: string
  hasError: boolean
}

type UserActionTypes = 'input' | 'submit' | 'success' | 'fail'

export interface ILoginFormAction {
  type: UserActionTypes
  name: string
  value: string
  username?: string
  password?: string
}
