import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  SimpleGrid,
  Image,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useToast,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaUsers,
  FaUserTie,
  FaTools,
  FaLightbulb,
  FaExclamationTriangle,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
  FaShare,
  FaCode,
  FaDatabase,
  FaBrain,
  FaServer,
  FaCloud
} from 'react-icons/fa'
import { getProjectById, getNextProject, getPreviousProject, type Project } from '../data/projects'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const toast = useToast()
  
  const project = getProjectById(id || '')
  const nextProject = getNextProject(id || '')
  const prevProject = getPreviousProject(id || '')

  if (!project) {
    return (
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} textAlign="center">
          <Heading color="text.primary">Project Not Found</Heading>
          <Text color="text.secondary">The project you're looking for doesn't exist.</Text>
          <Button onClick={() => navigate('/')} colorScheme="blue">
            Back to Home
          </Button>
        </VStack>
      </Container>
    )
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: 'Link copied!',
        description: 'Project link has been copied to clipboard.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return FaCode
      case 'Backend': return FaServer
      case 'ML/AI': return FaBrain
      case 'Database': return FaDatabase
      case 'DevOps': return FaCloud
      default: return FaCode
    }
  }

  return (
    <Box minH="100vh" bg="background.primary">
      {/* Breadcrumb Navigation */}
      <Container maxW="container.xl" py={4}>
        <Breadcrumb color="text.muted" fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/" color="text.muted">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/#projects" color="text.muted">
              Projects
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="text.primary">{project.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>

      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        bg="background.secondary"
        py={20}
      >
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            {/* Project Header */}
            <VStack spacing={6}>
              <Badge
                colorScheme={
                  project.category === 'web-app' ? 'blue' :
                  project.category === 'ml-project' ? 'green' : 'purple'
                }
                variant="solid"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="md"
              >
                {project.category === 'web-app' && 'Web Application'}
                {project.category === 'ml-project' && 'Machine Learning'}
                {project.category === 'research' && 'Research Project'}
              </Badge>
              
              <Heading
                as="h1"
                size="3xl"
                color="text.primary"
                fontWeight="bold"
                lineHeight="1.2"
              >
                {project.title}
              </Heading>
              
              <Text
                fontSize="xl"
                color="text.secondary"
                maxW="3xl"
                lineHeight="1.6"
              >
                {project.subtitle}
              </Text>
            </VStack>

            {/* Project Actions */}
            <HStack spacing={4} flexWrap="wrap" justify="center">
              {project.liveDemo && (
                <Button
                  size="lg"
                  colorScheme="blue"
                  leftIcon={<FaExternalLinkAlt />}
                  onClick={() => window.open(project.liveDemo, '_blank')}
                >
                  Live Demo
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                colorScheme="blue"
                leftIcon={<FaGithub />}
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                View Code
              </Button>
              <Button
                size="md"
                variant="ghost"
                leftIcon={<FaShare />}
                onClick={handleShare}
              >
                Share
              </Button>
            </HStack>

            {/* Project Meta */}
            <HStack spacing={8} flexWrap="wrap" justify="center">
              <HStack spacing={2}>
                <Icon as={FaCalendarAlt} color="text.muted" />
                <Text color="text.muted">{project.duration}</Text>
              </HStack>
              {project.teamSize && (
                <HStack spacing={2}>
                  <Icon as={FaUsers} color="text.muted" />
                  <Text color="text.muted">{project.teamSize} team members</Text>
                </HStack>
              )}
              {project.role && (
                <HStack spacing={2}>
                  <Icon as={FaUserTie} color="text.muted" />
                  <Text color="text.muted">{project.role}</Text>
                </HStack>
              )}
            </HStack>
          </VStack>
        </Container>
      </MotionBox>

      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Project Description */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={6} align="start">
              <Heading size="lg" color="text.primary">
                About This Project
              </Heading>
              <Text
                color="text.secondary"
                fontSize="lg"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                {project.longDescription}
              </Text>
            </VStack>
          </MotionBox>

          {/* Tech Stack */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <VStack spacing={8} align="start">
              <Heading size="lg" color="text.primary">
                Technology Stack
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
                {Object.entries(project.techCategories).map(([category, technologies]) => (
                  <MotionBox
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <VStack
                      p={6}
                      bg="background.secondary"
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      spacing={4}
                      align="start"
                      h="full"
                      _hover={{
                        borderColor: 'accent.blue',
                        transform: 'translateY(-2px)',
                      }}
                      transition="all 0.2s"
                    >
                      <HStack spacing={3}>
                        <Icon as={getCategoryIcon(category)} color="accent.blue" fontSize="lg" />
                        <Heading size="md" color="text.primary">
                          {category}
                        </Heading>
                      </HStack>
                      <VStack spacing={2} align="start" w="full">
                        {technologies.map((tech) => (
                          <Badge
                            key={tech}
                            colorScheme="blue"
                            variant="subtle"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </VStack>
                    </VStack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </VStack>
          </MotionBox>

          {/* Project Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <VStack spacing={8} align="start">
                <Heading size="lg" color="text.primary">
                  Project Gallery
                </Heading>
                
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
                  {project.gallery.map((image, index) => (
                    <MotionBox
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Box
                        borderRadius="lg"
                        overflow="hidden"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        _hover={{
                          borderColor: 'accent.blue',
                          transform: 'scale(1.02)',
                        }}
                        transition="all 0.2s"
                      >
                        <Box
                          w="full"
                          h="200px"
                          bg="background.secondary"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Text fontSize="4xl" color="text.muted">
                            📸
                          </Text>
                        </Box>
                      </Box>
                    </MotionBox>
                  ))}
                </SimpleGrid>
              </VStack>
            </MotionBox>
          )}

          {/* Project Metrics */}
          {project.metrics && Object.keys(project.metrics).length > 0 && (
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <VStack spacing={8} align="start">
                <Heading size="lg" color="text.primary">
                  Key Metrics
                </Heading>
                
                <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={6} w="full">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <MotionBox
                      key={key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <Stat
                        p={6}
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
                      >
                        <StatNumber color="accent.blue" fontSize="2xl" fontWeight="bold">
                          {value}
                        </StatNumber>
                        <StatLabel color="text.secondary" fontSize="sm">
                          {key}
                        </StatLabel>
                      </Stat>
                    </MotionBox>
                  ))}
                </SimpleGrid>
              </VStack>
            </MotionBox>
          )}

          {/* Features */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <VStack spacing={8} align="start">
              <HStack spacing={3}>
                <Icon as={FaLightbulb} color="accent.blue" fontSize="xl" />
                <Heading size="lg" color="text.primary">
                  Key Features
                </Heading>
              </HStack>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                {project.features.map((feature, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <HStack spacing={3} p={4} bg="background.secondary" borderRadius="lg">
                      <Icon as={FaCheckCircle} color="green.400" />
                      <Text color="text.secondary">{feature}</Text>
                    </HStack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </VStack>
          </MotionBox>

          {/* Challenges & Solutions */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <VStack spacing={8} align="start">
              <Heading size="lg" color="text.primary">
                Challenges & Solutions
              </Heading>
              
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
                {/* Challenges */}
                <VStack spacing={6} align="start">
                  <HStack spacing={3}>
                    <Icon as={FaExclamationTriangle} color="orange.400" fontSize="xl" />
                    <Heading size="md" color="text.primary">
                      Challenges
                    </Heading>
                  </HStack>
                  
                  <VStack spacing={3} align="start" w="full">
                    {project.challenges.map((challenge, index) => (
                      <MotionBox
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <HStack spacing={3} p={4} bg="background.secondary" borderRadius="lg" w="full">
                          <Icon as={FaExclamationTriangle} color="orange.400" />
                          <Text color="text.secondary">{challenge}</Text>
                        </HStack>
                      </MotionBox>
                    ))}
                  </VStack>
                </VStack>

                {/* Solutions */}
                <VStack spacing={6} align="start">
                  <HStack spacing={3}>
                    <Icon as={FaCheckCircle} color="green.400" fontSize="xl" />
                    <Heading size="md" color="text.primary">
                      Solutions
                    </Heading>
                  </HStack>
                  
                  <VStack spacing={3} align="start" w="full">
                    {project.solutions.map((solution, index) => (
                      <MotionBox
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <HStack spacing={3} p={4} bg="background.secondary" borderRadius="lg" w="full">
                          <Icon as={FaCheckCircle} color="green.400" />
                          <Text color="text.secondary">{solution}</Text>
                        </HStack>
                      </MotionBox>
                    ))}
                  </VStack>
                </VStack>
              </SimpleGrid>
            </VStack>
          </MotionBox>

          {/* Highlights */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <VStack spacing={8} align="start">
              <Heading size="lg" color="text.primary">
                Project Highlights
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} w="full">
                {project.highlights.map((highlight, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box
                      p={6}
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
                    >
                      <Text color="text.secondary" fontSize="lg">
                        {highlight}
                      </Text>
                    </Box>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </VStack>
          </MotionBox>

          {/* Project Navigation */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <VStack spacing={8} align="start">
              <Heading size="lg" color="text.primary">
                Explore More Projects
              </Heading>
              
              <HStack spacing={4} w="full" justify="space-between">
                <Button
                  leftIcon={<FaArrowLeft />}
                  variant="outline"
                  colorScheme="blue"
                  onClick={() => prevProject && navigate(`/projects/${prevProject.id}`)}
                  isDisabled={!prevProject}
                >
                  {prevProject ? prevProject.title : 'No Previous Project'}
                </Button>
                
                <Button
                  rightIcon={<FaArrowRight />}
                  variant="outline"
                  colorScheme="blue"
                  onClick={() => nextProject && navigate(`/projects/${nextProject.id}`)}
                  isDisabled={!nextProject}
                >
                  {nextProject ? nextProject.title : 'No Next Project'}
                </Button>
              </HStack>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default ProjectDetailPage 