
import { Container } from '@mui/material'

import { MyLayoutStyled } from './layout.style'

type LayoutProps = {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MyLayoutStyled>
      <Container sx={{minHeight: '100vh'}}>
        {children}
      </Container>
    </MyLayoutStyled>
  )
}

export default Layout
