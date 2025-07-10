import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { 
  FaPython, 
  FaReact, 
  FaDatabase, 
  FaBrain,
  FaGithub,
  FaLinkedin,
  FaGoogle,
  FaEnvelope
} from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

interface Skill {
  name: string
  icon: any
  color: string
  category: string
}

interface SocialLink {
  name: string
  url: string
  icon: any
  color: string
}

const About = () => {
  const accentColor = 'accent.blue'

  const skills: Skill[] = [
    { name: 'Python', icon: FaPython, color: 'blue.400', category: 'Programming' },
    { name: 'React', icon: FaReact, color: 'cyan.400', category: 'Frontend' },
    { name: 'TensorFlow', icon: FaBrain, color: 'orange.400', category: 'ML/AI' },
    { name: 'PostgreSQL', icon: FaDatabase, color: 'teal.400', category: 'Database' },
    { name: 'PyTorch', icon: FaBrain, color: 'red.400', category: 'ML/AI' },
    { name: 'FastAPI', icon: FaPython, color: 'green.400', category: 'Backend' },
  ]

  const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/username', icon: FaGithub, color: 'gray.400' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: FaLinkedin, color: 'blue.400' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=username', icon: FaGoogle, color: 'yellow.400' },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: FaEnvelope, color: 'red.400' },
  ]

  const skillCategories = {
    'Programming': ['Python', 'JavaScript', 'TypeScript', 'C++'],
    'ML/AI': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    'Frontend': ['React', 'Next.js', 'Chakra UI', 'Framer Motion'],
    'Backend': ['FastAPI', 'Django', 'Node.js', 'Express'],
    'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    'Tools': ['Docker', 'Kubernetes', 'Git', 'AWS'],
  }

  return (
    <MotionBox
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      as="section"
      w="full"
      py={20}
      bg="background.secondary"
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
              About Me
            </Heading>
            <Text
              fontSize="lg"
              color="text.secondary"
              maxW="3xl"
              mx="auto"
              lineHeight="1.8"
            >
              I'm a Machine Learning Engineer with a passion for building intelligent systems 
              and creating impactful solutions. With expertise in both research and production 
              environments, I bridge the gap between cutting-edge ML research and practical applications.
            </Text>
          </MotionBox>

          {/* Experience and Background */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <VStack align="start" spacing={4}>
                <Heading size="lg" color="text.primary">
                  Background
                </Heading>
                <Text color="text.secondary" lineHeight="1.8">
                  With a strong foundation in computer science and mathematics, I specialize in 
                  natural language processing, computer vision, and scalable machine learning systems. 
                  My research focuses on improving model performance and developing novel approaches 
                  to complex ML challenges.
                </Text>
                <Text color="text.secondary" lineHeight="1.8">
                  I have experience leading ML projects from conception to deployment, working with 
                  cross-functional teams to deliver production-ready solutions that drive business value.
                </Text>
              </VStack>

              <VStack align="start" spacing={4}>
                <Heading size="lg" color="text.primary">
                  Expertise
                </Heading>
                <Text color="text.secondary" lineHeight="1.8">
                  My expertise spans the entire ML pipeline - from data preprocessing and model 
                  development to deployment and monitoring. I'm particularly skilled in building 
                  interactive dashboards for ML model monitoring and creating robust, scalable 
                  infrastructure for ML systems.
                </Text>
                <Text color="text.secondary" lineHeight="1.8">
                  I'm also passionate about open-source contributions and knowledge sharing, 
                  regularly publishing research papers and contributing to the ML community.
                </Text>
              </VStack>
            </SimpleGrid>
          </MotionBox>

          {/* Skills Section */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            w="full"
          >
            <VStack spacing={8}>
              <Heading size="lg" color="text.primary" textAlign="center">
                Skills & Technologies
              </Heading>
              
              <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6} w="full">
                {Object.entries(skillCategories).map(([category, skillList]) => (
                  <MotionBox
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <VStack
                      p={6}
                      bg="background.primary"
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      spacing={3}
                      h="full"
                      _hover={{
                        borderColor: accentColor,
                        transform: 'translateY(-2px)',
                      }}
                      transition="all 0.2s"
                    >
                      <Heading size="md" color="text.primary">
                        {category}
                      </Heading>
                      <VStack spacing={2} w="full">
                        {skillList.map((skill) => (
                          <Badge
                            key={skill}
                            colorScheme="blue"
                            variant="subtle"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </VStack>
                    </VStack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </VStack>
          </MotionBox>

          {/* Social Links */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            w="full"
          >
            <VStack spacing={6}>
              <Heading size="lg" color="text.primary" textAlign="center">
                Connect With Me
              </Heading>
              
              <HStack spacing={6} flexWrap="wrap" justify="center">
                {socialLinks.map((link) => (
                  <MotionBox
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Box
                      p={4}
                      borderRadius="lg"
                      bg="background.primary"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{
                        borderColor: link.color,
                        transform: 'translateY(-2px)',
                      }}
                      transition="all 0.2s"
                      display="flex"
                      alignItems="center"
                      gap={3}
                      cursor="pointer"
                      onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
                    >
                      <Icon as={link.icon} color={link.color} fontSize="xl" />
                      <Text color="text.primary" fontWeight="medium">
                        {link.name}
                      </Text>
                    </Box>
                  </MotionBox>
                ))}
              </HStack>
            </VStack>
          </MotionBox>
        </MotionVStack>
      </Container>
    </MotionBox>
  )
}

export default About 