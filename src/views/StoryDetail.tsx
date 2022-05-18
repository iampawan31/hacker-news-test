import { FC, ReactElement, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CardLabel, Comment, Loader } from '../components'
import { BASE_API_ITEM_URL } from '../utils/constants'
import { StoryType } from '../utils/types'
import { formatTimeFromNow } from '../utils/utils'

const StoryDetail: FC = (): ReactElement => {
  let params = useParams()
  let navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(true)
  const [story, setStory] = useState<StoryType | null>(null)

  const fetchStoryByID = async () => {
    try {
      if (params.objectID) {
        setLoading(true)
        const response = await fetch(`${BASE_API_ITEM_URL}/${params.objectID}`)
        const data = await response.json()
        if (data) {
          setStory(data)
          setLoading(false)
        } else {
          navigate('/')
        }
      }
    } catch (error) {
      navigate('/')
    }
  }

  useEffect(() => {
    fetchStoryByID()
  }, [params])

  return (
    <div className="container mx-auto min-h-screen h-full max-w-3xl p-4">
      <div className="flex flex-col space-y-4">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className="mb-4">
              <Link
                className="bg-white px-4 py-2 rounded shadow hover:bg-opacity-50 disabled:bg-gray disabled:cursor-not-allowed transition"
                to={'/'}
              >
                Go Back
              </Link>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="text-3xl">{story?.title}</div>
              <div className="flex flex-wrap my-4">
                <CardLabel label={`${story?.points} points`} />
                <CardLabel label={`story by ${story?.author}`} />
                <CardLabel
                  label={`published ${formatTimeFromNow(story?.created_at)}`}
                />
              </div>
              <div className="flex flex-col space-y-1">
                {story?.children &&
                  story?.children.map((comment, index) => (
                    <Comment firstLayer={true} key={index} comment={comment} />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StoryDetail
