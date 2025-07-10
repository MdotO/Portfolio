import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const MotionBox = motion(Box)

const HomePage = () => {
  return (
    <VStack spacing={0}>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </VStack>
  )
}

export default HomePage 