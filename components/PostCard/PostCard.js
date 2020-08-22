import React from 'react'
import Link from 'next/link'
import {
  AspectRatio,
  Box,
  Heading,
  Text,
} from '@chakra-ui/core'
import Image from 'react-cool-img'
import DateFormater from './../DateFormater'
import { useCursorDispatch, CARD_TYPE, DEFAULT_TYPE } from '../../contexts/Cursor'

const textHover = {
  position: 'relative',
  zIndex: '1',
  display: 'inline-block',
  _before: {
    content: `""`,
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    left: '-2px',
    display: 'block',
    width: 'calc(100% + 4px)',
    height: '0',
    bg: 'black',
    transition: 'height .2s ease'
  },
  _groupHover: {
    _before: {
      height: '56%',
    }
  }
}

const PostCard = ({
  title,
  coverImage,
  date,
  author,
  slug,
  excerpt,
  handleImageChange,
}) => {
  const dispatch = useCursorDispatch()
  
  return (
    <Box
      as="article"
      position="relative"
      onMouseEnter={() => dispatch({ color: '#FFF', type: CARD_TYPE })}
      onMouseLeave={() => dispatch({ color: '#000', type: DEFAULT_TYPE })}
      role="group"
    >
      <Link as={`/interviews/${slug}`} href="/interviews/[slug]">
        <Box as="a" aria-label={title} href={`/interviews/${slug}`}>
          <AspectRatio ratio={600/480}>
            <Image
              style={{ backgroundColor: '#E2E8F0', objectFit: 'cover' }}
              alt={title} 
              src={coverImage}
            />
          </AspectRatio>
          <Box
            position="absolute"
            bottom={0}
            left={0}
            px="3rem"
            py="2rem"
            color="white"
            textTransform="uppercase"
            lineHeight={1.1}
          >
            {author.name !== title && (<>
              <Text
                fontSize={['1.6rem', '1.8rem', '2rem']}
                fontWeight="medium"
                {...textHover}
              >
                {author.name}
              </Text><br/>
            </>)}
            <Heading
              as="h2"
              fontSize={['2.2rem', '2.4rem', '3rem']}
              fontWeight="bold"
              {...textHover}
            >
              {title}
            </Heading>
            {/* <DateFormater dateString={date} /> */}
          </Box>
        </Box>
      </Link>
    </Box>
  )
}

export default PostCard
