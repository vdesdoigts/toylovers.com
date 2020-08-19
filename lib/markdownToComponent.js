import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import { Heading, Image, Link, Text } from '../components/Article'


const markdownToComponent = (html) => {
  return unified()
    .use(parse)
    .use(remark2react, { remarkReactComponents: {
      h2: Heading,
      p: Text,
      img: Image,
      a: Link,
    } })
    .processSync(html).result
}

export default markdownToComponent
