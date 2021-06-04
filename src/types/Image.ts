type UrlsProps = {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

type linksProps = {
  self: string
  html: string
  download: string
  download_location: string
}

type UserProps = {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string | null
  last_name: string | null
  twitter_username: string | null
  portfolio_url: string | null
  bio: string | null
  location: string | null
  links: any
  profile_image: any
  instagram_username: string | null
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
}

export interface ImageProps {
  id: string
  created_at: null | string
  updated_at: null | string
  promoted_at: null | string
  width: number
  height: number
  color: string
  blur_hash: string
  description: null | string
  alt_description: string
  urls: UrlsProps
  links: linksProps
  categories: Array<string | null> | []
  likes: number
  liked_by_user: boolean
  current_user_collections: Array<string | null> | []
  sponsorship: any
  user: UserProps
}

export interface DialogImageProps {
  url: any
  alt: any
  credit: any
}
