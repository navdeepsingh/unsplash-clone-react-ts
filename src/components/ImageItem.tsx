import React from 'react'
import {Button} from '@navdeepsingh/bit-components.button'
import {ImageProps} from '../types'
import styled from 'styled-components'

const StyledImageItem = styled.div`
  text-align: center;
`

function ImageItem({
  image,
  onClick,
}: {
  image: ImageProps
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <StyledImageItem key={image.id}>
      <img src={image.urls.small} alt={image.alt_description} />
      <Button
        label="Open Modal"
        data-url={image.urls.full}
        data-alt={image.alt_description}
        data-credit={image.user.name}
        primary
        onClick={onClick}
      />
    </StyledImageItem>
  )
}

export default ImageItem
