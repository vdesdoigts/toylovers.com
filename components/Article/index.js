import { Box, Heading as ChakraHeading, Text as ChakraText } from '@chakra-ui/core'

export const Heading = (props) => (
  <ChakraHeading pt="16" fontSize="3.4rem" fontWeight="bold" {...props} />
)

export const Text = (props) => (
  <ChakraText pt="12" fontSize="2rem" fontWeight="medium" {...props} />
)
