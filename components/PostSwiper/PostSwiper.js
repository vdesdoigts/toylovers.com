import React, { useRef, useState } from 'react'
import SwiperCore, { A11y, Keyboard, Lazy, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Icon, Spinner, Wrap } from '@chakra-ui/core'
import Image from 'react-cool-img'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import Container from '../Container'
import RoundedButton from '../RoundedButton'
import { imagesLoaded } from '../../lib/medias'

// install Swiper components
SwiperCore.use([A11y, Keyboard, Lazy, Navigation])

export default ({
  slides,
}) => {
  const swiperRef = useRef(null)

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

  return (
    <Box
      height={["30rem", "54rem"]}
      pb={[16, 0]}
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        spaceBetween={10}
        slidesPerView="auto"
        updateOnImagesReady={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              style={{ backgroundColor: '#E2E8F0' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Container display="flex" justifyContent="flex-end" pt={4}>
        <Wrap spacing={4} px={[0, 8]}>
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
  );
};