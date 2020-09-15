import axios from 'axios'

import { ILoginResponse } from 'types'

async function login({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<ILoginResponse> {
  const url = `${process.env.REACT_APP_API_URL}/users/login`

  const data = {
    user: {
      email,
      password,
    },
  }

  const {
    data: { user },
  } = await axios.post(url, data)

  return { user }
}

export default { login }
