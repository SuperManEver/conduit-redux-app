import { createReducer } from '@reduxjs/toolkit'

import { IState } from './types'
import { setErrors, clearErrors } from './actions'

const loginReducer = createReducer<IState>(
  {
    errors: {},
  },
  {
    [setErrors.type]: (state, action) => {
      const errors = action.payload
      state.errors = errors
    },
    [clearErrors.type]: (state) => {
      state.errors = {}
    },
  }
)

export default loginReducer
