import React, { useState } from 'react'
import { Box, ChakraProvider, CSSReset, GlobalStyle } from '@chakra-ui/core'
import { useTrail } from 'react-spring'
import Head from 'next/head'
import theme from '../styles/theme'
import 'typeface-montserrat'
import 'swiper/swiper-bundle.css';
import { CMS_NAME } from '../lib/constants'
import './../styles/globals.css'
import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { CursorProvider } from '../contexts/Cursor'

const fast = { mass: 4, tension: 400, friction: 40 }

function MyApp({ Component, pageProps }) {
  const [trail, set] = useTrail(1, () => ({ xy: [0, 0], config: () => fast }))
  const [hideCursor, setHideCursor] = useState(true)
  
  return (
    <CursorProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="toy photography, toy, toys, photography, photographies, actions figures, instagram, interview"
        />

        <meta
          property="og:title"
          content="Toy Lovers 🎈"
        />
        <meta property="og:description" content="Weekly interviews with toy photographers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.toylovers.club" />
        <meta property="og:locale" content="eng" />
        <meta property="og:site_name" content="Toy Lovers 🎈" />
        <meta property="og:image" content="https://www.toylovers.club/assets/images/logo-1200x630.png" />
        <meta property="og:image:url" content="https://www.toylovers.club/assets/images/logo-1200x630.png" />
        <meta property="og:image:url:width" content="1200" />
        <meta property="og:image:url:height" content="630" />

        <meta name="twitter:site" content="@vdesdoigts" />
        <meta name="twitter:creator" content="@vdesdoigts" />
        <meta name="twitter:image" content="https://www.toylovers.club/assets/images/logo-600x600.png" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-21027712-7');
            `,
          }}
        />
      </Head>
      <div
        onMouseMove={(e) => {
          if (hideCursor) {
            setHideCursor(false)
          }
          set({ xy: [e.clientX, e.clientY] })
        }}
      >
        <ChakraProvider theme={theme}>
          <CSSReset />
          <GlobalStyle />
          <Header />
          {trail.map((props, index) => (
            <Cursor key={index} xy={props.xy} opacity={hideCursor ? 0 : 0.6} />
          ))}
          <Box pt="9rem">
            <Component {...pageProps} />
          </Box>
          <Footer />
        </ChakraProvider>
      </div>
    </CursorProvider>
  )
}

export default MyApp
