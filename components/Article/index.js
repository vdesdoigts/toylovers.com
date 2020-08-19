import { Box, Heading as ChakraHeading, Image as ChakraImage, Text as ChakraText } from '@chakra-ui/core'
import ReactCoolImage from 'react-cool-img'

export const Heading = (props) => (
  <ChakraHeading pt="16" fontSize="3.4rem" fontWeight="bold" {...props} />
)

export const Text = (props) => (
  <ChakraText pt="12" fontSize="2rem" fontWeight="medium" {...props} />
)

export const Image = (props) => (
  <Box
    position="relative"
    as="span"
    display="inline-block"
    width="108%"
    ml="-4%"
    mb={2}
    // _before={{
    //   content: `""`,
    //   position: 'absolute',
    //   zIndex: -1,
    //   bottom: '-10px',
    //   right: '-20px',
    //   display: 'block',
    //   width: '100%',
    //   height: '100%',
    //   bg: '#FFFC0B',
    //   transition: 'inherit',
    // }}
  >
    <ChakraImage
      {...props}
      style={{ backgroundColor: '#E2E8F0', objectFit: 'cover' }}
    />
  </Box>
)

export const Link = (props) => (
  <Box
    {...props}
    as="a"
    target="_blank"
    position="relative"
    display="inline-block"
    fontSize="2rem"
    cursor="pointer"
    _before={{
      content: `""`,
      position: 'absolute',
      zIndex: -1,
      bottom: 0,
      left: '-2px',
      display: 'block',
      width: 'calc(100% + 4px)',
      height: '10%',
      bg: '#FFFC0B',
      transition: 'height .2s ease'
    }}
    _hover={{
      _before: {
        height: '56%',
      }
    }}
  />
)
