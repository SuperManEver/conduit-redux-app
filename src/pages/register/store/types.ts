export type TSignupParams = {
  email: string
  password: string
  username: string
}

export type IState = {
  errors: { [k: string]: string[] }
  progress: boolean
}
