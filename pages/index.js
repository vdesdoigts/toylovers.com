import Head from 'next/head'
import { Grid } from '@chakra-ui/core'
import { getAllPosts } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Container from '../components/Container'
import PostCard from '../components/PostCard'

export default function Home({ allPosts }) {
  console.log('allPosts: ', allPosts)

  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as="main">
        <Grid templateColumns={[
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
