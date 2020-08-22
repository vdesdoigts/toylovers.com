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
        fontSize="1.4rem"
      >
        <Text
          as="a"
          href="https://interfacelovers.com/"
        >
          Inspired by interfacelovers.com
        </Text>
        {' '}-{' '}
        <Text
          as="a"
          href="https://twitter.com/vdesdoigts"
          target="_blank"
          fontSize="1.4rem"
        >
          Made by Vincent Desdoigts
        </Text>
        {' '}-{' '}
        <Text as="span">
          © 2020 Toy Lovers
        </Text>
      </Text>
      
    </Container>
  )
}

export default Footer
