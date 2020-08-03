import React from 'react'
import { Container as ChakraContainer } from '@chakra-ui/core'

const Container = ({ children, ...rest }) => (
  <ChakraContainer maxW="xl" px="16" {...rest}>
    {children}
  </ChakraContainer>
)

export default Container
