import React from 'react'

import { Alert, Box, Container, Typography } from '@mui/material'
import { LiaArrowLeftSolid } from 'react-icons/lia'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { createPlayerAdapter } from '@/shared/adapters/player.adapter'
import { MyButton } from '@/shared/components'
import { useFetchAndLoad } from '@/shared/hooks'
import { createPlayer } from '@/shared/redux/states/player.state'
import { AppStore } from '@/shared/redux/store'
import { login } from '@/shared/services/public.services'

import MyAppBar from './components/app-bar/app-bar'

export interface BoardInterface {}

const containerStyle = {
  display:'flex',
  flexDirection: 'column',
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
    <Container sx={containerStyle}>
      <MyAppBar />
      { !playerState.id ? (
        <Alert
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
            This is a success alert — check it out!
        </Alert>    
      ) :(
        <MyButton 
          variant='contained' 
          onClick={handleClick}
          loading={loading}
        >Dentro</MyButton>
      )
      }
    </Container>
  )
}

export default Board
