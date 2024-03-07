import axios from 'axios'

import { Player } from '@/shared/models'
import { loadAbort } from '@/shared/utilities'

export const login = () => {
  const controller = loadAbort()
  return {
    call: axios.get<Player>('https://rickandmortyapi.com/api/character/2', { signal: controller.signal }),
    controller
  }
}

export const getSummer = () => {
  const controller = loadAbort()
  return {
    call: axios.get<Player>('https://rickandmortyapi.com/api/character/3', { signal: controller.signal }),
    controller
  }
}

// export const getMorty = () => {
//   return axios.get<Player>('https://rickandmortyapi.com/api/character/2')
// }

// export const getRick = () => {
//   return axios.get<Player>('https://rickandmortyapi.com/api/character/1')
// }

// export const getCoolMorty = () => {
//   const controller = loadAbort()
//   return { call: axios.get<Player>('https://rickandmortyapi.com/api/character/2', { signal: controller.signal }), controller }
// }

// export const getCoolRick = () => {
//   const controller = loadAbort()
//   return { call: axios.get<Player>('https://rickandmortyapi.com/api/character/1', { signal: controller.signal }), controller }
// }
