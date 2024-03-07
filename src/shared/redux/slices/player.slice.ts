import { createSlice } from '@reduxjs/toolkit'

import { PlayerEmptyState } from '@/shared/states'


export const playerSlice = createSlice({
  name: 'player',
  initialState: PlayerEmptyState,
  reducers: {
    createPlayer: (_, action) => action.payload,
    resetPlayer: () => PlayerEmptyState
  }
})

export const { createPlayer, resetPlayer } = playerSlice.actions

export default playerSlice.reducer
