import { createReducer } from '@reduxjs/toolkit'

import { IState } from './types'
import {
  setErrors,
  clearErrors,
  enableProgress,
  disableProgress,
} from './actions'

const signupReducer = createReducer<IState>(
  {
    errors: {},
    progress: false,
  },
  {
    [setErrors.type]: (state, action) => {
      const errors = action.payload
      state.errors = errors
    },
    [clearErrors.type]: (state) => {
      state.errors = {}
    },
    [enableProgress.type]: (state) => {
      state.progress = true
    },
    [disableProgress.type]: (state) => {
      state.progress = false
    },
  }
)

export default signupReducer
