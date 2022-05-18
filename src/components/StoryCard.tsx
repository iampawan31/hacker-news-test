import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { StoryCardProps } from '../utils/types'
import { formatTimeFromNow } from '../utils/utils'
import CardLabel from './CardLabel'

const StoryCard: FC<StoryCardProps> = ({ story }): ReactElement => {
  return (
    <Link className="hover:shadow-md transition" to={`/${story.objectID}`}>
      <div className="bg-white shadow rounded px-2 pt-2 flex flex-col justify-between">
        <div className="text-lg py-2">{story.title}</div>
        <div className="flex pb-2 flex-wrap">
          <CardLabel label={`${story.points} points`} />
          <CardLabel label={`story by ${story.author}`} />
          <CardLabel label={`${story.num_comments} comments`} />
          <CardLabel
            label={`published ${formatTimeFromNow(story?.created_at)}`}
          />
        </div>
      </div>
    </Link>
  )
}

export default StoryCard
