import { createAction } from '@reduxjs/toolkit'

import { IUser } from 'types'

export const setUser = createAction<IUser>('session/setUser')
export const restoreUser = createAction<IUser>('session/restoreUser')
