import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const Hero = () => {
  const accentColor = 'accent.blue'

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <MotionBox
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      as="section"
      w="full"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      {/* Background gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-b, background.primary, background.secondary)"
        opacity={0.8}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <MotionVStack
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          spacing={8}
          textAlign="center"
        >
          {/* Profile Image */}
          <MotionBox
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            mb={8}
          >
            <Box
              w="200px"
              h="200px"
              mx="auto"
              borderRadius="full"
              overflow="hidden"
              border="4px solid"
              borderColor={accentColor}
              boxShadow="2xl"
            >
              <Image
                src="/public/profile.png"
                alt="Omer's profile photo"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          </MotionBox>

          {/* Main Heading */}
          <MotionBox
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Heading
              as="h1"
              size="3xl"
              color="text.primary"
              mb={4}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Hi, I'm{' '}
              <Text as="span" color={accentColor}>
                Omer
              </Text>
            </Heading>
            <Heading
              as="h2"
              size="xl"
              color="text.secondary"
              mb={6}
              fontWeight="medium"
            >
              Junior Machine Learning Engineer & Researcher
            </Heading>
          </MotionBox>

          {/* Description */}
          <MotionBox
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            maxW="2xl"
            mx="auto"
          >
            <Text
              fontSize="lg"
              color="text.secondary"
              lineHeight="1.8"
              mb={8}
            >
              Passionate about building intelligent systems and creating impactful solutions 
              through machine learning, web technologies, and cutting-edge research. 
              Specializing in NLP, computer vision, and scalable ML infrastructure.
            </Text>
          </MotionBox>

          {/* Call to Action Buttons */}
          <MotionBox
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <HStack spacing={6} justify="center" flexWrap="wrap">
              <Button
                size="lg"
                colorScheme="blue"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                transition="all 0.2s"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="text.primary"
                borderColor="text.secondary"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                _hover={{
                  bg: 'background.secondary',
                  borderColor: accentColor,
                }}
                transition="all 0.2s"
              >
                Get In Touch
              </Button>
            </HStack>
          </MotionBox>

          {/* Scroll Indicator */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            position="absolute"
            bottom={8}
            left="50%"
            transform="translateX(-50%)"
            cursor="pointer"
            onClick={scrollToAbout}
          >
            <VStack spacing={2}>
              <Text fontSize="sm" color="text.muted">
                Scroll to explore
              </Text>
              <ChevronDownIcon
                color="text.muted"
                fontSize="xl"
                animation="bounce 2s infinite"
                sx={{
                  '@keyframes bounce': {
                    '0%, 20%, 50%, 80%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '40%': {
                      transform: 'translateY(-10px)',
                    },
                    '60%': {
                      transform: 'translateY(-5px)',
                    },
                  },
                }}
              />
            </VStack>
          </MotionBox>
        </MotionVStack>
      </Container>
    </MotionBox>
  )
}

export default Hero 