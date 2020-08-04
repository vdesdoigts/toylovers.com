import React, { useRef, useState } from 'react'
import Head from 'next/head'
import { Box, Grid, Spinner } from '@chakra-ui/core'
import { getAllPosts } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Container from '../components/Container'
import PostCard from '../components/PostCard'
import { imagesLoaded } from '../lib/medias'

export default function Home({ allPosts }) {
  const containerElem = useRef()
  const [imgLoaded, setImgLoaded] = useState(false)

  const handleImageChange = () => {
    const loaded = imagesLoaded(containerElem.current)
    setImgLoaded(loaded)
  }

  return (
    <>
      {!imgLoaded && (
        <Box
          position="fixed"
          zIndex="99"
          top={0}
          left={0}
          width="100%"
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="#CCC"
        >
          <Spinner
            color="#FFF"
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#FFFC0B"
          />
        </Box>
      )}
      <Head>
        <title>{CMS_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as="main">
        <Grid
          ref={containerElem}
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
          ]}
          gap={8}
        >
          {allPosts.length > 0 && allPosts.map(post => (
            <PostCard
              key={post.title}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              handleImageChange={handleImageChange}
            />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
