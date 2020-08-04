import React from 'react'
import { Text } from '@chakra-ui/core'
import Container from '../Container'

const Footer = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      py="8"
    >
      <Text
        as="a"
        href="https://twitter.com/vdesdoigts"
        target="_blank"
        fontSize="1.4rem"
      >© 2020 Vincent Desdoigts</Text>
    </Container>
  )
}

export default Footer
