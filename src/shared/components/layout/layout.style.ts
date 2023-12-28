import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const MyLayoutStyled = styled(Box)<BoxProps>(() => ({
  backgroundColor: '#000000',
  backgroundImage: ' radial-gradient(#3e3e47 0.8500000000000001px, transparent 0.8500000000000001px), radial-gradient(#3e3e47 0.8500000000000001px, #000000 0.8500000000000001px)',
  backgroundSize: '34px 34px',
  backgroundPosition: '0 0,17px 17px',
  minHeight: '100vh'
}))
