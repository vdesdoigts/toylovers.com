import React from 'react'
import Link from 'next/link'
import {
  AspectRatio,
  Box,
  Heading,
  Image,
  Text,
} from '@chakra-ui/core'
import DateFormater from './../DateFormater'
import { useCursorDispatch, CARD_TYPE, DEFAULT_TYPE } from '../../contexts/Cursor'

const PostCard = ({
  title,
  coverImage,
  date,
  author,
  slug,
  excerpt,
}) => {
  const dispatch = useCursorDispatch()
  
  return (
    <Box
      as="article"
      position="relative"
      onMouseEnter={() => dispatch({ color: '#FFF', type: CARD_TYPE })}
      onMouseLeave={() => dispatch({ color: '#000', type: DEFAULT_TYPE })}
    >
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <Box as="a" aria-label={title}>
          <AspectRatio ratio={600/480}>
            <Image
              alt={title} 
              src={coverImage}
              objectFit="cover"
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
            <Text
              fontSize="2rem"
              fontWeight="medium"
            >
              {author.name}
            </Text>
            <Heading
              as="h2"
              fontSize="3rem"
              fontWeight="bold"
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
