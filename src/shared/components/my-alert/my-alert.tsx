import React from 'react'

import { Alert, AlertProps } from '@mui/material'

interface MyAlertProps extends AlertProps {
  visible?: boolean;
}

const MyAlert: React.FC<MyAlertProps> = ({children, visible = false, ...props}) => {
  
  return visible && (
    <Alert {...props}>
      { children }
    </Alert>
  )
}

export default MyAlert
