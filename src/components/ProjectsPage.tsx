import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Badge,
  useToast,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { FaSearch, FaFilter } from 'react-icons/fa'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const toast = useToast()

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-app', name: 'Web Applications' },
    { id: 'ml-project', name: 'Machine Learning' },
    { id: 'research', name: 'Research Papers' },
  ]

  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(term) ||
        project.subtitle.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.techStack.some(tech => tech.toLowerCase().includes(term))
      )
    }

    return filtered
  }, [searchTerm, selectedCategory])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    toast({
      title: 'Filters cleared',
      description: 'All filters have been reset.',
      status: 'info',
      duration: 2000,
      isClosable: true,
    })
  }

  return (
    <Box minH="100vh" bg="background.primary" pt={20}>
      <Container maxW="container.xl" py={20}>
        <MotionVStack spacing={12}>
          {/* Page Header */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            textAlign="center"
          >
            <Heading
              as="h1"
              size="3xl"
              color="text.primary"
              mb={4}
              fontWeight="bold"
            >
              All Projects
            </Heading>
            <Text
              fontSize="lg"
              color="text.secondary"
              maxW="3xl"
              mx="auto"
              lineHeight="1.8"
            >
              Explore my complete portfolio of projects, from web applications and machine learning solutions to research papers. Each project showcases different aspects of my technical skills and problem-solving approach.
            </Text>
          </MotionBox>

          {/* Search and Filter Controls */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            w="full"
          >
            <VStack spacing={6} w="full">
              {/* Search Bar */}
              <InputGroup size="lg" maxW="2xl">
                <InputLeftElement pointerEvents="none">
                  <FaSearch color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Search projects by title, description, or tech stack..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  bg="background.secondary"
                  borderColor="whiteAlpha.300"
                  color="text.primary"
                  _hover={{
                    borderColor: 'accent.blue',
                  }}
                  _focus={{
                    borderColor: 'accent.blue',
                    boxShadow: '0 0 0 1px var(--chakra-colors-accent-blue)',
                  }}
                />
              </InputGroup>

              {/* Filter Controls */}
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <HStack spacing={3}>
                  <FaFilter color="gray.400" />
                  <Text color="text.muted" fontSize="sm" fontWeight="medium">
                    Filter by:
                  </Text>
                </HStack>
                
                <Select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  bg="background.secondary"
                  borderColor="whiteAlpha.300"
                  color="text.primary"
                  maxW="200px"
                  _hover={{
                    borderColor: 'accent.blue',
                  }}
                  _focus={{
                    borderColor: 'accent.blue',
                    boxShadow: '0 0 0 1px var(--chakra-colors-accent-blue)',
                  }}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>

                {(searchTerm || selectedCategory !== 'all') && (
                  <Button
                    size="sm"
                    variant="ghost"
                    color="text.muted"
                    onClick={clearFilters}
                    _hover={{
                      color: 'text.primary',
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </HStack>

              {/* Results Count */}
              <Text color="text.muted" fontSize="sm">
                Showing {filteredProjects.length} of {projects.length} projects
              </Text>
            </VStack>
          </MotionBox>

          {/* Projects Grid */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            w="full"
          >
            {filteredProjects.length > 0 ? (
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={8}
                w="full"
              >
                {filteredProjects.map((project, index) => (
                  <MotionBox
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </MotionBox>
                ))}
              </SimpleGrid>
            ) : (
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                textAlign="center"
                py={20}
              >
                <VStack spacing={6}>
                  <Text fontSize="2xl" color="text.muted">
                    No projects found
                  </Text>
                  <Text color="text.secondary" maxW="md">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </Text>
                  <Button
                    colorScheme="blue"
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                </VStack>
              </MotionBox>
            )}
          </MotionBox>

          {/* Category Breakdown */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            w="full"
          >
            <VStack spacing={6}>
              <Heading size="md" color="text.primary" textAlign="center">
                Project Categories
              </Heading>
              
              <HStack spacing={6} flexWrap="wrap" justify="center">
                {categories.slice(1).map((category) => {
                  const count = projects.filter(p => p.category === category.id).length
                  return (
                    <Box
                      key={category.id}
                      p={4}
                      bg="background.secondary"
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      textAlign="center"
                      _hover={{
                        borderColor: 'accent.blue',
                        transform: 'translateY(-2px)',
                      }}
                      transition="all 0.2s"
                      cursor="pointer"
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      <Text color="text.primary" fontWeight="bold" fontSize="lg">
                        {count}
                      </Text>
                      <Text color="text.secondary" fontSize="sm">
                        {category.name}
                      </Text>
                    </Box>
                  )
                })}
              </HStack>
            </VStack>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Box>
  )
}

export default ProjectsPage 