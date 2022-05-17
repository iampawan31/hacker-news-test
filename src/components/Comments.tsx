import { FC, ReactElement } from 'react'
import { CommentProp } from '../utils/types'
import { formatTimeFromNow } from '../utils/utils'
import CardLabel from './CardLabel'

const Comment: FC<CommentProp> = ({ firstLayer, comment }): ReactElement => {
  const nestedComments = (comment.children || []).map((comment, index) => {
    return <Comment key={index} firstLayer={false} comment={comment} />
  })

  const createMarkup = (markUp: string) => {
    return { __html: markUp }
  }

  return (
    <div className={`${firstLayer ? 'ml-0' : 'ml-10'} mt-2 border-dark-gray`}>
      <div className="rounded bg-gray p-4 shadow">
        <div dangerouslySetInnerHTML={createMarkup(comment.text)} />
        <div className="flex space-x-2 mt-4">
          <CardLabel label={formatTimeFromNow(comment.created_at)} />
          <CardLabel label={comment.author} />
        </div>
      </div>

      {nestedComments}
    </div>
  )
}

export default Comment
