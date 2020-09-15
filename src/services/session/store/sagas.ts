import { takeLatest, call, put } from 'redux-saga/effects'

import { setUser, restoreUser } from './actions'

import { Action } from 'types'
import { IUser } from 'types'

const AUTH_TOKEN = 'AUTH_TOKEN'

function* loadUserData() {
  const data = localStorage.getItem(AUTH_TOKEN)

  if (data) {
    const userData: IUser = JSON.parse(data)

    yield put(restoreUser(userData))
  }
}

function saveUser(user: IUser): void {
  localStorage.setItem(AUTH_TOKEN, JSON.stringify(user, null, 2))
}

function* onLogin(action: Action<IUser>) {
  yield call(saveUser, action.payload)
}

function* mainSaga() {
  yield takeLatest(setUser.type, onLogin)

  yield call(loadUserData)
}

export default mainSaga
