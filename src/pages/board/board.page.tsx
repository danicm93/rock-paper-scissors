import React, { useState } from 'react'

import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { LiaArrowLeftSolid, LiaHandPaperSolid, LiaHandRockSolid, LiaHandScissorsSolid  } from 'react-icons/lia'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { createPlayerAdapter } from '@/shared/adapters/player.adapter'
import { MyButton } from '@/shared/components'
import MyAlert from '@/shared/components/my-alert/my-alert'
import { useAsync, useFetchAndLoad } from '@/shared/hooks'
import { Player } from '@/shared/models'
import { AppStore } from '@/shared/redux/store'
import { getSummer } from '@/shared/services'
import { PlayerEmptyState } from '@/shared/states'

import MyAppBar from './components/app-bar/app-bar'

export interface BoardInterface {}

const containerStyle = {
  display:'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  height: '100vh'
}

/*
  - Botón de cada acción
  - Comparativa de cada acción
  - Ramdon acción rival
*/

const Board: React.FC<BoardInterface>  = () => {
  const [rival, setRival] = useState<Player>(PlayerEmptyState)
  
  const playerState = useSelector((store: AppStore) => store.player)
  const { loading: loadingRival, callEndpoint } = useFetchAndLoad()

  const getApiData = async () => await callEndpoint(getSummer())

  const adaptRival = (character: any) => {
    setRival(createPlayerAdapter(character))
  }

  useAsync(getApiData, adaptRival, () => {})

  // console.log('loadingRival', loadingRival, rival.id)
  
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
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Box sx={{minWidth: 250}}>
            { loadingRival || !rival.id ? '...' : (
              <Card sx={{ width: '100%' }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={rival.image}
                  title={rival.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" sx={{ m: 0 }}>
                    { rival.name }
                  </Typography>
                </CardContent>
              </Card>
            )}
            <Box sx={{ 
              width: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'stretch',
              mt: 2
            }}>
              <ButtonGroup variant="contained" fullWidth>
                <Button><LiaHandPaperSolid /></Button>
                <Button><LiaHandRockSolid /></Button>
                <Button><LiaHandScissorsSolid /></Button>
              </ButtonGroup>
            </Box>
          </Box>
          <Box>2</Box>
          <Box sx={{minWidth: 250}}>
            <Card sx={{ width: '100%' }}>
              <CardMedia
                sx={{ height: 200 }}
                image={playerState.image}
                title={playerState.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" sx={{ m: 0 }}>
                  { playerState.name }
                </Typography>
              </CardContent>
            </Card>
            <Box sx={{ 
              width: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'stretch',
              mt: 2
            }}>
              <ButtonGroup variant="contained" fullWidth>
                <Button><LiaHandPaperSolid /></Button>
                <Button><LiaHandRockSolid /></Button>
                <Button><LiaHandScissorsSolid /></Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Stack>
      )}
      <Box>
        {/* Aqui se vienen cositas */}
      </Box>
    </Box>
  )
}

export default Board
