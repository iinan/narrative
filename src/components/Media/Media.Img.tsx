import React from 'react'
import { IImg } from '@typings'

const Img: React.SFC<IImg> = ({ src, alt, ...props }) => {
  if (!src) return null

  const imageSrc = typeof src === 'string' ? src : src.src || src.srcSet || ''
  return <img src={imageSrc} alt={alt || ''} {...props} />
}

export default Img
