import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import { LoginSchema } from './utils'

import { RootState } from 'app/store'

import { ListErrors } from 'components/ListErrors'
import { Layout } from 'components/Layout'

import { login, errorsSelector, inProgress } from './store'

import css from './styles.module.css'

type Values = {
  email: string
  password: string
}

function Login() {
  const dispatch = useDispatch()
  const errors = useSelector((state: RootState) => errorsSelector(state))
  const pending = useSelector(inProgress)

  const submitLogin = useCallback(
    (params: { email: string; password: string }) => dispatch(login(params)),
    [dispatch]
  )

  function onSubmit(values: Values): void {
    submitLogin(values)
  }

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

            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={LoginSchema}
              onSubmit={onSubmit}
            >
              {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
                <>
                  <form onSubmit={handleSubmit}>
                    <fieldset>
                      <fieldset className="form-group">
                        <input
                          className="form-control form-control-lg"
                          name="email"
                          type="email"
                          placeholder="Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email ? (
                          <div className={css.error}>{errors.email}</div>
                        ) : null}
                      </fieldset>

                      <fieldset className="form-group">
                        <input
                          className="form-control form-control-lg"
                          name="password"
                          type="password"
                          placeholder="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {errors.password ? (
                          <div className={css.error}>{errors.password}</div>
                        ) : null}
                      </fieldset>

                      <button
                        className="btn btn-lg btn-primary pull-xs-right"
                        type="submit"
                        disabled={pending}
                      >
                        Sign in
                      </button>
                    </fieldset>
                  </form>
                </>
              )}
            </Formik>
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
