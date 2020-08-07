import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { animated } from 'react-spring'
import { useCursorState, CARD_TYPE, DEFAULT_TYPE } from '../../contexts/Cursor'

const trans = (x, y) => `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`

const CursorEl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  will-change: transform;
  width: 4.8rem;
  height: 4.8rem;
  border: 1px solid #000;
  border-radius: 50%;
  background: transparent;
  pointer-events: none;

  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`
const AnimatedCursor = animated(CursorEl)

const Cursor = ({ xy, opacity }) => {
  const { color, type } = useCursorState()

  const getStyleForType = (type) => {
    switch(type) {
      case CARD_TYPE:
        return {
          width: '2.8rem',
          height: '2.8rem',
          backgroundColor: color,
        }
    }
  }

  return (
    <AnimatedCursor
      style={{
        transform: xy.interpolate(trans),
        transition: 'width .3s ease, height .3s ease, background-color .3s ease',
        opacity,
        borderColor: color,
        ...getStyleForType(type)
      }}
    />
  )
}

export default Cursor
