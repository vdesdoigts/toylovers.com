import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import { Heading, Text } from '../components/Article'


const markdownToComponent = (html) => {
  return unified()
    .use(parse)
    .use(remark2react, { remarkReactComponents: {
      h2: Heading,
      p: Text
    } })
    .processSync(html).result
}

export default markdownToComponent
