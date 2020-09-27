import axios from 'axios'

import { ILoginResponse } from 'types'
import { TSignupParams } from './store/types'

async function signup({
  username,
  email,
  password,
}: TSignupParams): Promise<ILoginResponse> {
  const url = `${process.env.REACT_APP_API_URL}/users`

  const data = {
    user: {
      username,
      email,
      password,
    },
  }

  const {
    data: { user },
  } = await axios.post(url, data)

  return { user }
}

export default { signup }
