import React from 'react'

import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

import { createPlayerAdapter } from '@/shared/adapters/player.adapter'
import { MyButton } from '@/shared/components'
import { useFetchAndLoad } from '@/shared/hooks'
import { createPlayer } from '@/shared/redux/states/player.state'
import { AppStore } from '@/shared/redux/store'
import { login } from '@/shared/services/public.services'

export interface HomeInterface {}

const boxStyle = {
  display:'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  height: '100vh'
}

const Home: React.FC<HomeInterface>  = () => {

  const playerState = useSelector((store: AppStore) => store.player)
  
  const { loading, callEndpoint } = useFetchAndLoad()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleClick = async () => {
    if(!playerState.id) {
      const morty = await callEndpoint(login())
      dispatch(createPlayer(createPlayerAdapter(morty)))
    }

    navigate('/board')
  }
  
  return (
    <Box sx={boxStyle}>
      <MyButton 
        variant='contained' 
        onClick={handleClick}
        loading={loading}
      >Comenzar</MyButton>
    </Box>
  )
}

export default Home
