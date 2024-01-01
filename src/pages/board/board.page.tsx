import React from 'react'

import { Box, Typography } from '@mui/material'
import { LiaArrowLeftSolid } from 'react-icons/lia'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { createPlayerAdapter } from '@/shared/adapters/player.adapter'
import { MyButton } from '@/shared/components'
import MyAlert from '@/shared/components/my-alert/my-alert'
import { useFetchAndLoad } from '@/shared/hooks'
import { createPlayer } from '@/shared/redux/states/player.state'
import { AppStore } from '@/shared/redux/store'
import { login } from '@/shared/services/public.services'

import MyAppBar from './components/app-bar/app-bar'

export interface BoardInterface {}

const containerStyle = {
  display:'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  height: '100vh'
}

const Board: React.FC<BoardInterface>  = () => {

  const { loading, callEndpoint } = useFetchAndLoad()
  const dispatch = useDispatch()
  const playerState = useSelector((store: AppStore) => store.player)
  
  const handleClick = async () => {
    const morty = await callEndpoint(login())
    dispatch(createPlayer(createPlayerAdapter(morty)))
  }
  
  return (
    <Box sx={containerStyle}>
      <MyAppBar />
      <MyAlert
        severity="error"
        visible={!playerState.id }
        action={
          <MyButton 
            size="small"
            color='inherit' 
            variant='text'
            component={RouterLink}
            to='/'
          >
            <LiaArrowLeftSolid />
            <Typography sx={{ml: 1}}>Volver</Typography>
          </MyButton>
        }
      >
        No se ha podido cargar a tu personaje
      </MyAlert>
      { playerState.id && (
        <MyButton 
          variant='contained' 
          onClick={handleClick}
          loading={loading}
        >Dentro</MyButton>
      )}
      <Box color="white">
        Acciones
      </Box>
    </Box>
  )
}

export default Board
