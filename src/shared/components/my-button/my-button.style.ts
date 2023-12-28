import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export const MyButtonStyled = styled(Button)<ButtonProps>(() => ({ // ({ theme }) => ...
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
}))
