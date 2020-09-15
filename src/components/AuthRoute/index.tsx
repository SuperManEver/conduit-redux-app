import { useSelector } from 'react-redux'
import React, { ReactChildren, ReactChild } from 'react'
import { Redirect } from 'react-router'

import { isUserLoggedIn } from 'services/session'

interface IProps {
  children: ReactChild | ReactChildren
}
export default function AuthRoute({ children }: IProps) {
  const logged = useSelector(isUserLoggedIn)

  if (logged) {
    return <Redirect to="/" />
  }

  return <>{children}</>
}
