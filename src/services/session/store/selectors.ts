import { pipe, isNil } from 'ramda'
import { createSelector } from 'reselect'

import { RootState } from 'app/store'

import { IState } from './types'

export const currentUserSelector = createSelector(
  (state: IState) => state.currentUser,
  (user) => user
)

export const _userLoggedIn = createSelector(
  (state: IState) => state.currentUser,
  (user) => !isNil(user)
)

function stateSlice(state: RootState): IState {
  return state.session
}

export const userSelector = pipe(stateSlice, currentUserSelector)

export const isUserLoggedIn = pipe(stateSlice, _userLoggedIn)
