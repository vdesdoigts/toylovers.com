import { useState } from 'react'

export default () => {
  const [color, setColor] = useState('#000')

  return {
    color,
    setColor,
  }
}
