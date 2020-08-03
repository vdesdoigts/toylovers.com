import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { Heading } from '@chakra-ui/core'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import markdownToComponent from '../../lib/markdownToComponent'
import Container from '../../components/Container'
import PostSwiper from '../../components/PostSwiper'

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
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  console.log('post: ', post)

  return (
    <div>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostSwiper slides={post.swiper} />
            <Container
              pt="16"
              maxWidth="82rem"
            >
              <Heading
                as="h2"
                {...titleStyle}
              >
                {post.author.name}
              </Heading><br />
              <Heading
                as="h1"
                {...titleStyle}
              >
                {post.title}
              </Heading>
            </Container>
            <Container
              maxWidth="82rem"
            >
              {markdownToComponent(post.content)}
            </Container>
          </article>
        </>
      )}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'swiper',
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
