

interface Tag {
  id: number
  tag: string
}

export interface AddToolFormValues {
  title: string
  description: string
  link: string
  tags: string[]
}

export interface OwnProps {
  className?: string,
  style?: {}
}

export type Props = OwnProps
