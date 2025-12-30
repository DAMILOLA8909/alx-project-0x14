import { ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode
}

export interface ButtonProps {
  title: string | ReactNode
  action?: () => void
  disabled?: boolean
  className?: string
  icon?: ReactNode
}

export interface MovieProps {
  id?: string
  posterImage: string
  releaseYear: string
  title: string
  rating?: number
  genre?: string[]
}

interface PrimaryImage {
  url: string
}

interface TitleText {
  text: string
}

interface ReleaseYear {
  year: string
}

export interface MoviesProps {
  id: string
  primaryImage?: PrimaryImage | null
  titleText: TitleText
  releaseYear: ReleaseYear
  rating?: number
  genre?: string[]
}