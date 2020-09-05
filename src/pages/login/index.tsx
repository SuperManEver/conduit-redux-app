import React from 'react'
import { Link } from 'react-router-dom'

import { ListErrors } from 'components/ListErrors'
import { Layout } from 'components/Layout'

function Login() {
  const errors = {}

  const email = ''
  const password = ''

  function submitForm(
    email: string,
    password: string
  ): ((event: React.FormEvent<HTMLFormElement>) => void) | undefined {
    return undefined
  }

  function changeEmail(evt: React.ChangeEvent<HTMLInputElement>): void {}
  function changePassword(evt: React.ChangeEvent<HTMLInputElement>): void {}

  const inProgress = false

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>

            <ListErrors errors={errors} />

            <form onSubmit={submitForm(email, password)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={changeEmail}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={changePassword}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={inProgress}
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <Layout>
    <Login />
  </Layout>
)
