import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface NavLinkProps {
  children: React.ReactNode
  href: string
  isExternal?: boolean
}

const NavLink = ({ children, href, isExternal }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (isExternal) {
      // For external links, navigate using React Router
      window.location.href = href
      return
    }
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      color="text.primary"
      _hover={{
        textDecoration: 'none',
        color: 'accent.blue',
      }}
      _active={{
        color: 'accent.blue',
      }}
    >
      {children}
    </Button>
  )
}

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <MotionBox
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      bg="background.secondary"
      px={4}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      boxShadow="lg"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="text.primary"
          cursor="pointer"
          onClick={() => document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Portfolio
        </Text>

        <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="/projects" isExternal>All Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </HStack>

        <IconButton
          size="md"
          aria-label="Open Menu"
          display={{ base: 'flex', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          color="text.primary"
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </IconButton>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="/projects" isExternal>All Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Stack>
        </Box>
      ) : null}
    </MotionBox>
  )
}

export default Navigation 