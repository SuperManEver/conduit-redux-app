import { createReducer } from '@reduxjs/toolkit'
import { IUser, Action } from 'types'

import { setUser, restoreUser } from './actions'
import { IState } from './types'

const initialState: IState = {
  currentUser: null,
}

const sessionReducer = createReducer<IState>(initialState, {
  [setUser.type]: (state, action: Action<IUser>) => {
    state.currentUser = action.payload
  },

  [restoreUser.type]: (state, action: Action<IUser>) => {
    state.currentUser = action.payload
  },
})

export default sessionReducer
