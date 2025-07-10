import { Box, VStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { spinner, pulse } from '../utils/animations'

const MotionBox = motion(Box)

const LoadingSpinner = () => {
  return (
    <VStack
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="background.primary"
      zIndex={9999}
      justify="center"
      align="center"
      spacing={6}
    >
      <MotionBox
        variants={spinner}
        animate="animate"
        w="60px"
        h="60px"
        border="4px solid"
        borderColor="border.primary"
        borderTopColor="accent.blue"
        borderRadius="full"
      />
      
      <MotionBox
        variants={pulse}
        animate="animate"
      >
        <Text
          color="text.secondary"
          fontSize="lg"
          fontWeight="medium"
        >
          Loading Portfolio...
        </Text>
      </MotionBox>
    </VStack>
  )
}

export default LoadingSpinner 