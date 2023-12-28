import React from 'react'

import { Button } from '@mui/material'

import { CenteredBox } from '.'


export interface HomeInterface {}

const Home: React.FC<HomeInterface>  = () => {
  return (
    <CenteredBox>
      <Button>Comenzar</Button>
    </CenteredBox>
  )
}

export default Home
