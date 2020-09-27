import { createAction } from '@reduxjs/toolkit'

import { SIGNUP, SET_ERRORS, CLEAR_ERRORS } from './constants'
import { TSignupParams } from './types'

export const signup = createAction<TSignupParams>(SIGNUP)

export const setErrors = createAction<{ [key: string]: string[] }>(SET_ERRORS)

export const clearErrors = createAction<void>(CLEAR_ERRORS)

export const enableProgress = createAction<void>('ENABLE_PROGRESS')

export const disableProgress = createAction<void>('DISABLE_PROGRESS')
