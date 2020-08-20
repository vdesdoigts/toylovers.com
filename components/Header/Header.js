import React, {
  useEffect,
  useState
} from 'react'
import Link from 'next/link'
import {
  Box,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from '@chakra-ui/core'
import { RiSearchLine } from 'react-icons/ri'
import { useWindowScroll } from 'react-use'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Container from '../Container'
import RoundedButton from '../RoundedButton'
import About from '../../pages/about'

const HEADER_HEIGHT = 90

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const { y } = useWindowScroll()
  const [isMinified, setIsMinified] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {

    if (currPos.y > prevPos.y && !isVisible) {
      setIsVisible(true)
    } else if (currPos.y <= prevPos.y && currPos.y < -HEADER_HEIGHT && isVisible) {
      setIsVisible(false)
    }

    if (currPos.y < -HEADER_HEIGHT && !isMinified) {
      setIsMinified(true)
    } else if (currPos.y >= -HEADER_HEIGHT && isMinified) {
      setIsMinified(false)
    }

    // if (currPos.y < -70 && !isMinified) {
    //   setIsMinified(true)
    // } else if (currPos.y >= -70 && isMinified) {
    //   setIsMinified(false)
    // }
  })

  // useEffect(() => {
  //   if (y > 70 && !isMinified) {
  //     setIsMinified(true)
  //   } else if (y <= 70 && isMinified) {
  //     setIsMinified(false)
  //   }
  // }, [y])

  return (
    <>
      <Box
        as="header"
        position="fixed"
        zIndex={10}
        top={isVisible ? 0 : '-9rem'}
        left={0}
        width="100%"
        height={isMinified ? '7rem' : '9rem'}
        px={[0, 8]}
        bgColor="white"
        transition="all 0.4s cubic-bezier(.08,.52,.52,1)"
        // borderBottom={`.4rem solid ${isMinified ? '#FFFC0B' : 'white'}`}
      >
        <Container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          height="100%"
        >
          <Link as="/" href="/">
            <Heading
              as="p"
              position="relative"
              zIndex={1}
              display="inline-block"
              marginBottom="1"
              fontSize={['2.8rem', '4rem']}
              fontWeight="black"
              textTransform="uppercase"
              transition="all 0.4s cubic-bezier(.08,.52,.52,1)"
              transformOrigin="center left"
              transform={isMinified ? 'scale(.7)' : 'scale(1)'}
              cursor="pointer"
              _before={{
                content: `""`,
                position: 'absolute',
                zIndex: -1,
                bottom: 0,
                left: '-6px',
                display: 'block',
                width: 'calc(100% + 12px)',
                height: '56%',
                bg: '#FFFC0B',
              }}
            >
              Toy Lovers
            </Heading>
          </Link>
          <Box>
            <Text
              onClick={onOpen}
              position="relative"
              fontSize="1.6rem"
              cursor="pointer"
              _hover={{
                _before: {
                  content: `""`,
                  position: 'absolute',
                  zIndex: -1,
                  bottom: 0,
                  left: '-6px',
                  display: 'block',
                  width: 'calc(100% + 12px)',
                  height: '56%',
                  bg: '#FFFC0B',
                }
              }}
            >
              About
            </Text>
            {/* <RoundedButton fontSize="2.2rem" color="#000">
              <Icon
                as={RiSearchLine}
                display="inline-block"
                pb=".4rem"
                verticalAlign="middle"
              />
            </RoundedButton> */}
          </Box>
        </Container>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay zIndex={100}>
          <ModalContent maxW="60rem">
            <ModalCloseButton zIndex={1} />
            <ModalBody>
              <About />
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}

export default Header
