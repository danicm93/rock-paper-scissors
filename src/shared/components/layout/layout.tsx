
import { Container } from '@mui/material'

import { MyLayoutStyled } from './layout.style'

const Layout = ({children}) => {
  return (
    <MyLayoutStyled>
      <Container sx={{minHeight: '100vh'}}>
        {children}
      </Container>
    </MyLayoutStyled>
  )
}

export default Layout
