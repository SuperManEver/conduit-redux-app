import React, { ReactChildren, ReactChild } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { isUserLoggedIn, userSelector } from 'services/session'

import LoggedInView from './components/LoggedInView'
import LoggedOutView from './components/LoggedOutView'

/**
 * TODO: current user should be extracted from
 * session service
 */

type IProps = {
  children: ReactChild | ReactChildren
}

function Layout({ children }: IProps) {
  const isUserLogged = useSelector(isUserLoggedIn)
  const currentUser = useSelector(userSelector)

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            conduit
          </Link>

          {isUserLogged && currentUser ? (
            <LoggedInView currentUser={currentUser} />
          ) : (
            <LoggedOutView />
          )}
        </div>
      </nav>
      {children}
    </>
  )
}

export { Layout }
