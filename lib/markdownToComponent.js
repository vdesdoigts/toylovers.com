import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import { Heading, Image, Link, Text, Swiper, Video } from '../components/Article'

const markdownToComponent = (html) => {
  return unified()
    .use(parse)
    .use(remark2react, { remarkReactComponents: {
      h2: Heading,
      h5: Video,
      h6: Swiper,
      p: Text,
      img: Image,
      a: Link,
    } })
    .processSync(html).result
}

export default markdownToComponent
