import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import rootSaga from './rootSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// then run the saga
sagaMiddleware.run(rootSaga)
