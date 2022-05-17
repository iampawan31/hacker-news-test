export type StoryType = {
  created_at: string
  title: string
  url: string
  author: string
  points: number
  story_text: string
  comment_text?: string
  num_comments: number
  created_at_i: number
  relevancy_score: number
  objectID: string
  children?: []
}

export type StoryCardProps = {
  story: StoryType
}

export type CardLabelProps = {
  label: string
}

export type SearchCardProps = {
  processInput: Function
}

export type CommentProp = {
  firstLayer: boolean
  comment: {
    id: number
    created_at: string
    type: string
    author: string
    text: string
    points: null
    children?: []
  }
}
