import { createSlice } from '@reduxjs/toolkit'

import { Player } from '@/shared/models/player.model'

export const PlayerEmptyState: Player = {
  id: null,
  image: '',
  name: '',
  gender: '',
  species: ''
}

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
