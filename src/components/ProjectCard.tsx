import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Image,
  Button,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import type { Project } from '../data/projects'

const MotionBox = motion(Box)

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate()
  
  const handleCardClick = () => {
    navigate(`/projects/${project.id}`)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web-app':
        return 'blue'
      case 'ml-project':
        return 'green'
      case 'research':
        return 'purple'
      default:
        return 'gray'
    }
  }

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 }
      }}
      cursor="pointer"
      onClick={handleCardClick}
    >
      <Box
        bg="background.secondary"
        borderRadius="xl"
        overflow="hidden"
        border="1px solid"
        borderColor="whiteAlpha.200"
        h="full"
        _hover={{
          borderColor: 'accent.blue',
          boxShadow: '2xl',
        }}
        transition="all 0.3s"
      >
        {/* Project Image */}
        <Box
          position="relative"
          h="200px"
          bg="background.primary"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          <Box
            w="full"
            h="full"
            bgGradient="linear(to-br, background.primary, background.secondary)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="4xl" color="text.muted">
              {project.category === 'web-app' && '🌐'}
              {project.category === 'ml-project' && '🤖'}
              {project.category === 'research' && '📊'}
            </Text>
          </Box>
          
          {/* Category Badge */}
          <Badge
            position="absolute"
            top={3}
            right={3}
            colorScheme={getCategoryColor(project.category)}
            variant="solid"
            px={2}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="bold"
          >
            {project.category === 'web-app' && 'Web App'}
            {project.category === 'ml-project' && 'ML Project'}
            {project.category === 'research' && 'Research'}
          </Badge>
        </Box>

        {/* Project Content */}
        <VStack p={6} spacing={4} align="start" h="calc(100% - 200px)">
          {/* Title and Subtitle */}
          <VStack spacing={2} align="start" w="full">
            <Heading
              as="h3"
              size="md"
              color="text.primary"
              fontWeight="bold"
              lineHeight="1.2"
            >
              {project.title}
            </Heading>
            <Text
              color="text.secondary"
              fontSize="sm"
              lineHeight="1.4"
              noOfLines={2}
            >
              {project.subtitle}
            </Text>
          </VStack>

          {/* Tech Stack */}
          <VStack spacing={2} align="start" w="full">
            <HStack spacing={2} align="center">
              <Icon as={FaCode} color="text.muted" fontSize="sm" />
              <Text color="text.muted" fontSize="xs" fontWeight="medium">
                Tech Stack
              </Text>
            </HStack>
            <HStack spacing={2} flexWrap="wrap">
              {project.techStack.slice(0, 3).map((tech) => (
                <Badge
                  key={tech}
                  colorScheme="blue"
                  variant="subtle"
                  fontSize="xs"
                  px={2}
                  py={1}
                  borderRadius="full"
                >
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 3 && (
                <Badge
                  colorScheme="gray"
                  variant="subtle"
                  fontSize="xs"
                  px={2}
                  py={1}
                  borderRadius="full"
                >
                  +{project.techStack.length - 3} more
                </Badge>
              )}
            </HStack>
          </VStack>

          {/* Duration */}
          <HStack spacing={2} align="center">
            <Icon as={FaCalendarAlt} color="text.muted" fontSize="sm" />
            <Text color="text.muted" fontSize="xs">
              {project.duration}
            </Text>
          </HStack>

          {/* Action Buttons */}
          <HStack spacing={3} w="full" mt="auto">
            <Button
              size="sm"
              variant="outline"
              colorScheme="blue"
              leftIcon={<FaArrowRight />}
              onClick={(e) => {
                e.stopPropagation()
                navigate(`/projects/${project.id}`)
              }}
              _hover={{
                transform: 'translateY(-1px)',
              }}
              transition="all 0.2s"
              flex={1}
            >
              View Details
            </Button>
            {project.liveDemo && (
              <Button
                size="sm"
                variant="ghost"
                colorScheme="blue"
                leftIcon={<FaExternalLinkAlt />}
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.liveDemo, '_blank', 'noopener,noreferrer')
                }}
                _hover={{
                  transform: 'translateY(-1px)',
                }}
                transition="all 0.2s"
              >
                Demo
              </Button>
            )}
          </HStack>
        </VStack>
      </Box>
    </MotionBox>
  )
}

export default ProjectCard 