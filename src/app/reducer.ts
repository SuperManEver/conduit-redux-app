import counterReducer from '../features/counter/counterSlice'
import loginReducer from 'pages/login/store/reducer'
import sessionReducer from 'services/session/store/reducer'

export default {
  counter: counterReducer,
  login: loginReducer,
  session: sessionReducer,
}
