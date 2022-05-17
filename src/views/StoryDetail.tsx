import { useEffect, useState } from 'react'
import { BASE_API_ITEM_URL } from '../utils/constants'
import { StoryType } from '../utils/types'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Loader } from '../components'

const StoryDetail = () => {
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
    <div className="container mx-auto max-w-3xl p-4">
      <div className="flex flex-col space-y-4">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className="mb-4">
              <Link className="bg-white rounded shadow p-2" to={'/'}>
                Go Back
              </Link>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div>{story?.title}</div>
              <div>{story?.points}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StoryDetail
