import { Box, Container } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import Navigation from './Navigation'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" bg="background.primary">
      <Navigation />
      <Box as="main" pt="80px">
        {children}
      </Box>
      <Box as="footer" py={8} bg="background.secondary" mt="auto">
        <Container maxW="container.xl" textAlign="center">
          <Box color="text.muted" fontSize="sm">
            © 2024 Portfolio. Built with React and Chakra UI.
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Layout 