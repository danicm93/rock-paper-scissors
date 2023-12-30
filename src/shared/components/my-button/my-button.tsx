import React from 'react'

import { ButtonProps } from '@mui/material/Button'

import { MyButtonStyled } from './my-button.style'

interface MyButtonProps extends ButtonProps {
  loading: boolean;
}

const MyButton: React.FC<MyButtonProps> = ({children, loading = false, ...props}) => {
  
  return (
    <MyButtonStyled {...props}>
      { loading ? 'cargando ...' : children }
    </MyButtonStyled>
  )
}

export default MyButton
