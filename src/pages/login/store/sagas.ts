import { path } from 'ramda'
import { put, takeLatest } from 'redux-saga/effects'
import { Action } from 'types'
import { setUser } from 'services/session'

import Api from '../api'

import {
  setErrors,
  clearErrors,
  enableProgress,
  disableProgress,
} from './actions'
import { LOGIN } from './constants'

function* login(action: Action<{ email: string; password: string }>) {
  yield put(clearErrors())
  yield put(enableProgress())

  try {
    const { user } = yield Api.login(action.payload)

    yield put(setUser(user))

    yield put(disableProgress())
  } catch (error) {
    const errors: { [k: string]: string[] } | undefined = path(
      ['data', 'errors'],
      error.response
    )

    yield put(setErrors(errors || {}))
    yield put(disableProgress())
  }
}

function* mainSaga() {
  yield takeLatest(LOGIN, login)
}

export default mainSaga
