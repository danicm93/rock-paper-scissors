import React from 'react'

import { ButtonProps } from '@mui/material/Button'

import { MyButtonStyled } from './my-button.style'

const MyButton: React.FC<ButtonProps> = (props) => {
  return <MyButtonStyled {...props} />
}

export default MyButton
