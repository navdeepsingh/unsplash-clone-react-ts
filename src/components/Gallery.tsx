import React, {useState} from 'react'
import {DialogImageProps} from '../types'
import {Modal} from '@navdeepsingh/bit-components.modal'
import {StyledGallery, GalleryWrapper} from '../styled/Gallery'
import ImageItem from './ImageItem'
import {useImagesFromApi} from '../hooks/use-images-from-api'

function Gallery() {
  const [images, status] = useImagesFromApi([])

  const [showDialog, setShowDialog] = useState(false)
  const [dialogImage, setDialogImage] = useState<DialogImageProps>({
    url: '',
    alt: '',
    credit: '',
  })

  /**
   * Handle on click callback on Button
   */
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()

    let {url, alt, credit} = e.currentTarget.dataset
    setShowDialog(true)
    setDialogImage({url, alt, credit})
  }

  return (
    <StyledGallery>
      {!status.loading && status.success ? (
        <GalleryWrapper>
          {images?.map(image => (
            <ImageItem image={image} onClick={handleClick} />
          ))}
        </GalleryWrapper>
      ) : status.error ? (
        <div className="error-message">Error: {status.error}</div>
      ) : (
        <div className="loading">Painting the DOM...</div>
      )}

      {/* Modal for gallery images */}
      <Modal isOpen={showDialog}>
        {dialogImage.url ? (
          <>
            <div className="dialog-content">
              <img src={dialogImage?.url} alt={dialogImage?.alt} />
            </div>
            <button
              className="close"
              onClick={() => setShowDialog(false)}
            ></button>
            <div className="image-credits">
              Image Credits: {dialogImage?.credit}
            </div>
          </>
        ) : (
          'Loading...'
        )}
      </Modal>
    </StyledGallery>
  )
}

export default Gallery
