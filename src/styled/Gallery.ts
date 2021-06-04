import styled from 'styled-components'

export const StyledGallery = styled.div`
  margin-top: 170px;

  .loading {
    text-align: center;
  }

  .dialog-content {
    min-height: 400px;
    img {
      width: 100%;
      height: auto;
      max-height: 600px;
      object-fit: cover;
    }
  }
  .image-credits {
    position: absolute;
    bottom: 5px;
    color: darkgray;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;
    height: 32px;
    opacity: 1;
    background: none;
    border: none;

    &::before,
    &::after {
      position: absolute;
      left: 15px;
      top: 0;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: black;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
`
export const GalleryWrapper = styled.div`
  margin: 0.8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  img {
    text-align: center;
    margin: 0 auto;
  }
`
