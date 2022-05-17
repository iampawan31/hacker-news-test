import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { StoryCardProps } from '../utils/types'
import CardLabel from './CardLabel'
import moment from 'moment'

const StoryCard: FC<StoryCardProps> = ({ story }): ReactElement => {
  const formattedDate = story?.created_at
    ? moment(story?.created_at).fromNow()
    : ''
  return (
    <Link className="hover:shadow-md transition" to={`/${story.objectID}`}>
      <div className="bg-white shadow rounded px-2 pt-2 flex flex-col justify-between">
        <div className="text-lg py-2">{story.title}</div>
        <div className="flex space-x-2 pb-2">
          <CardLabel label={`${story.points} points`} />
          <CardLabel label={`story by ${story.author}`} />
          <CardLabel label={`${story.num_comments} comments`} />
          <CardLabel label={`published ${formattedDate}`} />
        </div>
      </div>
    </Link>
  )
}

export default StoryCard
