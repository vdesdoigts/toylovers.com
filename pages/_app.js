import React, { useEffect, useState } from 'react'
import { Box, ChakraProvider, CSSReset, GlobalStyle } from '@chakra-ui/core'
import { useTrail } from 'react-spring'
import theme from '../styles/theme'
import 'typeface-montserrat'
import 'swiper/swiper-bundle.css';
import './../styles/globals.css'
import Cursor from '../components/Cursor/Cursor'
import Header from '../components/Header'
import { CursorProvider } from '../contexts/Cursor'

const fast = { mass: 4, tension: 400, friction: 40 }

function MyApp({ Component, pageProps }) {
  const [trail, set] = useTrail(1, () => ({ xy: [0, 0], config: () => fast }))
  const [hideCursor, setHideCursor] = useState(true)

  useEffect(() => {
    setHideCursor(false)
  }, [])
  
  return (
    <CursorProvider>
      <div onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <GlobalStyle />
          <Header />
          {/* {trail.map((props, index) => (
            <Cursor key={index} xy={props.xy} opacity={hideCursor ? 0 : 0.6} />
          ))} */}
          <Box pt="10rem">
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </div>
    </CursorProvider>
  )
}

export default MyApp
