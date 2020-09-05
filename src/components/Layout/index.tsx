import React, { ReactChildren, ReactChild } from 'react'
import { Link } from 'react-router-dom'

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
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          conduit
        </Link>

        <LoggedOutView />

        <LoggedInView />
      </div>

      {children}
    </nav>
  )
}

export { Layout }
