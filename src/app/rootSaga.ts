import { all } from 'redux-saga/effects'

import loginSaga from 'pages/login/store/sagas'
import sessionSaga from 'services/session/store/sagas'
import signupSaga from 'pages/register/store/sagas'

export default function* rootSaga() {
  yield all([loginSaga(), sessionSaga(), signupSaga()])
}
