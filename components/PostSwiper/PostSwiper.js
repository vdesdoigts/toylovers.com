import React, { useRef, useState } from 'react'
import SwiperCore, { A11y, Keyboard, Lazy, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Icon, Image, Spinner, Wrap } from '@chakra-ui/core'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import Container from '../Container'
import RoundedButton from '../RoundedButton'

// install Swiper components
SwiperCore.use([A11y, Keyboard, Lazy, Navigation])

function imagesLoaded(parentNode) {
  const imgElements = [...parentNode.querySelectorAll('img')]
  
  for (let i = 0; i < imgElements.length; i += 1) {
    const img = imgElements[i]

    if (!img.complete) {
      return false
    }
  }

  return true
}

export default ({
  slides,
}) => {
  const containerElem = useRef()
  const swiperRef = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(true)

  const onPrevClick = (e) => {
    e.preventDefault()
    swiperRef.current.update()

    if (swiperRef.current.isBeginning && !swiperRef.current.params.loop) return
    swiperRef.current.slidePrev()
  }

  const onNextClick = (e) => {
    e.preventDefault()
    swiperRef.current.update()

    if (swiperRef.current.isEnd && !swiperRef.current.params.loop) return
    swiperRef.current.slideNext()
  }

  const handleImageChange = () => {
    const loaded = imagesLoaded(containerElem.current)
    setImgLoaded(loaded)
  }

  return (
    <>
      {!imgLoaded && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="54rem"
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
      <Box
        ref={containerElem}
        height="54rem"
        opacity={imgLoaded ? 1 : 0}
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          spaceBetween={10}
          slidesPerView="auto"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide}
                onLoad={handleImageChange}
                onError={handleImageChange}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Container display="flex" justifyContent="flex-end" pt={4}>
          <Wrap spacing={4} px={8}>
            <RoundedButton
              onClick={onPrevClick}
              fontSize="2.2rem"
              color="#000"
            >
              <Icon
                as={RiArrowLeftSLine}
                display="inline-block"
                boxSize="3rem"
                pb=".4rem"
                verticalAlign="middle"
              />
            </RoundedButton>
            <RoundedButton
              onClick={onNextClick}
              fontSize="2.2rem"
              color="#000"
            >
              <Icon
                as={RiArrowRightSLine}
                display="inline-block"
                boxSize="3rem"
                pb=".4rem"
                verticalAlign="middle"
              />
            </RoundedButton>
          </Wrap>
        </Container>
      </Box>
    </>
  );
};
