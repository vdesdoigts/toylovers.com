import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { Box, Heading, Icon, Text } from '@chakra-ui/core'
import { RiInstagramLine } from 'react-icons/ri'
import { useCursorDispatch, DEFAULT_TYPE } from '../../contexts/Cursor'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import markdownToComponent from '../../lib/markdownToComponent'
import Container from '../../components/Container'
import PostSwiper from '../../components/PostSwiper'
import RoundedButton from '../../components/RoundedButton'

const titleStyle = {
  position: 'relative',
  zIndex: 1,
  display: 'inline-block',
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
  const router = useRouter()
  const dispatch = useCursorDispatch()

  useEffect(() => {
    dispatch({ color: '#000', type: DEFAULT_TYPE })
  }, [])

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Box as="article" position="relative" pb="56">
            <Head>
              <title>
                Interview with {post.title} — {CMS_NAME}
              </title>
              <meta
                property="og:title"
                content={`Interview with ${post.title} | ${CMS_NAME}`}
              />
              <meta property="og:description" content={`Interview with ${post.title}. ${post.excerpt}`} />
              <meta property="og:url" content={post.slug} />
              <meta property="og:image" content={`https://www.toylovers.club${post.ogImage.url}`} />
              <meta property="article:published_time" content={post.date} />
              
              <meta name="twitter:title" content={`Interview with ${post.title} | ${CMS_NAME}`} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:image"
                content={`https://www.toylovers.club${post.ogImage.url}`}
              />
            </Head>
            <PostSwiper slides={post.swiper} />
            <Container
              pt="16"
              maxWidth="80rem"
            >
              {post.author.name !== post.title && (<>
                <Heading
                  as="h2"
                  fontSize={['2.6rem', '2.6rem', '3.4rem']}
                  {...titleStyle}
                >
                  {post.author.name}
                </Heading><br />
              </>)}
              <Heading
                as="h1"
                fontSize={['2.6rem', '2.6rem', '3.4rem']}
                {...titleStyle}
              >
                {post.title}
              </Heading>
            </Container>
            <Container
              maxWidth="80rem"
              lineHeight="1.6"
            >
              {markdownToComponent(post.content)}
              <Text pt="12" fontSize={['1.8rem', '1.8rem', '2rem']} fontWeight="medium">Cheers 🤘</Text>
            </Container>
            <Container
              position={['relative', 'relative', 'relative', 'relative', 'fixed']}
              bottom={[0, 0, 0, 0, 8]}
              left={0}
              maxWidth={['80rem', '80rem', '80rem', '80rem', 'xl']}
              pt={16}
              pointerEvents="none"
            >
              <Box
                as="a"
                display="flex"
                href={post.instagram.link}
                target="_blank"
                alignItems="center"
                lineHeight="1.2"
                pointerEvents="initial"
              >
                <RoundedButton
                  color="#000"
                  fontSize="2rem"
                >
                  <Icon
                    as={RiInstagramLine}
                    display="inline-block"
                    boxSize="2.6rem"
                    verticalAlign="middle"
                  />
                </RoundedButton>
                <Text
                  pl="4"
                  fontSize="1.6rem"
                  fontWeight="extrabold"
                  textTransform="uppercase"
                >
                  {post.instagram.label} <br/>instagram
                </Text>
              </Box>
            </Container>
          </Box>
        </>
      )}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'swiper',
    'instagram',
  ])
  const content = post.content || ''

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
