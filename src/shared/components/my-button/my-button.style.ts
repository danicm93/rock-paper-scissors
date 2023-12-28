import Button, { ButtonProps } from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'

export const MyButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  // color: theme.palette.success.main,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  // '& .MuiSlider-thumb': {
  //   '&:hover, &.Mui-focusVisible': {
  //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
  //   },
  //   '&.Mui-active': {
  //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
  //   },
  // },
}))
