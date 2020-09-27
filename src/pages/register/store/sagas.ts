import { path } from 'ramda'
import { put, takeLatest } from 'redux-saga/effects'
import { Action } from 'types'
import { setUser } from 'services/session'
import { TSignupParams } from './types'

import {
  setErrors,
  clearErrors,
  enableProgress,
  disableProgress,
} from './actions'

import Api from '../api'

import { SIGNUP } from './constants'

function* signup(action: Action<TSignupParams>) {
  yield put(clearErrors())
  yield put(enableProgress())

  try {
    const { user } = yield Api.signup(action.payload)

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
  yield takeLatest(SIGNUP, signup)
}

export default mainSaga
