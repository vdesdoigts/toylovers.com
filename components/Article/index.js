import { Box, Heading as ChakraHeading, Image as ChakraImage, Text as ChakraText } from '@chakra-ui/core'
import ReactCoolImage from 'react-cool-img'
import PostSwiper from '../PostSwiper'

export const Heading = (props) => (
  <ChakraHeading pt="24" fontSize="3.4rem" fontWeight="bold" {...props} />
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

export const Swiper = (props) => {
  const slides = JSON.parse(props.children[0])

  return (
    <Box
      position="relative"
      height={['28rem', '38rem']}
      mt={16}
      bgcolor="#ccc"
    >
      <Box
        position="absolute"
        top={0}
        left="-4rem"
        width="calc(40rem + 100vw / 2)"
      >
        <PostSwiper
          slides={slides}
          swiperHeight={['28rem', '38rem']}
          showNavigation={false}
        />
      </Box>
    </Box>
  )
}
