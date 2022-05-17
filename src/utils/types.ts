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
}

export type StoryCardProps = {
  story: StoryType
}

export type CardLabelProps = {
  label: string
}
