import { configureStore } from '@reduxjs/toolkit'

import { Player } from '@/shared/models'

import { playerReducer } from './states'

export interface AppStore {
  player: Player;
}

export default configureStore<AppStore>({
  reducer: {
    player: playerReducer
  }
})
