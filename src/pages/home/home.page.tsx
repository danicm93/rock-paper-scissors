import React from 'react'

import { Box, Container, Typography } from '@mui/material'

export interface HomeInterface {}

const Home: React.FC<HomeInterface>  = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Vite.js example in TypeScript
        </Typography>
      </Box>
    </Container>
  )
}

export default Home
