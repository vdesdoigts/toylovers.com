import React from 'react'
import Head from 'next/head'
import { Box, Heading } from '@chakra-ui/core'
import { CMS_NAME } from '../lib/constants'
import Container from '../components/Container'
import { Text } from '../components/Article'

const titleStyle = {
  position: 'relative',
  zIndex: 1,
  display: 'inline-block',
  fontSize: '3.4rem',
  fontWeight: 'extrabold',
  textTransform: 'uppercase',
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
}

export default function Post({ post }) {


  return (
    <div>
        <>
          <Box as="article" position="relative" pb="20">
            <Head>
              <title>
                About | {CMS_NAME}
              </title>
            </Head>
            <Container
              pt="16"
              maxWidth="82rem"
            >
              <Heading as="h1">
                <Box as="span" {...titleStyle}>
                  Who's behind
                </Box> <br />
                <Box as="span" {...titleStyle}>
                  the mask
                </Box>
              </Heading>
            </Container>
            <Container
              maxWidth="82rem"
            >
              <Text>Toy Lovers is a project about toy photography and those whose creativity inspires us every day.</Text>
              <Text>Everyone can participate, being creative doesn't necessitate being a "famous instagram influencer".</Text>
              <Text>
                You can reach me on Twitter{' '}
                <Box
                  as="a"
                  target="_blank"
                  href="https://twitter.com/vdesdoigts"
                  position="relative"
                  zIndex={0}
                  borderBottom="2px solid #FFFC0B"
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
                  @vdesdoigts
                </Box>
                {' '}if you have any request or comment.
              </Text>
            </Container>
          </Box>
        </>
    </div>
  )
}
