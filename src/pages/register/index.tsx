import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from 'components/Layout'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'

import { RootState } from 'app/store'

import { ListErrors } from 'components/ListErrors'

import { FormSchema } from './utils'

import { signup, TSignupParams, errorsSelector, inProgress } from './store'

import css from './styles.module.css'

export default function Register() {
  const dispatch = useDispatch()

  const errors = useSelector((state: RootState) => errorsSelector(state))
  const pending = useSelector(inProgress)

  function onSubmit(values: TSignupParams): void {
    dispatch(signup(values))
  }

  return (
    <Layout>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/login">Have an account?</Link>
              </p>

              <ListErrors errors={errors} />

              <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={FormSchema}
                onSubmit={onSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <>
                    <form onSubmit={handleSubmit}>
                      <fieldset>
                        <fieldset className="form-group">
                          <input
                            className="form-control form-control-lg"
                            name="username"
                            type="text"
                            placeholder="Username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                          />
                          {touched.username && errors.username ? (
                            <div className={css.error}>{errors.username}</div>
                          ) : null}
                        </fieldset>

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
                          {touched.email && errors.email ? (
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
                          {touched.password && errors.password ? (
                            <div className={css.error}>{errors.password}</div>
                          ) : null}
                        </fieldset>

                        <button
                          className="btn btn-lg btn-primary pull-xs-right"
                          type="submit"
                          disabled={pending}
                        >
                          Sign up
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
    </Layout>
  )
}
