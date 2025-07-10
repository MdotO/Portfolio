import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Badge,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { projects, type Project } from '../data/projects'
import ProjectCard from './ProjectCard'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-app', name: 'Web Applications' },
    { id: 'ml-project', name: 'Machine Learning' },
    { id: 'research', name: 'Research Papers' },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <MotionBox
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      as="section"
      w="full"
      py={20}
    >
      <Container maxW="container.xl">
        <MotionVStack spacing={12}>
          {/* Section Header */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            textAlign="center"
          >
            <Heading
              as="h2"
              size="2xl"
              color="text.primary"
              mb={4}
              fontWeight="bold"
            >
              Featured Projects
            </Heading>
            <Text
              fontSize="lg"
              color="text.secondary"
              maxW="3xl"
              mx="auto"
              lineHeight="1.8"
            >
              Here are some of my recent projects showcasing my work in machine learning, 
              web development, and research. Each project demonstrates different aspects 
              of my technical skills and problem-solving approach.
            </Text>
          </MotionBox>

          {/* Category Filter */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            w="full"
          >
            <HStack spacing={4} justify="center" flexWrap="wrap">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'solid' : 'outline'}
                  colorScheme="blue"
                  size="md"
                  onClick={() => setSelectedCategory(category.id)}
                  _hover={{
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s"
                >
                  {category.name}
                </Button>
              ))}
            </HStack>
          </MotionBox>

          {/* Projects Grid */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            w="full"
          >
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={8}
              w="full"
            >
              {filteredProjects.map((project, index) => (
                <MotionBox
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </MotionBox>
              ))}
            </SimpleGrid>

            {/* No projects message */}
            {filteredProjects.length === 0 && (
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                textAlign="center"
                py={12}
              >
                <Text color="text.secondary" fontSize="lg">
                  No projects found in this category. Please select a different category.
                </Text>
              </MotionBox>
            )}
          </MotionBox>

          {/* View All Projects CTA */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            textAlign="center"
          >
            <VStack spacing={4}>
              <Text color="text.secondary" fontSize="lg">
                Want to see more of my work?
              </Text>
              <Button
                size="lg"
                variant="outline"
                color="text.primary"
                borderColor="text.secondary"
                _hover={{
                  bg: 'background.secondary',
                  borderColor: 'accent.blue',
                }}
                transition="all 0.2s"
                onClick={() => window.open('https://github.com/username', '_blank')}
              >
                View All Projects on GitHub
              </Button>
            </VStack>
          </MotionBox>
        </MotionVStack>
      </Container>
    </MotionBox>
  )
}

export default Projects 