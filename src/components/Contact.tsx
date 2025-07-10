import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaGoogle,
  FaTwitter
} from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    // For now, just show success message
    // In production, you'd integrate with a service like Formspree or your own backend
    alert('Message sent! Thank you for reaching out. I\'ll get back to you soon.')

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'San Francisco, CA',
      link: null,
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/username',
      icon: FaGithub,
      color: 'gray.400',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/username',
      icon: FaLinkedin,
      color: 'blue.400',
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=username',
      icon: FaGoogle,
      color: 'yellow.400',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/username',
      icon: FaTwitter,
      color: 'blue.300',
    },
  ]

  return (
    <MotionBox
      id="contact"
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
              Get In Touch
            </Heading>
            <Text
              fontSize="lg"
              color="text.secondary"
              maxW="3xl"
              mx="auto"
              lineHeight="1.8"
            >
              I'm always interested in new opportunities, collaborations, and interesting projects. 
              Feel free to reach out if you'd like to discuss anything!
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="full">
            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VStack spacing={6} align="start">
                <Heading size="lg" color="text.primary">
                  Send a Message
                </Heading>
                
                <Box as="form" w="full" onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                      <VStack align="start" spacing={2} w="full">
                        <Text color="text.primary" fontWeight="medium">Name *</Text>
                        <Input
                          value={formData.name}
                          onChange={handleInputChange('name')}
                          bg="background.primary"
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
                      </VStack>

                      <VStack align="start" spacing={2} w="full">
                        <Text color="text.primary" fontWeight="medium">Email *</Text>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange('email')}
                          bg="background.primary"
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
                      </VStack>
                    </SimpleGrid>

                    <VStack align="start" spacing={2} w="full">
                      <Text color="text.primary" fontWeight="medium">Subject *</Text>
                      <Input
                        value={formData.subject}
                        onChange={handleInputChange('subject')}
                        bg="background.primary"
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
                    </VStack>

                    <VStack align="start" spacing={2} w="full">
                      <Text color="text.primary" fontWeight="medium">Message *</Text>
                      <Textarea
                        value={formData.message}
                        onChange={handleInputChange('message')}
                        rows={6}
                        bg="background.primary"
                        borderColor="whiteAlpha.300"
                        color="text.primary"
                        resize="vertical"
                        _hover={{
                          borderColor: 'accent.blue',
                        }}
                        _focus={{
                          borderColor: 'accent.blue',
                          boxShadow: '0 0 0 1px var(--chakra-colors-accent-blue)',
                        }}
                      />
                    </VStack>

                    <Button
                      type="submit"
                      size="lg"
                      colorScheme="blue"
                      isLoading={isSubmitting}
                      w="full"
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      transition="all 0.2s"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </VStack>
                </Box>
              </VStack>
            </MotionBox>

            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <VStack spacing={8} align="start">
                <Heading size="lg" color="text.primary">
                  Contact Information
                </Heading>

                {/* Contact Details */}
                <VStack spacing={4} align="start" w="full">
                  {contactInfo.map((info) => (
                    <HStack
                      key={info.label}
                      spacing={4}
                      p={4}
                      bg="background.primary"
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      w="full"
                      _hover={{
                        borderColor: 'accent.blue',
                        transform: 'translateX(4px)',
                      }}
                      transition="all 0.2s"
                      cursor={info.link ? 'pointer' : 'default'}
                      onClick={() => info.link && window.open(info.link, '_blank')}
                    >
                      <Icon as={info.icon} color="accent.blue" fontSize="lg" />
                      <VStack align="start" spacing={0}>
                        <Text color="text.muted" fontSize="sm" fontWeight="medium">
                          {info.label}
                        </Text>
                        <Text color="text.primary" fontSize="md">
                          {info.value}
                        </Text>
                      </VStack>
                    </HStack>
                  ))}
                </VStack>

                {/* Social Links */}
                <VStack spacing={4} align="start" w="full">
                  <Heading size="md" color="text.primary">
                    Follow Me
                  </Heading>
                  
                  <HStack spacing={4} flexWrap="wrap">
                    {socialLinks.map((link) => (
                      <MotionBox
                        key={link.name}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Box
                          p={3}
                          bg="background.primary"
                          borderRadius="lg"
                          border="1px solid"
                          borderColor="whiteAlpha.200"
                          cursor="pointer"
                          onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
                          _hover={{
                            borderColor: link.color,
                            transform: 'translateY(-2px)',
                          }}
                          transition="all 0.2s"
                        >
                          <Icon as={link.icon} color={link.color} fontSize="xl" />
                        </Box>
                      </MotionBox>
                    ))}
                  </HStack>
                </VStack>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </MotionVStack>
      </Container>
    </MotionBox>
  )
}

export default Contact 