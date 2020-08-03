import React, { Children } from 'react'
import { Box } from '@chakra-ui/core'

const beforeStyle = {
  bottom: '-6px',
  right: '-6px',
  bg: '#FFFC0B',
}

const RoundedButton = ({ children, ...rest }) => (
  <Box
    as="button"
    position="relative"
    width="4.8rem"
    height="4.8rem"
    transition="all 0.4s cubic-bezier(.08,.52,.52,1)"
    border="4px"
    borderRadius="50%"
    bg="transparent"
    borderColor="#000"
    outline={0}
    _before={{
      content: `""`,
      position: 'absolute',
      zIndex: -1,
      bottom: 0,
      right: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      bg: 'transparent',
      transition: 'inherit',
    }}
    _hover={{
      _before: beforeStyle,
    }}
    _active={{
      _before: beforeStyle,
    }}
    _focus={{
      _before: beforeStyle,
    }}
    {...rest}
  >
    {children}
  </Box>
)

export default RoundedButton
