import {useEffect, useState} from 'react'
import {ImageProps, StatusProps} from '../types'

const API_URL =
  'https://api.unsplash.com/photos/?client_id=74afffb9a7b7829d0439d12c87e2897797059b651fd39cd33d3c5ebc1293e4f8'

export const useImagesFromApi = (
  initialValue: [],
): [ImageProps[], StatusProps] => {
  const [images, setImages] = useState<ImageProps[]>(initialValue)
  const [status, setStatus] = useState<StatusProps>({
    success: false,
    loading: true,
    error: null,
  })

  /**
   * On Page load fetch the results from API URL
   */
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        setImages(result)
        setStatus({success: true, loading: false, error: null})
      })
      .catch(err => {
        console.log(err)
        setStatus({
          error: 'Something Wrong, Try refresh page please!',
          loading: true,
          success: false,
        })
      })
  }, [])

  return [images, status]
}
