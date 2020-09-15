export type IUser = {
  id: string
  email: string
  createdAt: string
  updatedAt: string
  username: string
  bio: string | void
  image: string | void
  token: string
}

export type ILoginResponse = {
  user: IUser
}

export type Action<T> = {
  type: string
  payload: T
}
