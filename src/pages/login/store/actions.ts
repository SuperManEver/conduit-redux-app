import { createAction } from '@reduxjs/toolkit'

import { LOGIN, SET_ERRORS, CLEAR_ERRORS } from './constants'

export const login = createAction<{ email: string; password: string }>(LOGIN)

export const setErrors = createAction<{ [key: string]: string[] }>(SET_ERRORS)

export const clearErrors = createAction<void>(CLEAR_ERRORS)
