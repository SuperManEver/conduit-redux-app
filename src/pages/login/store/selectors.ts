import { pipe } from 'ramda'
import { createSelector } from 'reselect'
import { RootState } from 'app/store'

import { IState } from './types'

export const errorsItemsSelector = createSelector(
  (state: IState) => state.errors,
  (errors) => errors
)

export function stateSlice(state: RootState): IState {
  return state.login
}

export const errorsSelector = pipe(stateSlice, errorsItemsSelector)
