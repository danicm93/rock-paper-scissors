import * as React from 'react'

import AppBar, { AppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { LiaArrowLeftSolid } from 'react-icons/lia'
import { Link as RouterLink } from 'react-router-dom'

import { MyButton } from '@/shared/components'

interface MyAppBarProps extends AppBarProps {}

const MyAppBar: React.FC<MyAppBarProps> = (props) => {
  return (
    <AppBar position='relative' color='transparent' {...props}>
      <Toolbar>
        <Typography color='white' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BATALLA
        </Typography>
        <MyButton
          variant='text' 
          color='secondary' 
          component={RouterLink}
          to='/'
        >
          <LiaArrowLeftSolid size='1.5rem' />
          <Typography sx={{ml: 1}}>Volver</Typography>
        </MyButton>
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar
