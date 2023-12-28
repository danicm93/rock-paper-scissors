import React from 'react'

import { Box } from '@mui/material'

import { MyButton } from '@/shared/components'

export interface HomeInterface {}

const boxStyle = {
  display:'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  height: '100vh'
}

const Home: React.FC<HomeInterface>  = () => {
  return (
    <Box sx={boxStyle}>
      <MyButton>Comenzar</MyButton>
    </Box>
  )
}

export default Home
